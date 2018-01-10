// Main JS File for webpage

// Initial function to house all JS functions
(function init() {
  window.app = {
    // created functions are sent here
  }
}());


/* =================================
============== MODEL ===============
================================= */

// JS code here handles all AJAX requests

/* =================================
============== VIEW ================
================================= */

// JS code here handles DOM elements

(function testView() {
  const anjaliNavLogo = document.getElementById('nav_logo');

  function testView() {
    anjaliNavLogo.textContent = 'testing JS code here';
  }

  window.app.testview = {
    testView,
  }
}());

/* =================================
============ CONTROLLER ============
================================= */

// JS code here controls previous functions

// Run all functions from controller section
(function runAll() {
  // Save const short names for each model and view component
  const {
    testview,
  } = window.app;

  // Handles all event listeners
  function eventHandlers() {
    // add code here
  }

  function runAll() {
    // List all functions here
    testview.testView();
    eventHandlers();
  }

  window.app.controller = {
    runAll,
  };
}());

window.app.controller.runAll();
