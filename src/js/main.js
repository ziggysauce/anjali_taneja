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

  function highlightTabController() {
    let position = window.scrollY;
    const about = document.querySelector('#about_section').offsetTop - 50;
    const video = document.querySelector('#video_section').offsetTop - 50;
    const music = document.querySelector('#music_section').offsetTop - 50;
    const cal = document.querySelector('#calendar_section').offsetTop - 50;
    const pics = document.querySelector('#gallery_section').offsetTop - 50;
    const contact = document.querySelector('#contact_section').offsetTop - 50;
    const aboutTab = document.querySelector('#about_tab');
    const videoTab = document.querySelector('#video_tab');
    const musicTab = document.querySelector('#music_tab');
    const calTab = document.querySelector('#calendar_tab');
    const picsTab = document.querySelector('#gallery_tab');
    const contactTab = document.querySelector('#contact_tab');


    window.addEventListener('scroll', () => {
      const scroll = () => { return window.scrollY; };
      position = scroll();

      // Check which tab the current position is in
      if (about <= position && position < video) {
        navbarView.highlightTab(aboutTab);
      } else if (video <= position && position < music) {
        navbarView.highlightTab(videoTab);
      } else if (music <= position && position < cal) {
        navbarView.highlightTab(musicTab);
      } else if (cal <= position && position < pics) {
        navbarView.highlightTab(calTab);
      } else if (pics <= position && position < contact) {
        navbarView.highlightTab(picsTab);
      } else if (contact <= position) {
        navbarView.highlightTab(contactTab);
      } else {
        navbarView.highlightTab();
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
    highlightTabController();
    eventHandlers();
  }

  window.app.controller = {
    runAll,
  };
}());

window.app.controller.runAll();
