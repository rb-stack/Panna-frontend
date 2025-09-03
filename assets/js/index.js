// Simple JavaScript for mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Newsletter slider
document.addEventListener("DOMContentLoaded", function () {
  // Sample card data
  const cardData = [
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
                        <h3 class="font-bold text-lg mb-2 text-gray-800">${data.title}</h3>
                        <p class="text-gray-600 text-sm mb-4">${data.description}</p>
                        <div>
                            <button class="text-gray-800 py-2 rounded-lg hover:text-gray-700 transition-colors">
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
