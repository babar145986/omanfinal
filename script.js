const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileDrawer = mobileMenu?.querySelector('.mobile-drawer');
const toTop = document.getElementById('toTop');
const searchBtn = document.getElementById('searchBtn');
const verificationInput = document.getElementById('verificationInput');
const results = document.getElementById('results');

function openMobileMenu() {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileMenuClose?.addEventListener('click', closeMobileMenu);

  mobileMenu.querySelectorAll('a, .sign-in-btn, .language-btn').forEach((item) => {
    item.addEventListener('click', closeMobileMenu);
  });

  mobileMenu.addEventListener('click', (event) => {
    if (!mobileDrawer) return;
    if (!mobileDrawer.contains(event.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) closeMobileMenu();
  });
}

function updateToTop() {
  if (!toTop) return;
  if (window.scrollY > 300) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
}

window.addEventListener('scroll', updateToTop, { passive: true });
updateToTop();

toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function performSearch() {
  const value = verificationInput?.value.trim();
  if (!value) {
    verificationInput?.focus();
    return;
  }

  const licenseVerification = document.querySelector('.license-item:nth-child(3) p');
  if (licenseVerification) {
    licenseVerification.textContent = value;
  }

  results?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

searchBtn?.addEventListener('click', performSearch);
verificationInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') performSearch();
});


/* ======================== */

const support = document.querySelector('.support');

support.addEventListener('click', function () {
  this.classList.toggle('active');
});