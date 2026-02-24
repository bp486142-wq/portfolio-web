/* ============================================================
   BHUSHAN PAWAR — Portfolio Script
   ============================================================ */

/* ── 1. LOADER ─────────────────────────────────────────────── */
(function initLoader() {
  const loader   = document.getElementById('loader');
  const fill     = document.getElementById('loaderFill');
  const pct      = document.getElementById('loaderPct');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      fill.style.width = '100%';
      pct.textContent  = '100';
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
        animateHeroLines();
        startCounters();
      }, 500);
    } else {
      fill.style.width = progress + '%';
      pct.textContent  = Math.floor(progress);
    }
  }, 60);
})();


/* ── 2. CUSTOM CURSOR ──────────────────────────────────────── */
(function initCursor() {
  const cursor    = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');
  if (!cursor || !cursorDot) return;

  // Override CSS transition on cursor ring so JS fully controls it
  cursor.style.transition = 'background 0.2s, border-color 0.2s, width 0.2s, height 0.2s';
  cursor.style.willChange = 'transform';
  cursorDot.style.willChange = 'transform';

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    // Dot follows instantly — no lag
    cursorDot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
  }, { passive: true });

  function animateCursor() {
    // Higher lerp = less lag (0.22 feels snappy but still smooth)
    cx += (mx - cx) * 0.22;
    cy += (my - cy) * 0.22;
    cursor.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effects
  document.querySelectorAll('a, button, .proj, .tcard, .acard, .ti, .soc-btn, .btn-primary, .btn-ghost').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity    = '0';
    cursorDot.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity    = '1';
    cursorDot.style.opacity = '1';
  });
})();


/* ── 3. NAVBAR ─────────────────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Active link highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();


/* ── 4. HAMBURGER / MOBILE MENU ────────────────────────────── */
(function initHamburger() {
  const ham        = document.getElementById('ham');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!ham || !mobileMenu) return;

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });

  document.querySelectorAll('.mlink').forEach(link => {
    link.addEventListener('click', () => {
      ham.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
})();


/* ── 5. SMOOTH SCROLL ──────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ── 6. HERO HEADLINE ANIMATION ────────────────────────────── */
function animateHeroLines() {
  const lines = document.querySelectorAll('.hero-heading .line');
  lines.forEach((line, i) => {
    line.style.opacity   = '0';
    line.style.transform = 'translateY(40px)';
    line.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
    requestAnimationFrame(() => {
      line.style.opacity   = '1';
      line.style.transform = 'translateY(0)';
    });
  });

  // Animate hero badge, sub, actions, stats
  ['.hero-badge', '.hero-sub', '.hero-actions', '.hero-stats'].forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${0.5 + i * 0.15}s, transform 0.6s ease ${0.5 + i * 0.15}s`;
    requestAnimationFrame(() => {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    });
  });
}


/* ── 7. COUNTER ANIMATION ──────────────────────────────────── */
function startCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    let current  = 0;
    const step   = Math.max(1, Math.ceil(target / 40));
    const timer  = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 40);
  });
}


/* ── 8. SCROLL REVEAL ──────────────────────────────────────── */
(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
})();


/* ── 9. SKILL BARS ANIMATION ───────────────────────────────── */
(function initSkillBars() {
  const fills = document.querySelectorAll('.sbar-fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const w = entry.target.dataset.w || 0;
        entry.target.style.width = w + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => {
    fill.style.width = '0%';
    fill.style.transition = 'width 1s ease';
    observer.observe(fill);
  });
})();


/* ── 10. PROJECT BAR ANIMATION ─────────────────────────────── */
(function initProjectBars() {
  const pvBars = document.querySelectorAll('.pv-bars');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar').forEach((bar, i) => {
          bar.style.transition = `height 0.6s ease ${i * 0.1}s`;
          const targetH = bar.style.height;
          bar.style.height = '0%';
          setTimeout(() => { bar.style.height = targetH; }, 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  pvBars.forEach(el => observer.observe(el));
})();


/* ── 11. TECH ICON TOOLTIP ─────────────────────────────────── */
(function initTechTooltip() {
  document.querySelectorAll('.ti').forEach(el => {
    const title = el.getAttribute('title');
    if (!title) return;

    const tooltip = document.createElement('span');
    tooltip.className = 'ti-tooltip';
    tooltip.textContent = title;
    el.appendChild(tooltip);
  });
})();


/* ── 12. CONTACT FORM ──────────────────────────────────────── */
(function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  // ── Change this to your deployed Flask URL when live ──
  const API_URL = 'http://localhost:5000/api/contact';

  // Inject an error message container if not present
  let errorBox = document.getElementById('formError');
  if (!errorBox) {
    errorBox = document.createElement('div');
    errorBox.id = 'formError';
    errorBox.style.cssText = `
      display:none; margin-top:12px; padding:12px 16px;
      background:rgba(255,80,80,0.1); border:1px solid rgba(255,80,80,0.3);
      border-radius:8px; color:#ff6060; font-size:14px;
    `;
    form.appendChild(errorBox);
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn  = form.querySelector('button[type="submit"]');
    const span = btn.querySelector('span');
    const orig = span.textContent;

    // Clear previous messages
    errorBox.style.display  = 'none';
    if (success) success.style.display = 'none';

    // Loading state
    btn.disabled     = true;
    span.textContent = 'Sending…';

    const payload = {
      name:    form.name.value.trim(),
      email:   form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim()
    };

    try {
      const res  = await fetch(API_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        form.reset();
        if (success) {
          success.style.display = 'block';
          setTimeout(() => { success.style.display = 'none'; }, 6000);
        }
      } else {
        // Show server validation errors
        const msgs = data.errors
          ? Object.values(data.errors).join(' · ')
          : 'Something went wrong. Please try again.';
        errorBox.textContent  = '⚠ ' + msgs;
        errorBox.style.display = 'block';
      }
    } catch (err) {
      errorBox.textContent  = '⚠ Could not reach the server. Please try again later.';
      errorBox.style.display = 'block';
      console.error('Contact form error:', err);
    } finally {
      btn.disabled     = false;
      span.textContent = orig;
    }
  });
})();


/* ── 13. FLOATING CARDS PARALLAX ───────────────────────────── */
(function initFloatParallax() {
  const cards = document.querySelectorAll('.float-card');
  if (!cards.length) return;

  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    cards.forEach((card, i) => {
      const factor = (i + 1) * 6;
      card.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    });
  });
})();


/* ── 14. AVATAR RING PULSE ─────────────────────────────────── */
(function initRings() {
  const rings = document.querySelectorAll('.avatar-ring');
  rings.forEach((ring, i) => {
    ring.style.animationDelay = `${i * 0.6}s`;
  });
})();


/* ── 15. SCROLL PROGRESS INDICATOR ────────────────────────── */
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scrollProgress';
  bar.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    width: 0%;
    background: var(--accent, #ff6b35);
    z-index: 9999;
    transition: width 0.1s linear;
    pointer-events: none;
  `;
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  });
})();


