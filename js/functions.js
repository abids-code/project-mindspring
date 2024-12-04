// JavaScript to handle mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex"); // Make sure it displays flex when shown
    });
});



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

// Play/Pause functionality for video
const video = document.querySelector('video');
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

const video2 = document.getElementById('ai-bg');
video2.playbackRate = 0.5;