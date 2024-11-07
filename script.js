// <!-- Optional JavaScript for Accordion -->

document.querySelectorAll(".accordion-title").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      button.classList.toggle("active");
      if (button.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
  
  // Scroll-to-top function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Show/hide scroll-to-top button based on scroll position
  window.onscroll = function () {
    const scrollTopBtn = document.querySelector(".scroll-top");
    if (document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  