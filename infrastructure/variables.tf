variable "region" {
  description = "Project Name"
  type        = string
}

variable "project_id" {
  description = "Project ID"
  type        = string
}

variable "project_alias" {
  description = "Project Alias"
  type        = string
}

variable "cloud_run_service_name" {
  type        = string
  description = "Nome do serviço Cloud Run existente"
}

variable "domain_name" {
  type        = string
  description = "Domínio principal do site"
}