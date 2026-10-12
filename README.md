# CyberSanket 🛡️

CyberSanket is a curated collection of containerized, hands-on cybersecurity demonstrations and awareness exercises. Each project in this repository simulates a real-world attack scenario in a controlled, safe environment to train users, students, and practitioners in identifying threats and applying defensive counter-measures.

---

## 📂 Included Demonstrations

### 1. Internship Phishing & Social Engineering Simulation
* **Directory**: [`demos/internship-phishing-simulation/`](demos/internship-phishing-simulation/)
* **Category**: Social Engineering / Phishing Awareness
* **What it does**: Simulates an authentic-looking global corporate recruitment portal offering early-career winter internships. Candidates navigate role opportunities, reach a verification stage, and submit sample application credentials, only to be immediately redirected to a high-contrast compromise reveal and an in-depth defensive awareness guide.
* **What it teaches**:
  * How attackers replicate corporate typography, visual design, and editorial style to induce trust.
  * How artificial urgency (application deadlines, interview schedules) forces users to bypass skepticism.
  * Why credential verification on third-party or unverified links is a primary phishing indicator.
  * How to verify senders, inspect domains, and adhere to the principle: **"LOOKS REAL ≠ IS REAL"**.
* **Technologies**: HTML5, Vanilla JavaScript, CSS3, Nginx Alpine, Docker.

---

## 📋 Prerequisites

* [Docker](https://docs.docker.com/get-docker/) (v24.0+)
* [Docker Compose](https://docs.docker.com/compose/) (v2.20+)
* [Git](https://git-scm.com/)

---

## 🚀 Quick Start Guide

### 1. Clone the Repository
```bash
git clone https://github.com/rizzzabh-06/CyberSanket.git
cd CyberSanket
```

### 2. Validate Compose Configuration
```bash
docker compose config
```

### 3. Build & Launch Demo Stack
```bash
docker compose up -d --build
```

### 4. Verify Services Status
```bash
docker compose ps
```

### 5. Access the Demos
| Demonstration | Local URL | Port |
| :--- | :--- | :--- |
| **Internship Phishing Simulation** | [http://localhost:8080](http://localhost:8080) | `8080` (HTTP) |

---

## 🔍 Management & Inspection Commands

* **View Logs**:
  ```bash
  docker compose logs -f
  ```
* **View Single Service Logs**:
  ```bash
  docker compose logs -f internship-phishing-simulation
  ```
* **Rebuild after code edits**:
  ```bash
  docker compose up -d --build
  ```
* **Stop Services**:
  ```bash
  docker compose down
  ```

---

## 💻 Running Without Docker

All demo projects are self-contained. For environments without Docker, the simulation can be hosted with any local HTTP server:

```bash
cd demos/internship-phishing-simulation
python -m http.server 8080
```
Then visit [http://localhost:8080](http://localhost:8080).

---

## 🛡️ Responsible Use & Security Policy

All code within this repository is strictly for **authorized educational, demonstration, and security awareness purposes**:

1. **No Data Harvesting**: None of the included demonstrations collect, store, log, or transmit real credentials or sensitive user data.
2. **Safe Architecture**: The simulation forms are strictly client-side demonstrators with no backend database or external exfiltration channels.
3. **Authorized Environments**: These tools should only be deployed in controlled training environments, classrooms, or approved awareness sessions.

For additional setup details, refer to the [Setup Guide](docs/setup.md).