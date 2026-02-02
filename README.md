# Cloud Resume Challenge
Live Site: https://javier-bustos.com/

## Overview
This project implements a cloud resume using a modern, serverless AWS architecture. The goal is not only to host a personal resume, but to design and operate a secure, scalable, cost-efficient web application using Infrastructure as Code and cloud-native services.

The solution uses Amazon S3 + CloudFront for global static content delivery, a serverless backend (API Gateway, Lambda, DynamoDB) for visitor tracking, and Terraform to provision all infrastructure. Configuration management and deployment orchestration are handled with Ansible, ensuring repeatable, environment-agnostic deployments.

The project is intentionally designed to mirror real-world architectural decision-making, with explicit consideration given to cost, scalability, security, and operational simplicity.


## Features

- **Static Web Hosting:** A resume website hosted in a private S3 bucket and distributed globally through CloudFront.
- **Custom Domain:** Route 53 managed domain name configurations.
- **Interactive Visitor Tracking:**  A lightweight serverless backend API for a visitor counter.
- **NoSQL Database:** Uses DynamoDB for low-latency, serverless storage of visitor count data.
- **Infrastructure as Code:** Utilizes Terraform and Ansible to provision and manage AWS resources.

## Architecture Overview

![](./documentation/media/crc_project_architecture.png)

### High-Level Flow

1. User Requests The Website
    - Traffic is routed to CloudFront, which terminates HTTPS using ACM.

2. Static Content Delivery
    - CloudFront serves the React application from a private S3 bucket using Origin Access Control (OAC).

3. Interactive Visitor Counter

    - The frontend calls an API Gateway HTTP API endpoint.
    - API Gateway invokes a Lambda function.
    - Lambda reads/writes the visitor count in DynamoDB.

4. Infrastructure Management

    - All cloud resources are provisioned via Terraform.
    - Ansible orchestrates Terraform runs and frontend build/upload steps.

## Project Structure

```plaintext
.
├── aws/ 
│    ├── bin/               # Deployment helper scripts
│    ├── functions/         # Lambda source code
│    ├── playbooks/         # Ansible deployment playbooks
│    └── terraform/         # Infrastructure as Code
├── backend/               # Markdown → JSON content pipeline
├── documentation/         # Screenshots and supporting material
├── frontend/              # React + Vite application
└── README.md              # High-level architecture & overview
```

Each major subsystem (frontend, backend content pipeline, cloud infrastructure) is documented in its own README for clarity and separation of concerns below:

- [Frontend](./frontend/README.md)
- [Backend](./backend/README.md)
- [Cloud Deployment](./aws/README.md)