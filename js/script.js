// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const bodyEl = document.querySelector(".body");

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("nav-open");
});

// Scroll behavior for all browser
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile nav
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
