document.addEventListener("DOMContentLoaded", function () {
  // Current date information
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let selectedDate = null;

  // DOM Elements
  const monthYearElement = document.getElementById("current-month-year");
  const calendarDaysElement = document.getElementById("calendar-days");
  const selectedDateDisplay = document.getElementById("selected-date-display");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const bookingForm = document.getElementById("booking-form");

  // Month names for display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Initialize the calendar
  function initCalendar() {
    renderCalendar(currentMonth, currentYear);
    setupEventListeners();
  }

  // Set up event listeners
  function setupEventListeners() {
    prevBtn.addEventListener("click", () => {
      navigateMonth(-1);
    });

    nextBtn.addEventListener("click", () => {
      navigateMonth(1);
    });

    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!selectedDate) {
        alert("Please select a date first.");
        return;
      }

      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const email = document.getElementById("email").value;

      alert(
        `Booking submitted!\nName: ${name}\nPhone: ${number}\nEmail: ${email}\nDate: ${selectedDate.toDateString()}`
      );
    });
  }

  // Navigate to previous or next month
  function navigateMonth(direction) {
    currentMonth += direction;

    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }

    renderCalendar(currentMonth, currentYear);
  }

  // Render the calendar for the given month and year
  function renderCalendar(month, year) {
    // Update the month and year display
    monthYearElement.textContent = `${monthNames[month]} ${year}`;

    // Clear previous calendar days
    calendarDaysElement.innerHTML = "";

    // Get first day of month and number of days in month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get today's date for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Create empty day elements for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.classList.add("h-10");
      calendarDaysElement.appendChild(emptyDay);
    }

    // Create day elements for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add(
        "calendar-day",
        "text-center",
        "py-2",
        "rounded-sm",
        "fade-in"
      );

      // Create date object for this day
      const date = new Date(year, month, day);

      // Check if this day is in the past
      if (date < today) {
        dayElement.classList.add("passed");
      }

      // Check if this day is selected
      if (
        selectedDate &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear()
      ) {
        dayElement.classList.add("selected");
      }

      dayElement.textContent = day;

      // Add click event for future dates
      if (date >= today) {
        dayElement.addEventListener("click", () =>
          selectDate(date, dayElement)
        );
      }

      calendarDaysElement.appendChild(dayElement);
    }
  }

  // Handle date selection
  function selectDate(date, element) {
    // Remove selected class from previously selected date
    const previouslySelected = document.querySelector(".calendar-day.selected");
    if (previouslySelected) {
      previouslySelected.classList.remove("selected");
    }

    // Add selected class to the new selected date
    element.classList.add("selected");

    // Update selected date
    selectedDate = date;

    // Update the selected date display
    selectedDateDisplay.textContent = `Selected Date: ${date.toDateString()}`;
  }

  // Initialize the calendar
  initCalendar();
});
