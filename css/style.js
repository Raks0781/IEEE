window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card-animate');
    const triggerHeight = window.innerHeight / 1.3;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerHeight) {
            card.classList.add('appear');
        }
    });
});

// Basic carousel interaction
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});
carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});
carousel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
});