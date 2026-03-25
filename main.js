/* AXEL ARIEL — main.js */
(function() {
  'use strict';

  // 1. Navbar scroll behavior
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    var alwaysSolid = navbar.classList.contains('solid'); // pages that start solid stay dark always
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50 || alwaysSolid) { navbar.classList.add('solid'); }
      else { navbar.classList.remove('solid'); }
    }, { passive: true });
    if (window.scrollY > 50 || alwaysSolid) navbar.classList.add('solid');
  }

  // 2. Mobile menu
  var hamburger = document.querySelector('.nav-hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // 3. FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // 4. Page transition
  document.querySelectorAll('a[href]').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || link.target === '_blank') return;
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var pt = document.querySelector('.page-transition');
      if (pt) { pt.classList.add('out'); }
      setTimeout(function() { window.location.href = href; }, 150);
    });
  });

  var pt = document.querySelector('.page-transition');
  if (pt) {
    // pageshow fires on normal load AND when restored from bfcache (back/forward)
    window.addEventListener('pageshow', function(e) {
      pt.classList.remove('out');
    });
  }

  // 5. Segment buttons transition (video/foto category switcher)
  document.querySelectorAll('.seg-btn').forEach(function(btn) {
    if (btn.classList.contains('active')) return;
    var onclick = btn.getAttribute('onclick');
    if (!onclick) return;
    var match = onclick.match(/location\.href=['"]([^'"]+)['"]/);
    if (!match) return;
    var href = match[1];
    btn.removeAttribute('onclick');
    btn.addEventListener('click', function() {
      var pt = document.querySelector('.page-transition');
      if (pt) { pt.classList.add('out'); }
      setTimeout(function() { window.location.href = href; }, 150);
    });
  });

  // 6. Contact form WA redirect
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      var nama = data.get('nama') || '';
      var kontak = data.get('kontak') || '';
      var jenis = data.get('jenis') || '';
      var pesan = data.get('pesan') || '';
      var text = encodeURIComponent('Halo Axel, nama saya ' + nama + '.\n\nJenis project: ' + jenis + '\nKontak: ' + kontak + '\n\n' + pesan);
      window.open('https://wa.me/6285542200957?text=' + text, '_blank');
    });
  }

})();
