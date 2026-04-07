# 🚀 Docker AWS CI/CD Application

## 📌 Overview

This project demonstrates a complete CI/CD pipeline using Docker, GitHub Actions, and AWS EC2.

The application is automatically built, pushed to Docker Hub, and deployed to an AWS EC2 instance on every Git push.

---

## 🧭 Architecture

GitHub → GitHub Actions → Docker Hub → AWS EC2 → Browser

---

## ⚙️ Tech Stack

* Node.js (simple HTTP server)
* Docker (containerization)
* GitHub Actions (CI/CD)
* AWS EC2 (deployment)
* Docker Hub (container registry)

---

## 🚀 Features

* Containerized application using Docker
* Automated CI/CD pipeline
* Auto-deploy to AWS EC2 on every push
* Remote deployment via SSH
* Real-world debugging experience

---

## 📂 Project Structure

.
├── app.js
├── package.json
├── Dockerfile
└── .github/workflows/deploy.yml

---

## 🐳 Docker

Build image:
docker build -t my-app .

Run container:
docker run -p 3000:3000 my-app

---

## ☁️ Deployment (AWS EC2)

The application runs inside a Docker container on an EC2 instance.

docker run -d -p 80:3000 my-app

---

## 🔄 CI/CD Pipeline

On every push to the main branch:

1. Build Docker image
2. Push image to Docker Hub
3. Connect to EC2 via SSH
4. Pull latest image
5. Restart container

---

## 🐛 Challenges & Solutions

### 🔹 Docker not recognized on Windows

Resolved by installing Docker Desktop and fixing PATH configuration.

### 🔹 App not accessible via browser

Solved by configuring AWS Security Groups and opening port 80.

### 🔹 HTTP vs HTTPS issue

Learned that HTTPS requires SSL configuration (used HTTP for now).

### 🔹 GitHub Actions not triggering

Fixed incorrect folder structure (`.github/workflows`).

### 🔹 Missing secrets in CI/CD

Added required GitHub Secrets (EC2_HOST, SSH key, Docker credentials).

### 🔹 SSH connection timeout

Resolved by updating Security Group to allow port 22.

### 🔹 Docker permission issues on EC2

Solved by using `sudo` in deployment script.

---

## 🧠 What I Learned

* How to build and run Docker containers
* How CI/CD pipelines work in real-world scenarios
* How to deploy applications to AWS EC2
* How to debug networking and permission issues
* How to automate deployments using GitHub Actions

---

## 🔮 Future Improvements

* Add HTTPS using Nginx and Let's Encrypt
* Use Terraform for infrastructure as code
* Add monitoring and health checks
