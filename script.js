/**
 * FitWatch Landing Page Script
 * -----------------------------------------
 * This script handles all the interactive parts of the FitWatch website.
 * I've tried to keep it simple and easy to understand.
 */

document.addEventListener('DOMContentLoaded', function() {

    // --- SECTION 1: MOBILE NAVIGATION ---
    // We need to make the hamburger menu work on mobile phones.
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Check if the menu is already open or not
            navMenu.classList.toggle('nav-active');
            hamburger.classList.toggle('is-open');
        });
    }

    // Make sure the menu closes when a link is clicked
    // This is important so the menu doesn't stay open after navigation
    var navLinks = document.querySelectorAll('#nav ul li a');
    
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            navMenu.classList.remove('nav-active');
            hamburger.classList.remove('is-open');
        });
    }


    // --- SECTION 2: PRICING TOGGLE ---
    // This part handles switching between Monthly and Yearly pricing.
    var priceSwitch = document.getElementById('price-toggle');
    var basicPriceText = document.getElementById('basic-price');
    var premiumPriceText = document.getElementById('premium-price');
    var monthlyLabel = document.getElementById('monthly-label');
    var yearlyLabel = document.getElementById('yearly-label');

    var isYearlyPlan = false;

    if (priceSwitch) {
        priceSwitch.addEventListener('click', function() {
            // Toggle the boolean flag
            isYearlyPlan = !isYearlyPlan;
            
            // Update the UI classes for the toggle button and labels
            priceSwitch.classList.toggle('active');
            monthlyLabel.classList.toggle('active');
            yearlyLabel.classList.toggle('active');

            // Update the actual price numbers
            if (isYearlyPlan == true) {
                // These are the yearly rates
                basicPriceText.textContent = "199";
                premiumPriceText.textContent = "299";
            } else {
                // These are the monthly rates
                basicPriceText.textContent = "19";
                premiumPriceText.textContent = "29";
            }
        });
    }


    // --- SECTION 3: EMAIL VALIDATION ---
    // Simple check to see if the user entered a valid email in the newsletter form.
    var newsletterForm = document.getElementById('newsletter-form');
    var emailInput = document.getElementById('email-field');
    var resultMsg = document.getElementById('msg');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            // Stop the form from submitting normally
            e.preventDefault();
            
            var emailValue = emailInput.value;
            
            // Regex for basic email validation
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(emailValue)) {
                // Show success message
                resultMsg.textContent = "Thanks for subscribing! We will keep you updated.";
                resultMsg.style.color = "#22C55E";
                
                // Clear the input
                emailInput.value = "";
            } else {
                // Show error message if email is invalid
                resultMsg.textContent = "Please enter a valid email address.";
                resultMsg.style.color = "#FF4B4B";
            }
        });
    }

});
