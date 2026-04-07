# 🚀 Docker AWS CI/CD Application

## 📌 Overview

This project demonstrates a complete CI/CD pipeline using Docker, GitHub Actions, and AWS EC2.

The application is automatically built, pushed, and deployed to a cloud server on every Git push.

---

## 🧱 Architecture

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
* Real-world debugging (networking, permissions, SSH)

---

## 🐳 Docker

Build image:
docker build -t my-app .

Run container:
docker run -p 3000:3000 my-app

---

## ☁️ Deployment (EC2)

The application runs inside a Docker container on an AWS EC2 instance.

docker run -d -p 80:3000 my-app

---

## 🔄 CI/CD Pipeline

On every push to main branch:

1. Build Docker image
2. Push to Docker Hub
3. SSH into EC2
4. Pull latest image
5. Restart container

---

## 📂 Project Structure

.
├── app.js
├── package.json
├── Dockerfile
└── .github/workflows/deploy.yml

---

## 🧠 What I Learned

* How to build and run Docker containers
* How CI/CD pipelines work in real-world scenarios
* How to deploy applications to AWS EC2
* How to debug networking and permission issues
* How to automate deployments using GitHub Actions

---

## 🌍 Future Improvements

* Add HTTPS with Nginx + Let's Encrypt
* Use Terraform for infrastructure
* Add monitoring and health checks
