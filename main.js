document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all tabs
            navLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            link.classList.add('active');
            const target = document.querySelector(link.getAttribute('href'));
            target.classList.add('active');
        });
    });

    // Show the first tab by default
    navLinks[0].classList.add('active');
    tabContents[0].classList.add('active');
});
//aas
