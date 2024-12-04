document.addEventListener("DOMContentLoaded", () => {
    const products = [
        document.getElementById("product1"),
        document.getElementById("product2"),
        document.getElementById("product3"),
        document.getElementById("product4")
    ];
    const heading = document.getElementById("product-heading");
    const description = document.getElementById("product-description");

    const animateOnScroll = (element, delay = 0) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            setTimeout(() => {
                element.classList.add("opacity-100");
            }, delay);
        }
    };

    // Listen to scroll events
    window.addEventListener("scroll", () => {
        animateOnScroll(heading, 0);
        animateOnScroll(description, 200);
        products.forEach((product, index) => {
            animateOnScroll(product, index * 300);
        });
    });
});
