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

    // Check if navbar is active
    if (navToggle.className) {
      // If it is, remove the active class to hide it
      navToggle.classList.remove('active_nav');
    } else {
      // If it isn't, add the active class to show it
      navToggle.classList.add('active_nav');
    }
  }

  window.app.navbarView = {
    showResponsiveNavBar,
  };
}());
