module "github_actions_sa" {
  source          = "git::https://github.com/brenodinizcorrea/gcp-terraform-modules.git//stacks/service-account?ref=main"
  project_id      = var.project_id
  project_alias   = var.project_alias
  context         = "ci"
  name            = "github-actions"
  sa_display_name = "GitHub Actions Service Account"
  sa_description  = "Service account used by GitHub Actions workflows to authenticate and push Docker images to Google Artifact Registry."
  roles           = ["roles/artifactregistry.writer"]
}