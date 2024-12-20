// script.js

// Reveal sections as you scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });
  
  // Initial setup for sections other than landing
  document.querySelectorAll("section").forEach((section, index) => {
    if (index !== 0) {
      section.style.opacity = 0;
      section.style.transform = "translateY(50px)";
    }
  });
  