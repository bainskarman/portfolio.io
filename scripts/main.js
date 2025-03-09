// Main JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Add any initial JavaScript here
});

// Animate counters
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Animation speed in milliseconds

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;

        const updateCount = () => {
            const count = +counter.innerText.replace('+', '');
            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + '+';
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + '+';
            }
        };

        updateCount();
    });
});