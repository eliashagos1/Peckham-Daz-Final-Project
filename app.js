// Get DOM elements
const burgerIcon = document.getElementById('burger-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle menu on burger icon click
burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!burgerIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        burgerIcon.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }
});

// Close dropdown menu when scrolling
window.addEventListener('scroll', () => {
    if (dropdownMenu.classList.contains('active')) {
        burgerIcon.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }
});