// JavaScript for animations
document.addEventListener("DOMContentLoaded", () => {
    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    };

    // Apply animation to all elements with the class "animate-on-scroll"
    const animateElements = document.querySelectorAll(".animate-on-scroll");
    const handleScroll = () => {
        animateElements.forEach((el) => {
            if (isInViewport(el)) {
                el.classList.add("fade-in");
            }
        });
    };

    // Trigger animations on scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load
});