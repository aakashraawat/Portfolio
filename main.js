// JavaScript for responsive toggle menu for smaller screens
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

// Toggle display of detailed content
function toggleDetails(id) {
    var content = document.getElementById(id);
    content.classList.toggle('show');
}

// Add event listeners after the document has loaded
document.addEventListener('DOMContentLoaded', function() {
    var expandableSections = document.querySelectorAll('.expandable');
    expandableSections.forEach(section => {
        section.addEventListener('click', function() {
            toggleDetails(this.dataset.target);
        });
    });
});
