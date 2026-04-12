document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Handle Dropdowns on Mobile
    document.querySelectorAll('.nav-links > li > a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const dropdown = this.nextElementSibling;
                
                // If this link has a dropdown
                if (dropdown && dropdown.classList.contains('dropdown')) {
                    // If the dropdown is NOT already open, prevent the click and open it
                    if (!dropdown.classList.contains('active-dropdown')) {
                        e.preventDefault();
                        // Close other open dropdowns first (optional but cleaner)
                        document.querySelectorAll('.active-dropdown').forEach(openDropdown => {
                            openDropdown.classList.remove('active-dropdown');
                        });
                        dropdown.classList.add('active-dropdown');
                    } 
                    // If it IS already open, the second tap will naturally follow the link!
                }
            }
        });
    });
});