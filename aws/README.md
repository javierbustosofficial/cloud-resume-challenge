# Cloud Infrastructure Setup

It's time to set up the foundation of our cloud infrastructure. The easiest and most comfortable path for me would be to set everything up via the AWS UI. But the whole point of this project is to get out of my comfort zone and expand my skillset. I'll be using other tools to accomplish the challenge objectives. 

In preparation, the domain "javier-bustos.com" has been purchased via a third-party registrar due to issues with purchasing via Route 53 (likely caused by the fact that I had just created the AWS Account). 

A Hosted Zone has been created in Route 53 and the Name Servers have been adjusted to point to AWS within the registrar's UI.

## IAC Solution

I will be using Terraform to deploy the cloud infrastructure. CloudFormation would also work here, but every cloud-related job posting I see online looks for experience in Terraform, so that's what I'll go with.

### Installing Terraform

First we need to install some prereqs. I am following the installation instructions from HashiCorp's site, which can be found [here](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

I ran these command in order to install Terraform:

```sh
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common
```

```sh
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null
```

(Verifies the HashiCorp GPG key installed above):
```sh
gpg --no-default-keyring \
--keyring /usr/share/keyrings/hashicorp-archive-keyring.gpg \
--fingerprint
```

```sh
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(grep -oP '(?<=UBUNTU_CODENAME=).*' /etc/os-release || lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
```

```sh
sudo apt update
```

```sh
sudo apt-get install terraform
```

And with that Terraform is now installed.

## Installing the AWS CLI
I will be installing the AWS CLI so I can pass the access keys for the IAM account that will be used by Terraform for deployments.

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

## Configuration Management

The cloud resume challenge suggests using Ansible. Along with many aspects of this project, I had no idea what Ansible was or what it did.

After doing some research, I found that this is a tool used for configuration management. So it will be used alongside Terraform.

In layman's terms:

Terraform = Spin up infrasctructure<br>
Ansible = Configure the infrastructure

That's at least how I'm making it make sense in my head.

### Installing Ansible

Run this command:

```sh
pipx install --include-deps ansible
```


## Configuration

Now that we have Terraform, Ansible, and the AWS CLI installed, it's time to set up our deployment.

## AWS CLI

I created a new IAM user in my AWS account specifically for use in this project. It has no console access or login credentials. I created an access key and set up a profile in this environment using: 
```sh
aws configure --profile
```

## Terraform Config Files

I spent some time on HashiCorp's docs, and found that it's best practice to configure the terraform block in it's own dedicated `terraform.tf` file, so that's what I did to define the AWS provider.

For my configuration blocks, I will be using `main.tf`. This file will include the configuration for the S3 bucket I will be creating. For now, I will only be defining the bucket name.

## Ansible Playbook

For Ansible, I created `deploy.yml` which will be the playbook I will use for the deployment. I used ChatGPT to draft a template, this is what it spit out:

![](../documentation/media/Screenshot%202026-01-11%20at%206.40.09 AM.png)

I adjusted the `tf_dir` variable to point to the correct location of my terraform files, and removed the `aws_profile` variable. Everything else seems to be good to go.


### Create and Edit Vault

I will need to create an Ansible vault to pass on some variables to the playbook. It's not really needed since it'll be storing non-sensitive information, but just for the learning experience I'm going to use one.

```sh
cd aws
ansible-vault create playbooks/vaults/prod.yml
ansible-vault edit playbooks/vaults/prod.yml
```

I will create a variable for the `AWS_REGION` and `AWS_PROFILE` and will use these to replace within the Ansible playbook.

The playbook code now looks like this:

![](../documentation/media/Screenshot%202026-01-11%20at%206.51.53 AM.png)

## Time To Deploy

Okay, we should be good to deploy this playbook now.
I could just deploy the playbook manually but I want to use a bin script just for practice. 

Script has been [created](./bin/deploy) and ran, and appears to have been successful

![](../documentation/media/Screenshot%202026-01-11%20at%206.57.29 AM.png)

And confirmed success by checking the S3 console:

![](../documentation/media/Screenshot%202026-01-11%20at%207.04.14 AM.png)

## Bucket Configuration

Now that the bucket has been created, it's time to configure it to enable static hosting, set up DNS, transfer our website files, etc.


### Static Website Hosting

First I will be enabling static website hosting. For S3, it's quite simple, just need to define the `index.html` file and we should be all set. The below code was added to the main.tf file and was ran successfully using the Ansible playbook we created earlier.

