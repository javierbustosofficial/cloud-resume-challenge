terraform {
  backend "s3" {
    bucket = "crc-tf-state-prod"
    key    = "backend-counter-state/bcs.tfstate"
    region = "us-east-1"
    use_lockfile = true
    profile = "crc-machine"
  }
}