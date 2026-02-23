# 🚀 Bhushan Pawar — Personal Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Bhushan%20Pawar-ff6b35?style=for-the-badge&logo=google-chrome&logoColor=white)
![Status](https://img.shields.io/badge/Status-Available%20for%20Work-brightgreen?style=for-the-badge)
![Location](https://img.shields.io/badge/Location-Pune%2C%20India-blue?style=for-the-badge&logo=googlemaps&logoColor=white)

**A modern, animated, full-stack personal portfolio website built with HTML, CSS, JavaScript and a Node.js email backend.**

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

This is my **personal portfolio website** designed to showcase my skills, projects, and experience as a Full-Stack Developer and Python Developer. The website is fully responsive, features smooth animations, a custom cursor, a working contact form with email delivery, and a professional dark theme with an orange accent color palette.

The goal was to build something that feels premium, modern, and memorable — without relying on any CSS framework or UI library. Everything is written from scratch in **pure HTML, CSS, and Vanilla JavaScript**.

---

## ✨ Features

- 🎬 **Animated Loader** — Progress bar counts from 0–100% before revealing the site
- 🖱️ **Custom Cursor** — Smooth-following ring cursor with orange particle trail on mouse move
- 🏠 **Hero Section** — Animated heading lines, floating skill cards, pulsing avatar rings, and live stat counters
- 📜 **Infinite Marquee** — Auto-scrolling tech stack ticker (pauses on hover)
- 👤 **About Section** — Personal bio with info cards (Education, Experience, Location, Projects)
- 💼 **Projects Section** — 3 featured projects with tech stack badges and descriptions
- 📊 **Skills Section** — Animated skill bars (Frontend, Backend, Design) + tech icon grid
- 💬 **Testimonials Section** — Client reviews with gradient avatars
- 📩 **Contact Form** — Real email delivery via Node.js + Nodemailer + Gmail
- 📱 **Fully Responsive** — Works on all screen sizes (mobile, tablet, desktop)
- 🌙 **Dark Theme** — Professional dark background with `#ff6b35` orange accent
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
| **Node.js** | Server runtime |
| **Express.js** | HTTP server and routing |
| **Nodemailer** | Email sending via Gmail SMTP |
| **dotenv** | Environment variable management |
| **CORS** | Cross-origin request handling |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file — all sections of the portfolio
├── style.css           # All CSS styles, animations, responsive design
├── script.js           # All JavaScript — cursor, scroll, animations, form
│
├── server.js           # Node.js + Express backend for contact form emails
├── package.json        # Backend dependencies and npm scripts
├── .env                # Environment variables (NOT committed to git)
│
└── README.md           # You are here!
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Gmail account (for the contact form email feature)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

**2. Install backend dependencies**
```bash
npm install
```

### Environment Variables

Create a `.env` file in the **root of the project** and add the following:

```env
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> ⚠️ **Important:** Do NOT use your regular Gmail password here.
> You must generate a **Gmail App Password**. Follow these steps:
>
> 1. Go to your Google Account → **Security**
> 2. Enable **2-Step Verification** (if not already enabled)
> 3. Go to **App Passwords** → Select app: `Mail` → Device: `Other`
> 4. Copy the 16-character password and paste it as `EMAIL_PASS`

> 🔒 **Never commit your `.env` file to GitHub.** Make sure `.env` is in your `.gitignore`.

```gitignore
# .gitignore
.env
node_modules/
```

### Running the Project

**Step 1 — Start the backend server**
```bash
npm start
```
You should see:
```
Server running on http://localhost:5000
```

**Step 2 — Open the frontend**

Simply open `index.html` in your browser directly, or use a local server like VS Code Live Server extension.

> 💡 **Tip:** If you use VS Code, install the **Live Server** extension, right-click `index.html` and click **"Open with Live Server"** for the best experience.

---

## 📄 Sections Overview

| Section | Description |
|---|---|
| **🏠 Home / Hero** | Introduction with name, title, animated stats (5+ Projects, 1+ Year Experience, 4+ Internships) |
| **👤 About** | Personal bio, education (BE Computer Science), location (Pune, India), experience |
| **💼 Work / Projects** | 3 featured projects with tech stack, descriptions, and links |
| **📊 Skills** | Skill bars for Frontend, Backend, and Design tools |
| **💬 Testimonials** | Client/peer reviews |
| **📩 Contact** | Working contact form + email, location, and phone info |

---

## 🧪 Projects Showcased

### 1. 🌿 Leaf Disease Detection (2023)
> **Type:** Website | AI/ML Project

A web-based system that allows users to upload or capture images of plant leaves to identify possible diseases. The application analyzes the leaf image using image processing techniques and displays the detected disease name along with its symptoms and treatment suggestions.

**Tech Stack:** `HTML` `CSS` `JavaScript` `Python` `Django` `CNN` `SQLite3`

---

### 2. 🎬 REELIFY — AI Reel Generator (2025)
> **Type:** AI Web Application

An AI-powered web app that allows users to upload multiple images and provide custom text to generate short reel-style videos automatically. The system combines uploaded images with smooth transitions, background effects, and synchronized AI-generated voice narration.

**Tech Stack:** `HTML` `CSS` `JavaScript` `Python` `Flask` `SQL` `ElevenLabs API`

---

### 3. 📚 StudyBuddy (2025)
> **Type:** Web App | Student Platform

A web-based platform that allows students to upload, share, download, and manage study notes in a centralized system. Users can create an account, log in securely, and upload their academic notes to make them publicly accessible to other students.

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
| Node.js | ██████ 30% |
| REST API | ██████ 30% |

### Design
| Skill | Proficiency |
|---|---|
| Adobe Photoshop | ███████████████ 78% |
| Canva | ██████████ 50% |
| Figma | ████████ 40% |
| Behance | ██████ 30% |

---

## 📩 Contact Form — How It Works

The contact form uses a **Node.js + Express backend** to send emails via **Gmail SMTP through Nodemailer**.

### Flow Diagram

```
User fills form
      ↓
JavaScript collects form data (name, email, subject, message)
      ↓
POST request → http://localhost:5000/send-email
      ↓
Express server receives the data
      ↓
Nodemailer sends email via Gmail SMTP
      ↓
You receive the email in your Gmail inbox ✅
      ↓
Success message shown to user ✅
```

### API Endpoint

```
POST http://localhost:5000/send-email
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
{ "success": true }

// Failure
{ "success": false, "error": "Error message here" }
```

---

## 🌐 Deployment

### Frontend — Deploy on Netlify / Vercel (Free)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com)
3. Connect your GitHub repo
4. Set the **publish directory** to `/` (root)
5. Click **Deploy** ✅

### Backend — Deploy on Render (Free)

1. Push your backend code to GitHub
2. Go to [render.com](https://render.com) → New → **Web Service**
3. Connect your repo
4. Set **Start Command** to: `node server.js`
5. Add your environment variables (`EMAIL_USER`, `EMAIL_PASS`) in the **Environment** tab
6. Deploy ✅
7. Update the fetch URL in `script.js` from `http://localhost:5000` to your Render URL:

```js
// script.js — update this line
const response = await fetch("https://your-app-name.onrender.com/send-email", {
```

---

## 👨‍💻 Author

**Bhushan Pawar**

- 📍 Pune, Maharashtra, India
- 📞 +91 9322903701
- 🎓 BE Computer Science
- 💼 Full Stack Developer | Python Developer | AI Enthusiast

---

## 📜 License

This project is open source and available for personal use and learning purposes.
If you use this as a base for your own portfolio, a credit or star ⭐ on the repo is appreciated!

---

<div align="center">

Made with ❤️ and lots of ☕ by **Bhushan Pawar**

⭐ **Star this repo if you found it helpful!**

</div>