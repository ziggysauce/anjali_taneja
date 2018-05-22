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
      const scrollPos = () => window.scrollY;
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

  /* ================================================================
  ================== Highlight Navigation Bar =======================
  ================================================================ */
  function highlightTabController() {
    let position = window.scrollY;
    const about = document.querySelector('#about_section').offsetTop;
    const video = document.querySelector('#video_section').offsetTop;
    const music = document.querySelector('#music_section').offsetTop;
    const cal = document.querySelector('#calendar_section').offsetTop;
    const pics = document.querySelector('#gallery_section').offsetTop;
    const contact = document.querySelector('#contact_section').offsetTop;

    window.addEventListener('scroll', () => {
      const scroll = () => window.scrollY;
      position = scroll();

      // Check which tab the current position is in
      if (about <= position && position < video) {
        navbarView.highlightTab(document.querySelector('#about_tab'));
      } else if (video <= position && position < music) {
        navbarView.highlightTab(document.querySelector('#video_tab'));
      } else if (music <= position && position < cal) {
        navbarView.highlightTab(document.querySelector('#music_tab'));
      } else if (cal <= position && position < pics) {
        navbarView.highlightTab(document.querySelector('#calendar_tab'));
      } else if (pics <= position && position < contact) {
        navbarView.highlightTab(document.querySelector('#gallery_tab'));
      } else if (contact <= position) {
        navbarView.highlightTab(document.querySelector('#contact_tab'));
      } else {
        navbarView.highlightTab();
      }
    });
  }

  /* ================================================================
  ======================= FORM SUBMISSION ===========================
  ================================================================ */
  function handleFormSubmit() {
    const scriptURL = 'https://script.google.com/a/umich.edu/macros/s/AKfycbzE2QtYguxDcSB5QCtasgBRWhwJzxwFqSj-U4-z15udtlTNsQ/exec';
    const form = document.querySelector('.contact_form');
    const modal = document.querySelector('.form_modal');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => {
          modal.style.display = 'flex';
          setTimeout(() => {
            modal.style.display = 'none';
            form.reset();
          }, 2000);
        })
        .catch((error) => {
          console.error('Error!', error.message);
          alert('Sorry, there was an error while trying to send your message.');
        });
    });
  }

  function runAll() {
    // List all controller functions here
    smoothScrollController();
    responsiveNavBarController();
    exitNavBar();
    navBarScrollController();
    highlightTabController();
    handleFormSubmit();
  }

  window.app.controller = {
    runAll,
  };
}());

// Hide page until fully loaded
document.querySelector('body').style.display = 'none';

window.addEventListener('load', () => {
  window.app.controller.runAll();

  // Display page after fully loaded
  document.querySelector('body').style.display = '';
});

