// JavaScript for responsive toggle menu for smaller screens
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
