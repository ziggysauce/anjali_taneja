/* =================================
============== MODEL ===============
================================= */

// JS code here handles all data

/* =================================
============== VIEW ================
================================= */

// JS code here handles DOM elements (presentation)

(function makeResponsiveNavBarView() {
  const active = document.querySelector('.active_nav');
  const ham = document.querySelector('.hamburger_nav_button');
  const navwrap = document.querySelector('.navbar_wrapper');

  function showResponsiveNavBar() {
    // Check if responsive navbar is shown or not

    if (ham.className === 'hamburger_nav_button') {
      // Navbar is inactive
      // Toggle navbar icon animation to X
      ham.classList.add('active_ham');
      // Slide navbar into view
      active.style.transform = 'translateX(-500px)';
    } else {
      // Navbar is active
      // Toggle navbar icon animation to three lines
      ham.classList.remove('active_ham');
      // Slide navbar out of view
      active.style.transform = 'translateX(100px)';
    }
  }

  function navBarScrollDown() {
    navwrap.classList.add('nav_up');
  }

  function navBarScrollUp() {
    navwrap.classList.remove('nav_up');
  }

  function highlightTab(tab) {
    // Remove highlight from all tabs
    const allTabs = document.querySelectorAll('#nav_link_list > li');
    [].forEach.call(allTabs, (eachTab) => {
      eachTab.style.background = '';
    });

    // Show active tab
    if (tab) {
      tab.style.background = '#f9eab1';
    }
  }

  window.app.navbarView = {
    showResponsiveNavBar,
    navBarScrollDown,
    navBarScrollUp,
    highlightTab,
  };
}());
