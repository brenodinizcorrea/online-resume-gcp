terraform {
  backend "gcs" {
    bucket = "online-resume-gcp"
    prefix = "tfstate"
  }
}