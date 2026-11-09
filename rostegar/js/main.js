// ============================================================================
// ROSTEGAR ACADEMY - SHARED JAVASCRIPT
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {

  // ── Mobile Menu Toggle ──
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileNavDrawer.classList.toggle('open');
      mobileOverlay.classList.toggle('open');
      document.body.style.overflow = mobileNavDrawer.classList.contains('open') ? 'hidden' : '';
    });
  }

  if (mobileNavClose && mobileNavDrawer) {
    mobileNavClose.addEventListener('click', function() {
      mobileNavDrawer.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function() {
      mobileNavDrawer.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // ── Sticky Mobile CTA ──
  const stickyCta = document.getElementById('stickyCta');
  if (stickyCta) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    });
  }

  // ── Reveal on Scroll ──
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }

  // ── Form Enhancements ──
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const originalText = btn.textContent;
        btn.textContent = 'در حال پردازش...';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 1500);
      }
    });
  });

  // ── Phone Input Formatting ──
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.startsWith('0')) {
        value = value.substring(0, 11);
      }
      e.target.value = value;
    });
  });

  // ── Persian Numerals for Display ──
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  function toPersianNumerals(str) {
    return str.replace(/\d/g, d => persianDigits[d]);
  }

  // Apply Persian numerals to age/course displays where appropriate
  document.querySelectorAll('.course-age').forEach(el => {
    const text = el.textContent;
    if (/\d/.test(text)) {
      el.innerHTML = el.innerHTML.replace(/\d/g, d => persianDigits[d]);
    }
  });

  console.log('آموزشگاه رستگار - وب‌سایت بارگذاری شد');

});
