const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("responsive");
});

// Smooth scrolling
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (navItem) {
  navItem.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(navItem.getAttribute("href"));
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
