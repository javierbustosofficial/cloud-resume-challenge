terraform {
  backend "s3" {
    bucket = "crc-tf-state-prod"
    key    = "ai-chatbot-state/acs.tfstate"
    region = "us-east-1"
    use_lockfile = true
    profile = "crc-machine"
  }
}