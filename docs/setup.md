# CyberSanket Setup & Deployment Guide

This guide details the setup, containerization, local execution, and verification of demonstration projects in the **CyberSanket** repository.

---

## 📋 Prerequisites

Before running the demo projects, ensure your system has the following installed:

* **Docker Engine** (v24.0 or later)
* **Docker Compose** (v2.20 or later)
* **Git** (v2.40 or later)

*Alternative for static environments without Docker:*
* **Python 3.8+** (for simple local HTTP serving)

---

## 🛠️ Step-by-Step Local Deployment

### 1. Clone the Repository

```bash
git clone https://github.com/rizzzabh-06/CyberSanket.git
cd CyberSanket
```

### 2. Validate Compose Configuration

Before launching, inspect and validate the service definitions:

```bash
docker compose config
```

### 3. Build the Container Images

Build all service images defined in the Compose file:

```bash
docker compose build
```

### 4. Start the Services in Background

Start the demonstration container stack:

```bash
docker compose up -d
```

### 5. Verify Running Containers & Health Checks

Confirm that services are running and healthy:

```bash
docker compose ps
```

Expected output should display `healthy` under the state column for `cybersanket-phishing-demo`.

### 6. Inspect Container Logs

To troubleshoot or inspect startup and access logs:

```bash
# View aggregated logs
docker compose logs

# Follow live access logs for the phishing demo
docker compose logs -f internship-phishing-simulation
```

### 7. Access the Application

Open your browser and navigate to:

* **Internship Phishing Simulation**: [http://localhost:8080](http://localhost:8080)

---

## 🔄 Rebuilding After Code Modifications

If you edit any HTML, CSS, JavaScript, or Nginx configurations:

```bash
docker compose up -d --build
```

---

## 🛑 Stopping Services

To shut down and remove containers while preserving network stability:

```bash
docker compose down
```

---

## 💻 Alternative: Running Without Docker

If running in an environment where Docker is unavailable:

```bash
cd demos/internship-phishing-simulation
python -m http.server 8080
```

Navigate to [http://localhost:8080](http://localhost:8080).
