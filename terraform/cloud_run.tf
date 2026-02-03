resource "google_cloud_run_v2_service" "resume" {
  name     = "online-resume"
  location = "us-central1"

  template {
    containers {
      image = "us-central1-docker.pkg.dev/web-development-485110/online-resume/resume:latest"
      ports {
        container_port = 8080
      }
    }
  }

  traffic {
    percent = 100
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
  }
}