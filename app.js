// Get DOM elements
const burgerIcon = document.getElementById('burger-icon');
const dropdownMenuContainer = document.querySelector('.dropdown-menu-container');

// Toggle menu on burger icon click
burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    dropdownMenuContainer.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!burgerIcon.contains(event.target) && !dropdownMenuContainer.contains(event.target)) {
        burgerIcon.classList.remove('active');
        dropdownMenuContainer.classList.remove('active');
    }
});

// Close dropdown menu when scrolling
window.addEventListener('scroll', () => {
    if (dropdownMenuContainer.classList.contains('active')) {
        burgerIcon.classList.remove('active');
        dropdownMenuContainer.classList.remove('active');
    }
});