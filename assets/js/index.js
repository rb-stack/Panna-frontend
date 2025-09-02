// Simple JavaScript for mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("tour-slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentSlide = 0;
  let slidesPerView = calculateSlidesPerView();

  // Calculate how many slides to show based on screen width
  function calculateSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  // Update slider position
  function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 32; // width + margin
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  // Go to specific slide
  function goToSlide(n) {
    currentSlide = n;
    if (currentSlide >= slides.length - slidesPerView + 1) {
      currentSlide = slides.length - slidesPerView;
    }
    if (currentSlide < 0) currentSlide = 0;
    updateSlider();
  }

  // Next slide
  function nextSlide() {
    if (currentSlide >= slides.length - slidesPerView) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    updateSlider();
  }

  // Previous slide
  function prevSlide() {
    if (currentSlide <= 0) {
      currentSlide = slides.length - slidesPerView;
    } else {
      currentSlide--;
    }
    updateSlider();
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Handle window resize
  window.addEventListener("resize", () => {
    slidesPerView = calculateSlidesPerView();
    updateSlider();
  });

  // Initialize slider
  updateSlider();
});
