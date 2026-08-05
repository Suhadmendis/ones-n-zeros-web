document.addEventListener('DOMContentLoaded', function () {
  initDashboardMocks();
  initStickyHeader();
  initMobileNav();
  initScrollReveal();
  initConsultationForm();
});

function initDashboardMocks() {
  var mounts = document.querySelectorAll('[data-dashboard-mock]');
  if (!mounts.length) return;

  var markup = ''
    + '<div class="dashboard-mock__bar">'
    + '<span></span><span></span><span></span>'
    + '<div class="dashboard-mock__tabs"><em>Overview</em><em>Fleet</em><em>Reports</em></div>'
    + '</div>'
    + '<div class="dashboard-mock__body">'
    + '<div class="dashboard-mock__map">'
    + '<svg viewBox="0 0 220 140" preserveAspectRatio="none"><path d="M14,120 C70,40 130,110 206,20"></path></svg>'
    + '<span class="pin pin--start"></span>'
    + '<span class="pin pin--end"></span>'
    + '</div>'
    + '<div class="dashboard-mock__stats">'
    + '<div class="stat-chip"><span class="stat-chip__label">Active Vehicles</span><span class="stat-chip__value">128</span></div>'
    + '<div class="stat-chip"><span class="stat-chip__label">On-Time Trips</span><span class="stat-chip__value">96%</span></div>'
    + '<div class="dashboard-mock__bars">'
    + '<i style="--h:40%"></i><i style="--h:65%"></i><i style="--h:35%"></i><i style="--h:80%"></i><i style="--h:55%"></i><i style="--h:70%"></i>'
    + '</div>'
    + '</div>'
    + '</div>';

  mounts.forEach(function (mount) {
    mount.classList.add('dashboard-mock');
    mount.innerHTML = markup;
  });
}

function initStickyHeader() {
  var header = document.querySelector('[data-header]');
  if (!header) return;

  var ticking = false;

  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });

  update();
}

function initMobileNav() {
  var toggle = document.querySelector('[data-nav-toggle]');
  var panel = document.querySelector('[data-nav-mobile-panel]');
  if (!toggle || !panel) return;

  function closeMenu() {
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    document.body.classList.remove('nav-open');
  }

  function openMenu() {
    panel.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    document.body.classList.add('nav-open');
  }

  toggle.addEventListener('click', function (event) {
    event.stopPropagation();
    var isOpen = panel.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (event) {
    if (!panel.classList.contains('is-open')) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
}

function initScrollReveal() {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(function (item) {
      item.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (item) {
    observer.observe(item);
  });
}

function initConsultationForm() {
  var form = document.querySelector('.consultation-form');
  if (!form) return;

  var success = document.querySelector('.form-success');
  var error = document.querySelector('.form-error');
  var errorText = error ? error.querySelector('span') : null;
  var submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (error) error.hidden = true;
    if (submitBtn) submitBtn.disabled = true;

    fetch('server/mails/send-consultation.php', {
      method: 'POST',
      body: new FormData(form)
    })
      .then(function (response) {
        return response.json().then(function (data) {
          return { ok: response.ok, data: data };
        });
      })
      .then(function (result) {
        if (!result.ok || !result.data.success) {
          throw new Error(result.data.error || 'Something went wrong. Please try again.');
        }

        form.hidden = true;
        if (success) success.hidden = false;
        form.reset();
      })
      .catch(function (err) {
        if (error) {
          if (errorText) errorText.textContent = err.message;
          error.hidden = false;
        }
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}
