(function () {
  'use strict';

  /* ────────────────────────────────────────────────────────
     TAB SYSTEM
     Two independent tab groups: wireframes + marketing.
     Each group only controls its own sibling panels.
  ──────────────────────────────────────────────────────── */

  // Group tabs + panels by their nearest .project-section parent
  // so the two tab bars don't interfere with each other.
  document.querySelectorAll('.project-section, .project-hero').forEach(function (section) {
    const tabs   = section.querySelectorAll('.mat-tab');
    const panels = section.querySelectorAll('.mat-panel');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const target = tab.dataset.tab;

        tabs.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        panels.forEach(function (panel) {
          panel.classList.toggle('active', panel.dataset.panel === target);
        });
      });
    });
  });

  /* ────────────────────────────────────────────────────────
     LIGHTBOX
  ──────────────────────────────────────────────────────── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev  = document.getElementById('lightboxPrev');
  const lightboxNext  = document.getElementById('lightboxNext');

  let images  = [];
  let current = 0;

  function openLightbox(srcArray, index) {
    images  = srcArray;
    current = index;
    renderLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    const multi = images.length > 1;
    lightboxPrev.style.display = multi ? 'flex' : 'none';
    lightboxNext.style.display = multi ? 'flex' : 'none';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  function renderLightbox()  { lightboxImg.src = images[current]; }
  function prevImage()       { current = (current - 1 + images.length) % images.length; renderLightbox(); }
  function nextImage()       { current = (current + 1) % images.length; renderLightbox(); }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext)  lightboxNext.addEventListener('click', nextImage);

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  /* Wire a group of clickable items → lightbox.
     Each item is a container (.wireframe-item / .marketing-item)
     that holds an <img> inside. */
  function wireGroup(selector) {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    const srcs = Array.from(items).map(function (item) {
      const img = item.querySelector('img');
      return img ? img.src : '';
    }).filter(Boolean);

    items.forEach(function (item, i) {
      item.addEventListener('click', function () {
        openLightbox(srcs, i);
      });
    });
  }

  wireGroup('.wire-clickable');
  wireGroup('.marketing-clickable');

})();
