document.addEventListener("DOMContentLoaded", () => {
    const researchCards = [
        document.getElementById("research1"),
        document.getElementById("research2"),
        document.getElementById("research3"),
        document.getElementById("research4"),
        document.getElementById("research5"),
        document.getElementById("research6"),
    ];
    const researchHeading = document.getElementById("research-heading");

    const animateOnScroll = (element, delay = 0) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            setTimeout(() => {
                element.classList.add("opacity-100");
            }, delay);
        }
    };

    // Scroll Listener
    window.addEventListener("scroll", () => {
        animateOnScroll(researchHeading, 0);
        researchCards.forEach((card, index) => {
            animateOnScroll(card, index * 300);
        });
    });
});
