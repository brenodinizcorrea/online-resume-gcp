# Get current project metadata (needed for project number)
data "google_project" "current" {}

# Service account used by the Cloud Run service
resource "google_service_account" "cloud_run_resume" {
  account_id   = "cloud-run-resume-sa"
  display_name = "Service Account for Cloud Run Resume"
}

# Allow the service account to read images from Artifact Registry
resource "google_project_iam_member" "cloud_run_artifact_registry_reader" {
  project = var.project_id
  role    = "roles/artifactregistry.reader"
  member  = "serviceAccount:${google_service_account.cloud_run_resume.email}"
}

# Allow Cloud Run (service agent) to use this service account
resource "google_service_account_iam_member" "cloud_run_act_as" {
  service_account_id = google_service_account.cloud_run_resume.name
  role               = "roles/iam.serviceAccountUser"
  member             = "serviceAccount:service-${data.google_project.current.number}@serverless-robot-prod.iam.gserviceaccount.com"
}

resource "google_cloud_run_v2_service_iam_member" "public_access" {
  project  = var.project_id
  location = var.region
  name     = google_cloud_run_v2_service.resume.name

  role   = "roles/run.invoker"
  member = "allUsers"
}