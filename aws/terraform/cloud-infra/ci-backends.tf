terraform {
  backend "s3" {
    bucket = "crc-tf-state-prod"
    key    = "cloud-infra-state/cis.tfstate"
    region = "us-east-1"
    use_lockfile = true
    profile = "crc-machine"
  }
}