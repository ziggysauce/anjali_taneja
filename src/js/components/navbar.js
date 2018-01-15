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
    const active = document.querySelector('.active_nav');
    const ham = document.querySelector('.hamburger_nav_button');

    // Check if navbar is active
    if (navToggle.className) {
      // If it is, remove the active class to hide it

      active.style.animation = 'fadeout 1s';
      setTimeout(() => {
        navToggle.classList.remove('active_nav');
      }, 1000);
      ham.classList.remove('active_ham');
    } else {
      // If it isn't, add the active class to show it
      ham.classList.add('active_ham');
      navToggle.classList.add('active_nav');
      navToggle.style.animation = null;
    }
  }

  window.app.navbarView = {
    showResponsiveNavBar,
  };
}());
