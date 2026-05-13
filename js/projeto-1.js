(function () {

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

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', prevImage);
  lightboxNext.addEventListener('click', nextImage);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  /* Wire a selector: each matching img opens lightbox */
  function wireImages(selector) {
    const imgs = document.querySelectorAll(selector);
    if (!imgs.length) return;
    const srcs = Array.from(imgs).map(function (img) { return img.src; });
    imgs.forEach(function (img, i) {
      img.addEventListener('click', function () { openLightbox(srcs, i); });
    });
  }

  wireImages('.whatsapp-image-clickable');
  wireImages('.email-image-clickable');
  wireImages('.banner-clickable');

  /* ────────────────────────────────────────────────────────
     MATERIAL TABS
  ──────────────────────────────────────────────────────── */
  const tabs   = document.querySelectorAll('.mat-tab');
  const panels = document.querySelectorAll('.mat-panel');

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

})();
