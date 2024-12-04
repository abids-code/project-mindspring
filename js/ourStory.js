// Function to trigger animations when the section is in view
function animateOnScroll() {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    
    const observerOptions = {
        root: null, // Default is the viewport
        threshold: 0.5 // Trigger animation when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adding animation classes when the element is in view
                entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10');
                entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
                observer.unobserve(entry.target); // Stop observing once animation is done
            }
        });
    }, observerOptions);

    // Observe the elements
    observer.observe(storyText);
    observer.observe(storyImage);
}

// Initialize the scroll animation
animateOnScroll();
