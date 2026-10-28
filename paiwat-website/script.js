// Small interactions for the Paiwat landing page
(function() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const year = document.getElementById('year');
  const appStoreLink = document.getElementById('appStoreLink');
  const appStoreLink2 = document.getElementById('appStoreLink2');

  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const open = mainNav.style.display === 'inline-flex';
      mainNav.style.display = open ? 'none' : 'inline-flex';
      navToggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // Replace with real App Store link when available
  const appStoreURL = '#';
  if (appStoreLink) appStoreLink.href = appStoreURL;
  if (appStoreLink2) appStoreLink2.href = appStoreURL;
})();

