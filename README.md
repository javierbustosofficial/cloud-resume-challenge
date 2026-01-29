# Cloud Resume Challenge
Live Site: https://javier-bustos.com/

## Overview
This project implements a cloud resume using a modern, serverless AWS architecture. The goal is not only to host a personal resume, but to design and operate a secure, scalable, cost-efficient web application using Infrastructure as Code and cloud-native services.

The solution uses Amazon S3 + CloudFront for global static content delivery, a serverless backend (API Gateway, Lambda, DynamoDB) for visitor tracking, and Terraform to provision all infrastructure. Configuration management and deployment orchestration are handled with Ansible, ensuring repeatable, environment-agnostic deployments.

The project is intentionally designed to mirror real-world architectural decision-making, with explicit consideration given to cost, scalability, security, and operational simplicity.

## Architecture Overview


## Project Structure
- [Frontend](./frontend/README.md)
- [Backend](./backend/README.md)
- [Cloud Deployment](./aws/README.md)