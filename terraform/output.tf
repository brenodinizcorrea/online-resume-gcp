# Expose useful values after apply
# Run:
#   terraform apply
#   terraform output

output "project_id" {
  value = var.project_id
}