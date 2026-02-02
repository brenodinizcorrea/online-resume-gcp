resource "google_cloud_run_v2_service" "resume" {
  name     = "online-resume"
  location = var.region

  template {
    service_account = google_service_account.cloud_run_resume.email

    containers {
      image = "us-central1-docker.pkg.dev/${var.project_id}/resume-repo/placeholder:latest"

      ports {
        container_port = 8080
      }
    }
  }

  ingress = "INGRESS_TRAFFIC_ALL"
}