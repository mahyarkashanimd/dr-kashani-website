document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 1. Handle Hamburger Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Handle ALL dropdowns on mobile (Services, Patient Education, any future ones)
    document.querySelectorAll('.nav-links > li > a').forEach(function(link) {
        const dropdown = link.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown')) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active-dropdown');
                }
            });
        }
    });
});