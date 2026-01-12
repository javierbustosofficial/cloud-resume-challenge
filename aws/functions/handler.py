import json
import os
import boto3

ddb = boto3.resource("dynamodb")
table = ddb.Table(os.environ["TABLE_NAME"])
COUNTER_KEY = os.environ.get("COUNTER_KEY", "views")

def handler(event, context):
    method = event.get("requestContext", {}).get("http", {}).get("method", "GET")

    if method == "POST":
        resp = table.update_item(
            Key={"id": COUNTER_KEY},
            UpdateExpression="ADD #c :inc",
            ExpressionAttributeNames={"#c": "count"},
            ExpressionAttributeValues={":inc": 1},
            ReturnValues="UPDATED_NEW",
        )
        count = int(resp["Attributes"]["count"])
    else:
        resp = table.get_item(Key={"id": COUNTER_KEY})
        count = int(resp.get("Item", {}).get("count", 0))

    return {
        "statusCode": 200,
        "headers": {"content-type": "application/json"},
        "body": json.dumps({"count": count}),
    }