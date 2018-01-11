/* =================================
============== MODEL ===============
================================= */

// JS code here handles all data

/* =================================
============== VIEW ================
================================= */

// JS code here handles DOM elements (presentation)

(function makeSmoothScrollView() {
  function smoothScroll(anchor, duration) {
    // Calculate how far and how fast to scroll
    const startLocation = window.pageYOffset;
    const endLocation = anchor.offsetTop;
    const distance = endLocation - startLocation;
    const increments = distance / (duration / 16);

    // Scroll the page by an increment, and check if it's time to stop
    const animateScroll = () => {
      window.scrollBy(0, increments);
      stopAnimation();
    };

    // Loop the animation function
    const runAnimation = setInterval(animateScroll, 16);

    // Stop scroll animation when target location is reached
    let stopAnimation = () => {
      const travelled = window.pageYOffset;
      if (travelled <= (endLocation || 0)) {
        clearInterval(runAnimation);
      }
    };

    // If scrolling down
    if (increments >= 0) {
      // Stop animation when you reach the anchor OR the bottom of the page
      stopAnimation = () => {
        const travelled = window.pageYOffset;
        if ((travelled >= (endLocation - increments))
        || ((window.innerHeight + travelled) >= document.body.offsetHeight)) {
          clearInterval(runAnimation);
        }
      };
    } else {
      // If scrolling up
      // Stop animation when you reach the anchor OR the top of the page
      stopAnimation();
    }
  }

  window.app.smoothScrollView = {
    smoothScroll,
  };
}());
