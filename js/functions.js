
// Auto-slideshow functionality
const carousel = document.querySelector('.carousel');
let index = 0;

setInterval(() => {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`;
    });
    index = (index + 1) % items.length; // Loop through the slides
}, 3000); // Change slide every 3 seconds