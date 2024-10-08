let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// Get the form, modal, and close button elements
const form = document.getElementById("myForm");
const modal = document.getElementById("feedbackModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally
  modal.style.display = "block"; // Show the modal

  // Clear the form fields
  form.reset();
});

// Close the modal when the user clicks the close button
closeBtn.onclick = function () {
  modal.style.display = "none";
  window.scrollTo(0, 0);
};

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.scrollTo(0, 0);
  }
};


menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "BasketBall Player", "Gamer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
