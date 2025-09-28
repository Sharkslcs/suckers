 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/app.js
index 0000000000000000000000000000000000000000..525d496e529663e898a052242baa75f96ef3f1aa 100644
--- a//dev/null
+++ b/app.js
@@ -0,0 +1,140 @@
+(function () {
+  function initCarousels() {
+    if (typeof Swiper === 'undefined') {
+      console.warn('Swiper não carregado.');
+      return;
+    }
+
+    document.querySelectorAll('.swiper').forEach((swiperEl, index) => {
+      const dataset = swiperEl.dataset;
+      const pagination = swiperEl.querySelector('.swiper-pagination');
+      const nextEl = swiperEl.querySelector('.swiper-button-next');
+      const prevEl = swiperEl.querySelector('.swiper-button-prev');
+
+      const slidesMobile = parseFloat(dataset.mobile) || 1;
+      const slidesTablet = parseFloat(dataset.tablet) || slidesMobile;
+      const slidesDesktop = parseFloat(dataset.desktop) || slidesTablet;
+      const spaceBetween = parseFloat(dataset.space) || 0;
+      const autoplayDelay = parseInt(dataset.autoplay, 10);
+      const loop = dataset.loop === 'true';
+
+      const options = {
+        slidesPerView: slidesMobile,
+        spaceBetween,
+        loop,
+        watchOverflow: true,
+        pagination: pagination
+          ? {
+              el: pagination,
+              clickable: true,
+            }
+          : undefined,
+        navigation:
+          nextEl && prevEl
+            ? {
+                nextEl,
+                prevEl,
+              }
+            : undefined,
+        breakpoints: {
+          768: {
+            slidesPerView: slidesTablet,
+          },
+          1024: {
+            slidesPerView: slidesDesktop,
+          },
+        },
+      };
+
+      if (!Number.isNaN(autoplayDelay)) {
+        options.autoplay = {
+          delay: autoplayDelay,
+          disableOnInteraction: false,
+        };
+      }
+
+      swiperEl.dataset.swiperId = `swiper-${index + 1}`;
+      // eslint-disable-next-line no-new
+      new Swiper(swiperEl, options);
+    });
+  }
+
+  function initToggles() {
+    const dropdowns = document.querySelectorAll('[data-dropdown]');
+    const toggleSelectors = [
+      { button: '[data-toggle="services"]', parentSelector: '.has-submenu' },
+      { button: '[data-toggle="regions"]', parentSelector: '.dropdown' },
+      { button: '[data-toggle="languages"]', parentSelector: '.dropdown' },
+    ];
+
+    function closeAll(except) {
+      dropdowns.forEach((dropdown) => {
+        if (!except || dropdown !== except) {
+          dropdown.classList.remove('is-open');
+          const trigger = dropdown.querySelector('[aria-expanded]');
+          if (trigger) {
+            trigger.setAttribute('aria-expanded', 'false');
+          }
+        }
+      });
+    }
+
+    toggleSelectors.forEach(({ button, parentSelector }) => {
+      document.querySelectorAll(button).forEach((toggle) => {
+        const parent = toggle.closest(parentSelector);
+        if (!parent) return;
+
+        toggle.addEventListener('click', (event) => {
+          event.preventDefault();
+          const isOpen = parent.classList.toggle('is-open');
+          toggle.setAttribute('aria-expanded', String(isOpen));
+          closeAll(isOpen ? parent : undefined);
+          event.stopPropagation();
+        });
+      });
+    });
+
+    document.addEventListener('click', (event) => {
+      const target = event.target;
+      if (!target.closest('[data-dropdown]')) {
+        closeAll();
+      }
+    });
+  }
+
+  function initBackToTop() {
+    const button = document.getElementById('back-to-top');
+    if (!button) return;
+
+    const toggleVisibility = () => {
+      if (window.scrollY > 240) {
+        button.classList.add('visible');
+      } else {
+        button.classList.remove('visible');
+      }
+    };
+
+    window.addEventListener('scroll', toggleVisibility);
+    toggleVisibility();
+
+    button.addEventListener('click', () => {
+      window.scrollTo({ top: 0, behavior: 'smooth' });
+    });
+  }
+
+  function initForms() {
+    document.querySelectorAll('form').forEach((form) => {
+      form.addEventListener('submit', (event) => {
+        event.preventDefault();
+        window.alert('Funcionalidade em desenvolvimento');
+      });
+    });
+  }
+
+  document.addEventListener('DOMContentLoaded', () => {
+    initCarousels();
+    initToggles();
+    initBackToTop();
+    initForms();
+  });
+})();
 
EOF
)
