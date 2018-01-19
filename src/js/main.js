// Main JS File for webpage

/* =================================
============ CONTROLLER ============
================================= */

// JS code here controls previous functions (application logic)

// Run all functions from controller section
(function makeController() {
  // Save const short names for each model and view component
  const {
    smoothScrollView,
    navbarView,
  } = window.app;

  /* ================================================================
  ======================= Smooth Scroll =============================
  ================================================================ */
  function smoothScrollController() {
    // Define smooth scroll links
    const scrollToggle = document.querySelectorAll('.smooth_scroll');
    // For each smooth scroll link
    [].forEach.call(scrollToggle, (toggle) => {
      // When the smooth scroll link is clicked
      toggle.addEventListener('click', (e) => {
        // Prevent the default link behavior
        e.preventDefault();
        // Get anchor link and calculate distance from the top
        const link = toggle.getAttribute('href');
        const linkId = document.querySelector(link);
        // If the anchor exists
        if (linkId) {
          // Scroll to the anchor at 500ms speed
          smoothScrollView.smoothScroll(linkId, 500);
        }
      }, false);
    });
  }

  /* ================================================================
  ================= Responsive Navigation Bar =======================
  ================================================================ */
  function responsiveNavBarController() {
    document.querySelector('.hamburger_nav_button').addEventListener('click', (e) => {
      e.preventDefault();
      navbarView.showResponsiveNavBar();
    });
  }

  function exitNavBar() {
    // When clicking on a link, side navbar will disappear
    const links = document.querySelectorAll('.active_nav li');

    for (let i = 0; i < links.length; i += 1) {
      links[i].addEventListener('click', (e) => {
        e.preventDefault();
        navbarView.showResponsiveNavBar();
      });
    }
  }

  function navBarScrollController() {
    let curLoc = 0;

    window.addEventListener('scroll', () => {
      const scrollPos = () => { return window.scrollY; };
      const curScroll = scrollPos();

      // Check if responsive navbar is shown first
      if (document.querySelector('.active_nav').style.transform !== 'translateX(-500px)') {
        if (curScroll > curLoc) {
          // If scrolling down, call function to hide navbar
          curLoc = curScroll;
          navbarView.navBarScrollDown();
        } else {
          // Else if scrolling up, call finction to show navbar
          curLoc = curScroll;
          navbarView.navBarScrollUp();
        }
      }
    });
  }

  // Handles all event listeners
  function eventHandlers() {
    // add code here
  }

  function runAll() {
    // List all controller functions here
    smoothScrollController();
    responsiveNavBarController();
    exitNavBar();
    navBarScrollController();
    eventHandlers();
  }

  window.app.controller = {
    runAll,
  };
}());

window.app.controller.runAll();
