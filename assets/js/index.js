// Simple JavaScript for mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("menu-overlay");

  mobileMenu.classList.toggle("menu-open");
  overlay.classList.toggle("active");

  // Prevent body scrolling when menu is open
  if (mobileMenu.classList.contains("menu-open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function closeMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("menu-overlay");

  mobileMenu.classList.remove("menu-open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close menu when pressing Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Tour packages slider
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("tour-carousel");
  const cards = document.querySelectorAll(".tour-card");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const indicatorsContainer = document.getElementById("carousel-indicators");

  const cardWidth = cards[0].offsetWidth + 32; // width + margin
  let currentPosition = 0;
  let autoScrollInterval;
  const visibleCards = () =>
    window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
  const totalCards = cards.length;
  const totalSlides = Math.ceil(totalCards / visibleCards());

  // Create indicators
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add(
      "h-2",
      "w-8",
      "rounded-full",
      "cursor-pointer",
      "transition-all"
    );
    indicator.dataset.slide = i;
    if (i === 0) {
      indicator.classList.add("bg-blue-500");
    } else {
      indicator.classList.add("bg-gray-300");
    }
    indicatorsContainer.appendChild(indicator);
  }

  const indicators = document.querySelectorAll("#carousel-indicators > div");

  // Update indicators
  function updateIndicators() {
    const currentSlide =
      Math.abs(currentPosition) / (cardWidth * visibleCards());
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.remove("bg-gray-300");
        indicator.classList.add("bg-blue-500");
      } else {
        indicator.classList.remove("bg-blue-500");
        indicator.classList.add("bg-gray-300");
      }
    });
  }

  // Move carousel
  function moveCarousel() {
    carousel.style.transform = `translateX(${currentPosition}px)`;
    updateIndicators();
  }

  // Next slide
  function nextSlide() {
    if (currentPosition > -(cardWidth * (totalCards - visibleCards()))) {
      currentPosition -= cardWidth * visibleCards();
    } else {
      currentPosition = 0;
    }
    moveCarousel();
  }

  // Previous slide
  function prevSlide() {
    if (currentPosition < 0) {
      currentPosition += cardWidth * visibleCards();
    } else {
      currentPosition = -(cardWidth * (totalCards - visibleCards()));
    }
    moveCarousel();
  }

  // Event listeners for buttons
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoScroll();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoScroll();
  });

  // Event listeners for indicators
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const slideIndex = parseInt(indicator.dataset.slide);
      currentPosition = -(slideIndex * cardWidth * visibleCards());
      moveCarousel();
      resetAutoScroll();
    });
  });

  // Auto scroll
  function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
  }

  // Handle responsive behavior
  function handleResize() {
    const newVisibleCards = visibleCards();
    cardWidth = cards[0].offsetWidth + 32;

    // Adjust current position to the nearest valid position
    const maxPosition = -(cardWidth * (totalCards - newVisibleCards));
    if (currentPosition < maxPosition) {
      currentPosition = maxPosition;
    }

    moveCarousel();
    resetAutoScroll();
  }

  window.addEventListener("resize", handleResize);

  // Initialize
  startAutoScroll();
});

// Newsletter slider
document.addEventListener("DOMContentLoaded", function () {
  // Sample card data
  const cardData = [
    {
      title: "An Exciting Pench and Tadoba Wildlife Safari Tour in 4N 5D",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog1.jpg",
    },
    {
      title: "4 Nights 5 Days Pench and Kanha Safari Tour with Itinerary",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog2.jpg",
    },
    {
      title: "How Many Jeep Safaris are in a 2-night & 3-day Pench Tour?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog3.jpg",
    },
    {
      title: "1 Night 2 Days Pench National Park Jeep Safari Tour Package",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog4.jpg",
    },
    {
      title: "Blog 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog5.jpg",
    },
    {
      title: "Blog 6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog6.jpg",
    },
    {
      title: "Blog 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog1.jpg",
    },
    {
      title: "Blog 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog2.jpg",
    },
    {
      title: "Blog 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog3.jpg",
    },
    {
      title: "Blog 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog4.jpg",
    },
    {
      title: "Blog 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog5.jpg",
    },
    {
      title: "Blog 6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "../assets/images/newsblog6.jpg",
    },
  ];

  const carousel = document.getElementById("carousel");
  const indicators = document.getElementById("indicators");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  let cardsPerView = calculateCardsPerView();

  // Generate cards
  cardData.forEach((data, index) => {
    const card = document.createElement("div");
    card.className =
      "carousel-card bg-white rounded-xl shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-2";
    card.innerHTML = `
                    <div class="h-48 overflow-hidden">
                        <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold mb-2 text-gray-800">${data.title}</h3>
                        <p class="text-gray-400 text-sm mb-4" style="color: #575757 !important">${data.description}</p>
                        <div>
                            <button class="text-gray-800 py-2 rounded-lg hover:text-gray-700 transition-colors bg-[#287028] text-white py-2 px-4 font-bold">
                            <a href="#Newsletter-section">Read Article</a>
                            </button>
                        </div>
                    </div>
                `;
    carousel.appendChild(card);
  });

  // Calculate how many cards to show based on screen width
  function calculateCardsPerView() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  }

  // Create indicator dots
  function createIndicators() {
    indicators.innerHTML = "";
    const totalIndicators = Math.ceil(cardData.length / cardsPerView);

    for (let i = 0; i < totalIndicators; i++) {
      const indicator = document.createElement("button");
      indicator.className = `w-3 h-3 rounded-full ${
        i === 0 ? "bg-blue-600" : "bg-gray-300"
      }`;
      indicator.addEventListener("click", () => {
        goToSlide(i);
      });
      indicators.appendChild(indicator);
    }
  }

  // Update carousel position
  function updateCarousel() {
    const cardWidth = document.querySelector(".carousel-card").offsetWidth + 16; // card width + gap
    carousel.style.transform = `translateX(-${
      currentIndex * cardWidth * cardsPerView
    }px)`;

    // Update indicators
    document.querySelectorAll("#indicators button").forEach((indicator, i) => {
      indicator.className = `w-3 h-3 rounded-full ${
        i === currentIndex ? "bg-blue-600" : "bg-gray-300"
      }`;
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    const maxIndex = Math.ceil(cardData.length / cardsPerView) - 1;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
  }

  // Next slide
  function nextSlide() {
    const maxIndex = Math.ceil(cardData.length / cardsPerView) - 1;
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  // Previous slide
  function prevSlide() {
    const maxIndex = Math.ceil(cardData.length / cardsPerView) - 1;
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex;
    }
    updateCarousel();
  }

  // Event listeners
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Handle window resize
  window.addEventListener("resize", () => {
    cardsPerView = calculateCardsPerView();
    createIndicators();
    updateCarousel();
  });

  // Initialize
  createIndicators();
  updateCarousel();

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
});
