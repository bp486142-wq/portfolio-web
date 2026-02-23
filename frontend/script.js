// ======= script.js =======

// ----- Loader -----
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const loaderFill = document.getElementById('loaderFill');
    const loaderPct = document.getElementById('loaderPct');
    let pct = 0;
    const interval = setInterval(() => {
        pct += 2;
        loaderFill.style.width = `${pct}%`;
        loaderPct.textContent = pct;
        if (pct >= 100) {
            clearInterval(interval);
            loader.style.display = 'none';
        }
    }, 20);
});

// ----- Cursor -----
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// ----- Hamburger Menu -----
const ham = document.getElementById('ham');
const mobileMenu = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    ham.classList.toggle('active');
});
document.querySelectorAll('.mlink').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('active'));
});

// ----- Smooth Scroll -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ----- Skills Bar Animation -----
const skillBars = document.querySelectorAll('.sbar-fill');
window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.8;
    skillBars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if (top < trigger) {
            bar.style.width = bar.dataset.w + '%';
        }
    });
});

// ----- Back to Top -----
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ----- Contact Form -----
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Read form values
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Choose API URL
    const API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:5000/send-email'
        : 'https://portfolio-web-5kh3.onrender.com/send-email';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Network response not ok');
        const result = await response.json();

        formSuccess.style.display = 'block';
        contactForm.reset();
        setTimeout(() => formSuccess.style.display = 'none', 5000);
    } catch (err) {
        console.error(err);
        alert('Failed to send message. Please try again later.');
    }
});

// ----- Reveal Animations -----
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    const trigger = window.innerHeight * 0.9;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add('active');
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check