/* ── 16. HERO BG TEXT PARALLAX ─────────────────────────────── */
(function initBgTextParallax() {
  const bgText = document.querySelector('.hero-bg-text');
  if (!bgText) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    bgText.style.transform = `translateX(-50%) translateY(${y * 0.25}px)`;
  });
})();


/* ── 17. SECTION ENTRANCE: heading underline ───────────────── */
(function initHeadingUnderline() {
  const headings = document.querySelectorAll('.section-heading em');
  headings.forEach(em => {
    em.style.backgroundSize = '0% 3px';
    em.style.backgroundRepeat = 'no-repeat';
    em.style.backgroundPosition = 'left bottom';
    em.style.transition = 'background-size 0.8s ease 0.3s';

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          em.style.backgroundSize = '100% 3px';
          obs.unobserve(em);
        }
      });
    }, { threshold: 0.5 });

    obs.observe(em);
  });
})();


/* ── 18. FOOTER YEAR ───────────────────────────────────────── */
(function setYear() {
  const el = document.querySelector('.footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();


/* ── 19. BACK TO TOP ───────────────────────────────────────── */
(function initBackToTop() {
  // Inject button into footer if missing
  let btn = document.getElementById('backToTop');
  if (!btn) {
    const footer = document.querySelector('footer .footer-inner');
    if (!footer) return;
    btn = document.createElement('button');
    btn.id = 'backToTop';
    btn.innerHTML = '&#8593; Top';
    footer.appendChild(btn);
  }

  // Start hidden
  btn.style.opacity       = '0';
  btn.style.pointerEvents = 'none';
  btn.style.transition    = 'opacity 0.3s ease, border-color 0.2s, color 0.2s';

  // Show after scrolling 400px
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity       = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });

  // Scroll to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();