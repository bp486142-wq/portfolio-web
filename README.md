# 🚀 Bhushan Pawar — Personal Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Bhushan%20Pawar-ff6b35?style=for-the-badge&logo=google-chrome&logoColor=white)
![Status](https://img.shields.io/badge/Status-Available%20for%20Work-brightgreen?style=for-the-badge)
![Location](https://img.shields.io/badge/Location-Pune%2C%20India-blue?style=for-the-badge&logo=googlemaps&logoColor=white)
![Backend](https://img.shields.io/badge/Backend-Flask%20%2B%20Python-ff6b35?style=for-the-badge&logo=flask&logoColor=white)
![License](https://img.shields.io/badge/License-Open%20Source-brightgreen?style=for-the-badge)

**A modern, animated, full-stack personal portfolio website built with HTML, CSS, JavaScript and a Python Flask email backend.**

[🌐 Live Demo](#) · [📧 Contact](mailto:bhushanpawar@email.com) · [🐛 Report Bug](#)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
- [Sections Overview](#-sections-overview)
- [Projects Showcased](#-projects-showcased)
- [Skills](#-skills)
- [Contact Form — How It Works](#-contact-form--how-it-works)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 🎯 About the Project

This is my **personal portfolio website** designed to showcase my skills, projects, and experience as a Full-Stack Developer and Python Developer. The website is fully responsive, features smooth animations, a custom cursor, a working contact form with real email delivery, and a professional dark theme with an orange accent color palette.

The goal was to build something that feels premium, modern, and memorable — without relying on any CSS framework or UI library. Everything is written from scratch in **pure HTML, CSS, and Vanilla JavaScript**, powered by a **Python Flask backend** for the contact form.

---

## ✨ Features

- 🎬 **Animated Loader** — Progress bar counts from 0–100% before revealing the site
- 🖱️ **Custom Cursor** — Smooth-following ring cursor with instant dot tracking
- 🏠 **Hero Section** — Animated heading lines, floating skill cards, pulsing avatar rings, and live stat counters
- 📜 **Infinite Marquee** — Auto-scrolling tech stack ticker
- 👤 **About Section** — Personal bio with info cards (Education, Experience, Location, Projects)
- 💼 **Projects Section** — Featured projects with tech stack badges and descriptions
- 📊 **Skills Section** — Animated skill bars (Frontend, Backend, Design) + tech icon grid
- 💬 **Testimonials Section** — Client reviews with gradient avatars
- 📩 **Contact Form** — Real email delivery via **Python Flask + Flask-Mail + Gmail SMTP**
- 📱 **Fully Responsive** — Works on all screen sizes (mobile, tablet, desktop)
- 🌙 **Dark Theme** — Professional dark background with `#ff6b35` orange accent
- 📊 **Scroll Progress Bar** — Thin accent bar at top tracks reading progress
- ♿ **Accessible** — Semantic HTML, ARIA labels on interactive elements

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, animations, responsive layout |
| **Vanilla JavaScript** | Interactivity, scroll effects, cursor, form handling |
| **Google Fonts** | Bebas Neue, DM Sans, JetBrains Mono |

### Backend
| Technology | Purpose |
|---|---|
| **Python 3** | Server runtime |
| **Flask** | HTTP server and routing |
| **Flask-Mail** | Email sending via Gmail SMTP |
| **Flask-CORS** | Cross-origin request handling |
| **python-dotenv** | Environment variable management |
| **Gunicorn** | Production WSGI server |

---

## 📁 Project Structure

```
portfolio-web/
│
├── frontend/
│   ├── index.html          # Main HTML — all sections of the portfolio
│   ├── style.css           # All CSS styles, animations, responsive design
│   ├── script.js           # All JS — cursor, scroll, animations, form
│   └── resume.pdf          # Downloadable CV
│
├── backend/
│   ├── app.py              # Flask app — contact form API + email logic
│   ├── requirements.txt    # Python dependencies
│   ├── .env                # Environment variables (NOT committed to git)
│   ├── .gitignore          # Git ignore rules
│   └── venv/               # Python virtual environment (NOT committed)
│
└── README.md               # You are here!
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Python 3.8+](https://www.python.org/downloads/) — tick **"Add Python to PATH"** during install
- [Anaconda](https://www.anaconda.com/) *(optional but recommended)*
- A **Gmail account** with **2-Step Verification** enabled

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-web.git
cd portfolio-web/backend
```

**2. Install dependencies**

Using Anaconda Python (recommended on Windows):
```bash
C:\Users\YourName\anaconda3\python.exe -m pip install -r requirements.txt
```

Or using standard Python:
```bash
py -m pip install -r requirements.txt
```

### Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
MAIL_USERNAME=yourgmail@gmail.com
MAIL_PASSWORD=abcdefghijklmnop
OWNER_EMAIL=yourgmail@gmail.com
```

> ⚠️ **Important:** Do NOT use your regular Gmail password.
> You must generate a **Gmail App Password**. Follow these steps:
>
> 1. Go to [myaccount.google.com](https://myaccount.google.com) → **Security**
> 2. Enable **2-Step Verification** (required)
> 3. Scroll down → click **App Passwords**
> 4. Type any name (e.g. `Portfolio Flask`) → click **Create**
> 5. Copy the **16-character password** — remove all spaces before pasting

> 🔒 **Never commit your `.env` file to GitHub.** It is already listed in `.gitignore`.

### Running the Project

**Step 1 — Navigate to the backend folder**
```bash
cd portfolio-web/backend
```

**Step 2 — Start the Flask server**

Using Anaconda Python:
```bash
C:\Users\YourName\anaconda3\python.exe app.py
```

Or using standard Python:
```bash
py app.py
```

You should see:
```
 * Serving Flask app 'app'
 * Debug mode: on
 * Running on http://127.0.0.1:5000
```

**Step 3 — Verify the server is running**

Open your browser and go to:
```
http://localhost:5000
```
You should see:
```json
{"status": "Bhushan Portfolio Backend Running ✅"}
```

**Step 4 — Open the frontend**

Open `frontend/index.html` directly in your browser, or use the **VS Code Live Server** extension:
> Right-click `index.html` → **Open with Live Server**

> 💡 Keep the Flask terminal open — closing it stops the backend.

---

## 📄 Sections Overview

| Section | Description |
|---|---|
| **🏠 Home / Hero** | Introduction with name, title, animated stats (5+ Projects, 1+ Year Exp, 4+ Internships) |
| **👤 About** | Personal bio, education (BE Computer Science, PDEA's 2027), location (Pune, India) |
| **💼 Work / Projects** | Featured projects with tech stack, descriptions, and links |
| **📊 Skills** | Animated skill bars for Frontend, Backend, and Design tools |
| **💬 Testimonials** | Client and peer reviews |
| **📩 Contact** | Working contact form + email, location, and phone info |

---

## 🧪 Projects Showcased

### 1. 🌿 Leaf Disease Detection (2023)
> **Type:** Website | AI/ML Project

A web-based system that allows users to upload or capture images of plant leaves to identify possible diseases. The application analyzes the leaf image using image processing techniques and displays the detected disease name along with symptoms and treatment suggestions.

**Tech Stack:** `HTML` `CSS` `JavaScript` `Python` `Django` `CNN` `SQLite3`

---

### 2. 🎬 REELIFY — AI Reel Generator (2025)
> **Type:** AI Web Application

An AI-powered web app that allows users to upload multiple images and provide custom text to generate short reel-style videos automatically. The system combines uploaded images with smooth transitions, background effects, and synchronized AI-generated voice narration.

**Tech Stack:** `HTML` `CSS` `JavaScript` `Python` `Flask` `SQL` `ElevenLabs API`

---

### 3. 📚 StudyBuddy (2025)
> **Type:** Web App | Student Platform

A web-based platform that allows students to upload, share, download, and manage study notes in a centralized system. Users can create an account, log in securely, and upload academic notes to make them publicly accessible to other students.

**Tech Stack:** `HTML` `CSS` `JavaScript` `Flask` `SQL` `REST API`

---

## 💪 Skills

### Frontend
| Skill | Proficiency |
|---|---|
| HTML / CSS | ████████████████████ 98% |
| JavaScript | ██████████████ 70% |
| React | ██████████ 50% |
| Animations | ████████ 40% |

### Backend
| Skill | Proficiency |
|---|---|
| Flask | ███████████████ 75% |
| SQL | ████████████ 60% |
| REST API | ██████ 30% |
| Node.js | ██████ 30% |

### Design
| Skill | Proficiency |
|---|---|
| Adobe Photoshop | ███████████████ 78% |
| Canva | ██████████ 50% |
| Figma | ████████ 40% |
| Behance | ██████ 30% |

---

## 📩 Contact Form — How It Works

The contact form uses a **Python Flask backend** to send emails via **Gmail SMTP through Flask-Mail**.

### Flow Diagram

```
User fills the contact form
        ↓
JavaScript collects data (name, email, subject, message)
        ↓
POST request → http://localhost:5000/api/contact
        ↓
Flask validates the input server-side
        ↓
Flask-Mail sends email via Gmail SMTP
        ↓
You receive a styled HTML notification email in Gmail ✅
        ↓
Sender receives a professional auto-reply email ✅
        ↓
Success message shown on the form ✅
```

### API Endpoint

```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello Bhushan, I have a project for you..."
}
```

### Response

```json
// Success
{ "success": true, "message": "Message sent! I'll reply within 24 hours." }

// Validation Error
{ "success": false, "errors": { "email": "A valid email is required." } }

// Server Error
{ "success": false, "errors": { "server": "Failed to send email. Please try again later." } }
```

### Emails Generated

| Email | Recipient | Content |
|---|---|---|
| **Notification** | You (Bhushan) | Sender's name, email, subject, message + one-click Reply button |
| **Auto-reply** | The sender | Thank you message, message summary, your social links |

---

## 🌐 Deployment

### Frontend — Deploy on Netlify / Vercel (Free)

1. Push your `frontend/` folder to GitHub
2. Go to [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com)
3. Connect your GitHub repo
4. Set **publish directory** to `frontend/`
5. Click **Deploy** ✅

### Backend — Deploy on Render (Free)

1. Push your `backend/` folder to GitHub
2. Go to [render.com](https://render.com) → **New** → **Web Service**
3. Connect your GitHub repo
4. Set **Root Directory** to `backend`
5. Set **Start Command** to:
```bash
gunicorn app:app
```
6. Add environment variables in the **Environment** tab:
```
MAIL_USERNAME = yourgmail@gmail.com
MAIL_PASSWORD = your16charapppassword
OWNER_EMAIL   = yourgmail@gmail.com
```
7. Click **Deploy** ✅
8. Once live, update `script.js` with your Render URL:

```js
// frontend/script.js — update this line
const API_URL = 'https://your-app-name.onrender.com/api/contact';
```

---

## ⚠️ Troubleshooting

| Problem | Fix |
|---|---|
| `python` not recognized | Use `py app.py` or `C:\Users\YourName\anaconda3\python.exe app.py` |
| `ModuleNotFoundError` | Run `C:\Users\YourName\anaconda3\python.exe -m pip install -r requirements.txt` |
| `venv\Scripts\activate` fails | Run PowerShell as Admin → `Set-ExecutionPolicy RemoteSigned` → Y |
| Form says "Could not reach server" | Make sure `app.py` is still running in terminal |
| Gmail authentication fails | Use App Password (16 chars, no spaces), not your regular password |
| Port 5000 already in use | Change `port=5000` to `port=5001` in `app.py` and update `API_URL` in `script.js` |
| Emails going to spam | Ask the recipient to mark your email as "Not Spam" |

---

## 👨‍💻 Author

**Bhushan Pawar**

- 📍 Pune, Maharashtra, India
- 📞 +91 9322903701
- 🎓 BE Computer Science — PDEA's College of Engineering (2027)
- 💼 Full Stack Developer | Python Developer | AI Enthusiast
- 🐙 [GitHub](https://github.com/bp486142-wq)
- 💼 [LinkedIn](https://www.linkedin.com/in/bhushan-pawar-9b19a5270/)

---

## 📜 License

This project is open source and available for personal use and learning purposes.
If you use this as a base for your own portfolio, a credit or ⭐ star on the repo is appreciated!

---

<div align="center">

Made with ❤️ and lots of ☕ by **Bhushan Pawar**

⭐ **Star this repo if you found it helpful!**

</div>