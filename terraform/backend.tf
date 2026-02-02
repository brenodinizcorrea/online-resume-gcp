terraform {
  backend "gcs" {
    bucket = "online-resume-terraform-state"
    prefix = "infra-online-resume"
  }
}