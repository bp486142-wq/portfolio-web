require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Create transporter once at startup (not per-request)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  console.log("Received data:", req.body);

  // Sanitize inputs
  const name = (req.body.name || '').trim();
  const email = (req.body.email || '').trim();
  const subject = (req.body.subject || '').trim();
  const message = (req.body.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  const emailSubject = subject ? subject : `New Portfolio Message from ${name}`;

  try {

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: emailSubject,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});