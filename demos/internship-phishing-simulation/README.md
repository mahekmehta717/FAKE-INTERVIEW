# Internship Phishing & Social Engineering Simulation

An interactive, multi-stage cybersecurity awareness demonstration designed to educate students and professionals on how threat actors weaponize authentic-looking corporate career portals, urgency triggers, and verification prompts to conduct credential-harvesting attacks.

---

## 🎯 Educational Objectives

1. **Demonstrate Deceptive Authenticity**: Illustrates how professional branding, clean typography, editorial imagery, and realistic career opportunities lower user suspicion.
2. **Expose Psychological Triggers**: Shows how artificial urgency (imminent application deadlines, exclusive interview slots) pressures candidates to bypass critical validation steps.
3. **Analyze Credential Traps**: Examines why users willingly enter sensitive information when asked during seemingly legitimate verification processes.
4. **Deliver Active Defense Training**: Immediately transitions participants into an awareness and educational defense briefing upon submission.

---

## 🔄 Simulation Flow

```text
[Stage 1: Careers Portal] ──► [Stage 2: Verification Portal] ──► [Stage 3: Compromise Reveal] ──► [Stage 4: Awareness & Defense]
  • Corporate Brand Identity   • Full Name & Email Input       • High-Contrast Black/Red Alert  • Threat Breakdown
  • Search & Role Filtering   • Password Input + Eye Toggle   • "YOU HAVE BEEN HACKED"         • Red Flag Identification
  • Opportunity Selection     • Enrollment Number             • "RELAX - THIS WAS A SIMULATION" • Safe Application Checklist
```

* **Stage 1 (Corporate Portal — `index.html`, `careers.html`)**: Emulates an authentic multinational technology careers portal with responsive navigation, job filters, and an early-career internship callout.
* **Stage 2 (Verification Entry Point — `internship-verification.html`)**: Simulates a legitimate applicant verification screen prompting candidates for identification and credentials before processing their application.
* **Stage 3 (High-Contrast Reveal Alert — `internship-reveal.html`)**: Shifts to a dramatic dark-and-red alert theme, jolting participants with the simulated breach notification, immediately assuring them that no real credentials were taken.
* **Stage 4 (Educational Defense Guide — `internship-awareness.html`)**: Provides a thorough debrief on social engineering red flags, how to independently verify domains, and the golden rule: *"LOOKS REAL ≠ IS REAL"*.

---

## 🛡️ Security Architecture & Privacy Guarantee

* **Zero Backend Harvesting**: The verification form runs purely client-side without any server-side database, external webhook, logging service, or credential exfiltration logic.
* **No Network Transmission**: Form inputs lack data serialization attributes; no passwords or personal details leave the browser.
* **Safe Local Sandbox**: Intended exclusively for authorized educational demonstrations, security awareness workshops, and academic exercises.

---

## 🚀 Running with Docker

### Prerequisites
* Docker installed on your host system.

### Build and Run Standalone
From this directory:

```bash
# Build the Docker image
docker build -t cybersanket/internship-phishing-simulation:latest .

# Run the container
docker run -d -p 8080:80 --name cybersanket-phishing-demo cybersanket/internship-phishing-simulation:latest

# Open in browser
# http://localhost:8080
```

### Stop and Remove Container
```bash
docker stop cybersanket-phishing-demo
docker rm cybersanket-phishing-demo
```

---

## 💻 Running Without Docker

This is a pure static web application. You can host it using any local static file server:

### Python 3
```bash
python -m http.server 8080
```

Open `http://localhost:8080` in your web browser.
