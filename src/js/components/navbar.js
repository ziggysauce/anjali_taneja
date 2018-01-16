/* =================================
============== MODEL ===============
================================= */

// JS code here handles all data

/* =================================
============== VIEW ================
================================= */

// JS code here handles DOM elements (presentation)

(function makeResponsiveNavBarView() {
  function showResponsiveNavBar() {
    const navToggle = document.querySelector('#nav_link_list');
    const ham = document.querySelector('.hamburger_nav_button');

    // Horizontally slide navbar in and out of view
    navToggle.style.transition = '.5s';

    // Check if navbar is active
    if (navToggle.className) {
      // If it is, slide out and remove the active class to hide it
      navToggle.style.transform = 'translateX(100px)';
      setTimeout(() => {
        navToggle.classList.remove('active_nav');
      }, 500);
      ham.classList.remove('active_ham');
    } else {
      // If it isn't, add the active class to show it
      ham.classList.add('active_ham');
      navToggle.classList.add('active_nav');
      navToggle.style.transform = 'translateX(-300px)';
    }
  }

  window.app.navbarView = {
    showResponsiveNavBar,
  };
}());
