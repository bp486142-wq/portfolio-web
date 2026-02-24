"""
Bhushan Pawar — Portfolio Contact Form Backend
Flask + Gmail SMTP
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
import re
from datetime import datetime

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["*"])  # restrict to your domain in production

# ── Mail Configuration ──────────────────────────────────────────
app.config["MAIL_SERVER"]        = "smtp.gmail.com"
app.config["MAIL_PORT"]          = 587
app.config["MAIL_USE_TLS"]       = True
app.config["MAIL_USERNAME"]      = os.getenv("MAIL_USERNAME")   # your Gmail
app.config["MAIL_PASSWORD"]      = os.getenv("MAIL_PASSWORD")   # App Password
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_USERNAME")

mail = Mail(app)

OWNER_EMAIL = os.getenv("OWNER_EMAIL", os.getenv("MAIL_USERNAME"))  # who receives the contact


# ── Helpers ─────────────────────────────────────────────────────
def is_valid_email(email: str) -> bool:
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w{2,}$"
    return re.match(pattern, email) is not None


# ── Routes ──────────────────────────────────────────────────────
@app.route("/", methods=["GET"])
def home():
    return jsonify({"status": "Bhushan Portfolio Backend Running ✅"})


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True) or request.form

    name    = (data.get("name", "") or "").strip()
    email   = (data.get("email", "") or "").strip()
    subject = (data.get("subject", "") or "").strip()
    message = (data.get("message", "") or "").strip()

    # ── Validation ──
    errors = {}
    if not name:
        errors["name"] = "Name is required."
    if not email or not is_valid_email(email):
        errors["email"] = "A valid email is required."
    if not subject:
        errors["subject"] = "Subject is required."
    if not message or len(message) < 10:
        errors["message"] = "Message must be at least 10 characters."

    if errors:
        return jsonify({"success": False, "errors": errors}), 400

    now = datetime.now().strftime("%d %b %Y, %I:%M %p")

    # ── Email TO YOU (notification) ──────────────────────────────
    owner_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {{ font-family: 'Segoe UI', sans-serif; background: #0c0c0e; color: #f0f0f0; margin: 0; padding: 0; }}
        .wrapper {{ max-width: 600px; margin: 40px auto; background: #111116; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); }}
        .header {{ background: linear-gradient(135deg, #ff6b35, #ff9f1c); padding: 36px 40px; }}
        .header h1 {{ margin: 0; font-size: 24px; color: #fff; letter-spacing: 1px; }}
        .header p {{ margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.8); }}
        .body {{ padding: 36px 40px; }}
        .field {{ margin-bottom: 24px; }}
        .label {{ font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #ff6b35; font-weight: 600; margin-bottom: 6px; }}
        .value {{ font-size: 15px; color: #f0f0f0; background: rgba(255,255,255,0.04); padding: 12px 16px; border-radius: 8px; border-left: 3px solid #ff6b35; }}
        .message-box {{ font-size: 15px; color: #f0f0f0; background: rgba(255,255,255,0.04); padding: 16px; border-radius: 8px; line-height: 1.7; border-left: 3px solid #ff9f1c; white-space: pre-wrap; }}
        .footer {{ padding: 20px 40px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #666; text-align: center; }}
        .reply-btn {{ display: inline-block; margin-top: 24px; padding: 12px 28px; background: #ff6b35; color: #fff !important; border-radius: 100px; text-decoration: none; font-size: 14px; font-weight: 600; }}
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>📬 New Contact Message</h1>
          <p>Received on {now}</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">From</div>
            <div class="value">{name}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:{email}" style="color:#ff6b35;">{email}</a></div>
          </div>
          <div class="field">
            <div class="label">Subject</div>
            <div class="value">{subject}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">{message}</div>
          </div>
          <a href="mailto:{email}?subject=Re: {subject}" class="reply-btn">↩ Reply to {name}</a>
        </div>
        <div class="footer">Bhushan Pawar Portfolio · Auto-generated notification</div>
      </div>
    </body>
    </html>
    """

    # ── Auto-reply TO SENDER ─────────────────────────────────────
    sender_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {{ font-family: 'Segoe UI', sans-serif; background: #0c0c0e; color: #f0f0f0; margin: 0; padding: 0; }}
        .wrapper {{ max-width: 600px; margin: 40px auto; background: #111116; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); }}
        .header {{ background: linear-gradient(135deg, #ff6b35, #ff9f1c); padding: 36px 40px; text-align: center; }}
        .header h1 {{ margin: 0; font-size: 26px; color: #fff; }}
        .header p {{ margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px; }}
        .body {{ padding: 36px 40px; text-align: center; }}
        .body p {{ color: #aaa; line-height: 1.8; font-size: 15px; }}
        .body strong {{ color: #f0f0f0; }}
        .summary {{ background: rgba(255,107,53,0.07); border: 1px solid rgba(255,107,53,0.2); border-radius: 12px; padding: 20px 24px; margin: 28px 0; text-align: left; }}
        .summary-row {{ display: flex; gap: 12px; margin-bottom: 10px; font-size: 14px; }}
        .summary-key {{ color: #ff6b35; font-weight: 600; min-width: 70px; }}
        .summary-val {{ color: #ddd; }}
        .footer {{ padding: 20px 40px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #555; text-align: center; }}
        .sig {{ margin-top: 28px; font-size: 14px; color: #888; }}
        .sig strong {{ color: #ff6b35; }}
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>Thanks, {name}! 🙌</h1>
          <p>Your message has been received.</p>
        </div>
        <div class="body">
          <p>Hey <strong>{name}</strong>, I've received your message and will get back to you <strong>within 24 hours</strong>. Here's a copy of what you sent:</p>
          <div class="summary">
            <div class="summary-row"><span class="summary-key">Subject</span><span class="summary-val">{subject}</span></div>
            <div class="summary-row"><span class="summary-key">Message</span><span class="summary-val">{message[:200]}{"..." if len(message) > 200 else ""}</span></div>
            <div class="summary-row"><span class="summary-key">Sent</span><span class="summary-val">{now}</span></div>
          </div>
          <p>In the meantime, feel free to check out my work on <a href="https://github.com/bp486142-wq" style="color:#ff6b35;">GitHub</a> or connect on <a href="https://www.linkedin.com/in/bhushan-pawar-9b19a5270/" style="color:#ff6b35;">LinkedIn</a>.</p>
          <div class="sig">— <strong>Bhushan Pawar</strong><br>Full-Stack & Python Developer · Pune, India</div>
        </div>
        <div class="footer">This is an auto-reply. Please do not reply to this email directly.</div>
      </div>
    </body>
    </html>
    """

    try:
        # Send notification to Bhushan
        owner_msg = Message(
            subject=f"[Portfolio] New Message: {subject}",
            recipients=[OWNER_EMAIL],
            html=owner_html,
            reply_to=email
        )
        mail.send(owner_msg)

        # Send auto-reply to sender
        sender_msg = Message(
            subject="Thanks for reaching out! — Bhushan Pawar",
            recipients=[email],
            html=sender_html
        )
        mail.send(sender_msg)

        return jsonify({"success": True, "message": "Message sent! I'll reply within 24 hours."}), 200

    except Exception as e:
        print(f"Mail error: {e}")
        return jsonify({"success": False, "errors": {"server": "Failed to send email. Please try again later."}}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)