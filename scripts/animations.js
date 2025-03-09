// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.banner h1', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power2.out'
});

gsap.from('.banner h2', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power2.out',
    delay: 0.5
});

gsap.from('.social-links a', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power2.out',
    delay: 1,
    stagger: 0.2
});

gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.project-card',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});