```sh
resource "aws_s3_bucket_website_configuration" "site" {
  bucket = aws_s3_bucket.site.id

  index_document {
    suffix = "index.html"
  }
}
```

Verified S3 static hosting is now enabled for the bucket via the AWS Console. 

### Resume Website File Upload

I will be using Ansible to upload the website files up to the S3 bucket. I'll be creating a new playbook called `upload.yml` that will handle the build and upload process for our website application.

I again used ChatGPT to create a first draft of the playbook. Here is the output:

![](../documentation/media/Screenshot%202026-01-11%20at%2010.27.51 PM.png)

I did end up including the Ansible vault as the `vars_files` to reference both the `AWS_PROFILE` and `AWS_REGION` in the last task. That is the only change I made, here is the current state of the new playbook:

![](../documentation/media/Screenshot%202026-01-11%20at%2011.05.26 PM.png)

### Playbook Deployment

Just like with the previous playbook, I will be using a bin script called [`upload`](./bin/upload) to get this new playbook going.

Using the below command to ensure I have execute permissions for the script

```sh
cd aws
chmod u+x ./bin/upload
```

Ran the script with

```sh
./bin/upload
```

And appears to have been a success:

![](../documentation/media/Screenshot%202026-01-11%20at%2011.14.59 PM.png)

Confirmed file upload by checking the S3 bucket in the AWS Console:

![](../documentation/media/Screenshot%202026-01-11%20at%2011.15.50 PM.png)

Success!

## Setting Up CloudFront Distribution

So now that I got some practice with Terraform, I am going to rewrite the [`main.tf`](./terraform/main.tf) file to deploy our full cloud infrastructure.

So, what is the end goal?

1. Create the S3 bucket with our domain name (already done)
2. Keep the S3 bucket private
3. Deploy CloudFront distribution and give it read-only access to our S3 bucket via OAC+bucket policy while keeping in mind principle of least-privilege.
4. My domain (javier-bustos.com) terminates HTTPS at CloudFront using an ACM cert validated through Route 53.
5. Add DNS records to Route 53 to have the apex and www point to Cloudfront
6. SPA deep links work via CloudFront custom error responses (for React-Router used in our web app)

After rewriting the [`main.tf`](./terraform/main.tf) file to include all of my other requirements, I ran it via the `deploy.yml` Ansible playbook and ran into one error. 

I fed it to ChatGPT, and turns out the issue was with Route 53 rejecting a DNS change because Terraform tried to create an ACM validation CNAME record that already existed.

Specifically, for the "*.javier-bustos.com" wildcard SAN I added to the ACM cert. That exact CNAME already exists in the hosted zone for the domain.

Route 53 won't create a duplicate record.

To resolve this, I made the following change to the below resource:

```sh
resource "aws_route53_record" "cert_validation" {
  allow_overwrite = true
```

This tells Terraform: if a DNS record with the same name and type already exists, replace it instead of failing.

I ran `./bin/deploy` again and got no errors this time:

![](../documentation/media/Screenshot%202026-01-12%20at%202.03.57 AM.png)

And now my website is accessible!

![](../documentation/media/Screenshot%202026-01-12%20at%202.05.32 AM.png)

Also verified via S3 console that static-website hosting is now disabled on the S3 bucket, which is what I wanted. So now it's accessed via:

User -> Cloudfront -> S3

## Backend View Counter For Website

So, if you look at the above screenshot, you've probably noticed the small view counter right under the main website heading. As of now, it is not functional. I will be setting up the functionality via a python-based Lambda function, API Gateway, and DynamoDB table.

### Terraform Configuration

Just like with our previous infrastructure, I will be deploying this view counter with Terraform, using the [`backend-counter.tf`](./terraform/backend-counter/backend-counter.tf) file.

The Terraform script will use [`handler.py`](./functions/handler.py) as the Lambda function for this deployment.

Deployed the template successfully using [`deploy-backend-counter`](./bin/deploy-backend-counter) bin script.

DynamoDB table, API Gateway, and Lambda function were successfully created.

### Testing The View Counter

To test, I will be using `curl` to send HTTP request to the API Gateway endpoint, which I grabbed from the AWS Console.

I received a reponse of `{"count": 0}`

Next, I used `curl -X POST` to send an HTTP POST request instead of the default GET.

Now, I am getting `{"count": 1}`

It's safe to say that the deployment works. Now to implement it into our website's view counter.


