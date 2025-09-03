// Simple JavaScript for mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Tour Packages slider

// Newsletter slider
const carousel = document.getElementById("carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
let autoSlide;

function getCardsPerView() {
  if (window.innerWidth >= 1024) return 4; // large screens
  if (window.innerWidth >= 640) return 2; // medium screens
  return 1; // small screens
}

function updateCarousel() {
  const cardWidth = carousel.querySelector("div").offsetWidth;
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {
  if (index < carousel.children.length - getCardsPerView()) {
    index++;
  } else {
    index = 0; // loop back
  }
  updateCarousel();
}

function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = carousel.children.length - getCardsPerView();
  }
  updateCarousel();
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3000); // every 3 sec
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Auto slide with hover pause
carousel.parentElement.addEventListener("mouseenter", stopAutoSlide);
carousel.parentElement.addEventListener("mouseleave", startAutoSlide);

window.addEventListener("resize", updateCarousel);

// Init
updateCarousel();
startAutoSlide();
