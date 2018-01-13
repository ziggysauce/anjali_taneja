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
    document.querySelector('#nav_link_list').addEventListener('click', (e) => {
      e.preventDefault();
      navbarView.showResponsiveNavBar();
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
    eventHandlers();
  }

  window.app.controller = {
    runAll,
  };
}());

window.app.controller.runAll();
