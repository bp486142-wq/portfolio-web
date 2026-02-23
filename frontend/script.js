
/* =========================================
   LOADER
   ========================================= */
(function () {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loaderFill');
  const pct = document.getElementById('loaderPct');
  let n = 0;
  document.body.style.overflow = 'hidden';
  const t = setInterval(() => {
    n += Math.floor(Math.random() * 8) + 3;
    if (n >= 100) { n = 100; clearInterval(t); setTimeout(() => { loader.classList.add('hidden'); document.body.style.overflow = ''; }, 500); }
    fill.style.width = n + '%';
    pct.textContent = n;
  }, 55);
})();

/* =========================================
   CUSTOM CURSOR
   ========================================= */
(function () {
  const cur = document.getElementById('cursor');
  const dot = document.getElementById('cursorDot');
  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  function loop() {
    cx += (mx - cx) * 0.13; cy += (my - cy) * 0.13;
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  document.querySelectorAll('a,button,input,textarea,.acard,.proj,.tcard').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cur.classList.remove('hovered'));
  });
  document.addEventListener('mousedown', () => cur.classList.add('clicking'));
  document.addEventListener('mouseup', () => cur.classList.remove('clicking'));
})();

/* =========================================
   NAVBAR
   ========================================= */
(function () {
  const nav = document.getElementById('nav');
  const ham = document.getElementById('ham');
  const menu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });
  document.querySelectorAll('.mlink').forEach(l => {
    l.addEventListener('click', () => { ham.classList.remove('open'); menu.classList.remove('open'); });
  });
})();

/* =========================================
   SMOOTH SCROLL
   ========================================= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); const off = document.getElementById('nav').offsetHeight; window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - off, behavior: 'smooth' }); }
  });
});

/* =========================================
   SCROLL REVEAL
   ========================================= */
(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.children);
        const i = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* =========================================
   COUNTERS
   ========================================= */
(function () {
  let done = false;
  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !done) {
      done = true;
      document.querySelectorAll('.stat-num[data-target]').forEach(el => {
        const target = +el.dataset.target;
        let cur = 0;
        const step = target / 45;
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(t); }
          el.textContent = Math.floor(cur);
        }, 35);
      });
    }
  }, { threshold: 0.5 });
  const hs = document.querySelector('.hero-stats');
  if (hs) io.observe(hs);
})();

/* =========================================
   SKILL BARS
   ========================================= */
(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => { e.target.style.width = e.target.dataset.w + '%'; }, 250);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.sbar-fill').forEach(el => io.observe(el));
})();

/* =========================================
   PARALLAX
   ========================================= */
(function () {
  const bg = document.querySelector('.hero-bg-text');
  const vis = document.querySelector('.hero-visual');
  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    if (bg) bg.style.transform = `translate(-50%, calc(-50% + ${s * 0.18}px))`;
    if (vis) vis.style.transform = `translateY(${s * 0.07}px)`;
  });
})();

/* =========================================
   TILT EFFECT
   ========================================= */
document.querySelectorAll('.proj, .tcard, .acard').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -4;
    const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 4;
    card.style.transition = 'transform 0.1s ease';
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease, border-color 0.3s';
    card.style.transform = '';
  });
});

/* =========================================
   CONTACT FORM
   ========================================= */
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: this.querySelector('[name="name"]').value,
    email: this.querySelector('[name="email"]').value,
    subject: this.querySelector('[name="subject"]').value,
    message: this.querySelector('[name="message"]').value,
  };

  const submitBtn = this.querySelector('button[type="submit"]');
  const successDiv = document.getElementById('formSuccess');
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://portfolio-web-5kh3.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      successDiv.classList.add('show');
      this.reset();
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch (err) {
    alert("Could not reach server. Please try again later.");
  } finally {
    submitBtn.disabled = false;
  }
});

/* =========================================
   BACK TO TOP
   ========================================= */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================
   CURSOR PARTICLES
   ========================================= */
(function () {
  let tick = 0, lx = 0, ly = 0;
  document.addEventListener('mousemove', e => {
    tick++;
    if (tick % 6 !== 0) return;
    if (Math.hypot(e.clientX - lx, e.clientY - ly) < 20) return;
    lx = e.clientX; ly = e.clientY;
    const p = document.createElement('div');
    const sz = Math.random() * 5 + 2;
    Object.assign(p.style, {
      position: 'fixed', pointerEvents: 'none', zIndex: 9990,
      left: e.clientX + 'px', top: e.clientY + 'px',
      width: sz + 'px', height: sz + 'px', borderRadius: '50%',
      background: `rgba(255,107,53,${Math.random() * 0.5 + 0.15})`,
      transform: 'translate(-50%,-50%)',
      transition: 'opacity 0.8s ease, transform 0.8s ease'
    });
    document.body.appendChild(p);
    requestAnimationFrame(() => {
      p.style.opacity = '0';
      p.style.transform = `translate(-50%, calc(-50% - ${Math.random() * 30 + 10}px)) scale(0)`;
    });
    setTimeout(() => p.remove(), 800);
  });
})();

console.log('%c🚀 Portfolio by Bhushan Pawar', 'color:#ff6b35;font-size:18px;font-weight:bold;');
