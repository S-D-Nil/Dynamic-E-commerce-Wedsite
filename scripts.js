document.addEventListener("DOMContentLoaded", function () {
    // Welcome message displayed when the page is loaded

    alert(
        "Welcome to King's S.D. Created by S.D.Nil. Feel free to DM in @_s.d.nil_ for any question."
    );

    // Order button functionality

    const orderButtons = document.querySelectorAll(".order-btn"); // Select all elements with the class 'order-btn'

    orderButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Create an animation element for visual feedback

            const orderAnimation = document.createElement("div");

            orderAnimation.classList.add("order-animation"); // Add the animation class for styling

            button.parentElement.appendChild(orderAnimation); // Append the animation element to the parent of the button

            // Remove the animation and display a confirmation message after 2 seconds

            setTimeout(() => {
                alert("Thank you for your order! We're processing it now.");

                orderAnimation.remove(); // Clean up the animation element
            }, 2000); // Match this duration with the CSS animation duration
        });
    });

    // Navigation functionality

    const sections = document.querySelectorAll("section"); // Select all section elements

    const navLinks = document.querySelectorAll("nav ul li a"); // Select all navigation links

    function showSection(id) {
        // Hide all sections

        sections.forEach((section) => section.classList.remove("active"));

        const targetSection = document.querySelector(id); // Get the section by the provided ID

        if (targetSection) {
            targetSection.classList.add("active"); // Display the target section
        }
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior

            const target = link.getAttribute("href"); // Get the target section ID from the link

            showSection(target); // Show the selected section
        });
    });

    // Show the home section by default when the page loads

    showSection("#home");

    // Slider functionality

    const slides = document.querySelector(".slides"); // Select the slides container

    const images = slides.querySelectorAll("img"); // Get all images inside the slides container

    const slideCount = images.length; // Count the number of images

    let currentIndex = 0; // Track the current slide index

    function updateSlider() {
        const imageWidth = images[0].clientWidth; // Dynamically calculate the width of an image

        const offset = -currentIndex * imageWidth; // Calculate the offset for the current slide

        slides.style.transform = `translateX(${offset}px)`; // Update the transform property to slide

        currentIndex = (currentIndex + 1) % slideCount; // Move to the next slide, looping back to the start
    }

    // Dynamically set the width of the slides container based on the number of images

    slides.style.width = `${images[0].clientWidth * slideCount}px`;

    // Start the slider with an interval of 4 seconds

    setInterval(updateSlider, 4000);
});

// Select the elements for the search bar

const searchIcon = document.querySelector(".search-icon"); // Search icon

const closeIcon = document.querySelector(".close-icon"); // Close icon

const searchBox = document.querySelector(".search-box"); // Search box

const searchInput = document.querySelector(".search-box input"); // Search input field

// Function to reset product visibility

function resetProductVisibility() {
    const products = document.querySelectorAll(".product-card"); // Select all product cards

    products.forEach((product) => {
        product.style.display = "block"; // Show all products
    });
}

// Expand the search bar when the search icon is clicked

searchIcon.addEventListener("click", () => {
    searchBox.classList.add("active"); // Add the 'active' class for expansion

    searchInput.focus(); // Focus on the input field

    searchIcon.style.display = "none"; // Hide the search icon

    closeIcon.style.display = "block"; // Show the close icon
});

// Collapse the search bar when the close icon is clicked

closeIcon.addEventListener("click", () => {
    searchBox.classList.remove("active"); // Remove the 'active' class to collapse

    searchInput.value = ""; // Clear the input field

    searchInput.blur(); // Remove focus from the input field

    closeIcon.style.display = "none"; // Hide the close icon

    searchIcon.style.display = "block"; // Show the search icon

    resetProductVisibility(); // Reset product visibility
});

// Filter products when the Enter key is pressed

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        // Check if the Enter key is pressed

        const query = searchInput.value.toLowerCase().trim(); // Get the input value

        const products = document.querySelectorAll(".product-card"); // Select all product cards

        // Filter products based on the query

        products.forEach((product) => {
            const productName = product.textContent.toLowerCase();

            if (productName.includes(query)) {
                product.style.display = "block"; // Show matching product
            } else {
                product.style.display = "none"; // Hide non-matching product
            }
        });
    }
});

// function of light theme set up from settings menu
let clickCount = 0;

let originalBackground = ""; // Store the original background

function lightTheme() {
    const el = document.body;

    const headtexts = document.querySelectorAll("#headtext");

    const pTexts = document.querySelectorAll("#paragraphtext");

    // Store the original background on first click

    if (clickCount === 0) {
        originalBackground =
            el.style.backgroundImage ||
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%230C00CE' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='5.4' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999'/%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999'/%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999'/%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999'/%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999'/%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999'/%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(97.2 0 0)' %3E%3Ccircle fill='%230C00CE' r='10'/%3E%3Cg transform='rotate(-123 0 0)'%3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(.2) rotate(100 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform='rotate(-6.6 0 0)'%3E%3Cuse href='%23b' transform='scale(.4) rotate(200 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform='rotate(55.35 0 0)'%3E%3Cg transform='rotate(60.75 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform='rotate(29.7 0 0)'%3E%3Cg transform='rotate(36.45 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-72.9 0 0)'%3E%3Cg transform='rotate(-55.35 0 0)'%3E%3Cg transform='rotate(-39.6 0 0)'%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(45 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";
    }

    clickCount++;

    if (clickCount % 2 === 1) {
        // First click - apply light theme

        el.style.backgroundColor = "white";

        el.style.backgroundImage = "none";

        // Change all headtext elements to black

        headtexts.forEach((headtext) => {
            headtext.style.color = "black";
        });

        // Change all paragraphtext elements to black

        pTexts.forEach((pText) => {
            pText.style.color = "black";
        });
    } else {
        // Second click - revert to original theme

        el.style.backgroundColor = "#000000";

        el.style.backgroundImage = originalBackground;

        // Change all headtext elements back to white

        headtexts.forEach((headtext) => {
            headtext.style.color = "#fff";
        });

        // Change all paragraphtext elements back to yellow

        pTexts.forEach((pText) => {
            pText.style.color = "yellow";
        });
    }
}
// Menu slid bar
// ===== SLIDE MENU FUNCTIONALITY ===== //
// Create and append menu overlay
const menuOverlay = document.createElement('div');
menuOverlay.className = 'menu-overlay';
document.body.appendChild(menuOverlay);

// Get menu elements
const menuToggle = document.querySelector('.menu-toggle');
const slideMenu = document.querySelector('.slide-menu');

// Toggle menu visibility
menuToggle.addEventListener('click', function () {
    slideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

// Close menu when clicking overlay
menuOverlay.addEventListener('click', function () {
    slideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
});

// Handle menu link clicks by triggering original nav clicks
document.querySelectorAll('.slide-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');

        // Find matching nav link and simulate click
        document.querySelectorAll('nav ul li a').forEach(navLink => {
            if (navLink.getAttribute('href') === target) {
                navLink.click();
            }
        });

        // Close menu
        slideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
})
