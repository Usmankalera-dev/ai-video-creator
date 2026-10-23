// Usman Kalera — AI Video Creator: site interactions
(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  /* ---------- Showcase: only one video plays at a time ---------- */
  var videos = Array.prototype.slice.call(document.querySelectorAll('video'));
  videos.forEach(function (v) {
    v.addEventListener('play', function () {
      videos.forEach(function (other) {
        if (other !== v && !other.paused) other.pause();
      });
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var panel = item.querySelector('.faq-a');
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      // close all others
      document.querySelectorAll('.faq-toggle[aria-expanded="true"]').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          other.closest('.faq-item').querySelector('.faq-a').hidden = true;
        }
      });
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      panel.hidden = isOpen;
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- WhatsApp brief form ---------- */
  var form = document.getElementById('briefForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('bfName').value.trim();
      var product = document.getElementById('bfProduct').value.trim();
      var type = document.getElementById('bfType').value;
      var msg = document.getElementById('bfMsg').value.trim();
      var lines = ['Hi Usman, I want an AI video for my product...'];
      if (name) lines.push('Name: ' + name);
      lines.push('Product: ' + product);
      lines.push('Video type: ' + type);
      if (msg) lines.push('Details: ' + msg);
      var url = 'https://wa.me/923187579301?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
