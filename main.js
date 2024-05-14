// JavaScript for responsive toggle menu for smaller screens
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Toggle display of detailed content
function toggleDetails(id) {
    var content = document.getElementById(id);
    if (content.style.display === 'block' || content.style.display === '') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
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
