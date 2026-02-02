resource "google_artifact_registry_repository" "docker_repo" {
  location      = var.region
  repository_id = "online-resume"
  description   = "Docker images for online resume"
  format        = "DOCKER"
}