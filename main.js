const leftButton = document.querySelector('.get-left'); 
const rightButton = document.querySelector('.get-right'); 
const row = document.querySelector('.row');
const testimonials = document.querySelectorAll('.testimonial');
const likeButtons = document.querySelectorAll('.like-button'); 
const testimonialWidth = testimonials[0].offsetWidth + 20; 
let currentPosition = 0;
const maxPosition = -(testimonials.length - 2) * testimonialWidth;

leftButton.addEventListener('click', () => {
    if (currentPosition > maxPosition) {
        currentPosition -= testimonialWidth;
        row.style.transform = `translateX(${currentPosition}px)`;
    }
});

rightButton.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += testimonialWidth;
        row.style.transform = `translateX(${currentPosition}px)`;
    }
});

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('inverted'); 
    });
});