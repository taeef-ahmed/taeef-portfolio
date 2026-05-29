// Changing text animation (typing effect synced per word)
const texts = [
  "Frontend Developer",
  "Web Developer",
  "Student",
  "Learning Ethical Hacking"
];
let textIndex = 0;
const changingText = document.getElementById("changing-text");

function updateText() {
  changingText.textContent = texts[textIndex];
  changingText.style.setProperty("--len", texts[textIndex].length + "ch");
  // restart animation
  changingText.style.animation = "none";
  void changingText.offsetWidth;
  changingText.style.animation = "";
}
updateText();
setInterval(() => {
  textIndex = (textIndex + 1) % texts.length;
  updateText();
}, 2000);

// Mobile menu toggle
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  menu.classList.toggle("bx-menu");
  navbar.classList.toggle("active");
});

// Scroll: sticky header + active nav link + section animation + close menu
const header = document.getElementById("header");
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const top = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      sec.classList.add("start-animation");
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });

  // Sticky header
  header.classList.toggle("sticky", window.scrollY > 100);

  // Close mobile menu on scroll
  menu.classList.remove("bx-x");
  menu.classList.add("bx-menu");
  navbar.classList.remove("active");
});
