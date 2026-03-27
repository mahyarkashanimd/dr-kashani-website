document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // 1. Handle Hamburger Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Handle "Services" Dropdown Toggle on Mobile
const servicesLink = document.querySelector('.nav-links > li > a[href="/services"], .nav-links > li > a[href="services.html"]');
    
    if (servicesLink) {
        servicesLink.addEventListener('click', function(e) {
            // Only run this logic on mobile screens
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Stop the page from navigating immediately
                const dropdown = this.nextElementSibling;
                if (dropdown) {
                    dropdown.classList.toggle('active-dropdown');
                }
            }
        });
    }
});