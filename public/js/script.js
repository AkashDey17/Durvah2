const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
//swiper js
new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

/*pop up form*/
// Get references to the popup form, dark overlay, and buttons
const popupForm = document.querySelector(".section8-form");
const darkOverlay = document.getElementById("darkOverlay");
const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn"); // Get the close button

// Function to open the popup form
function openForm() {
  popupForm.style.display = "flex"; // Show the form
  darkOverlay.style.display = "block"; // Show the dark overlay
}

// Function to close the popup form
function closeForm() {
  popupForm.style.display = "none"; // Hide the form
  darkOverlay.style.display = "none"; // Hide the dark overlay
}

// Add event listener to the open button
openPopupBtn.addEventListener("click", openForm);

// Close the form when clicking on the dark overlay
darkOverlay.addEventListener("click", closeForm);

// Close the form when clicking on the close button
closePopupBtn.addEventListener("click", closeForm);

// Ensure the popup is hidden on page load
document.addEventListener("DOMContentLoaded", () => {
  popupForm.style.display = "none"; // Ensures the form is hidden when the page loads
  darkOverlay.style.display = "none"; // Ensures the overlay is hidden when the page loads
});

/*pre loader starts */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
/**pre loader ends */
