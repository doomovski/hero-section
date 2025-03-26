const leftButton = document.querySelector('.get-left');
const rightButton = document.querySelector('.get-right');
const row = document.querySelector('.row');
const testimonials = document.querySelectorAll('.testimonial');
const likeButtons = document.querySelectorAll('.like-button');
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('nav ul');
const headerButtons = document.querySelector('.header-button');

// Обозначение сдвига
let testimonialWidth = testimonials.length > 0 ? testimonials[0].offsetWidth + 44 : 0;
let currentPosition = 0;
const maxPosition = -(testimonials.length - 2) * testimonialWidth;

window.addEventListener('resize', () => {
    testimonialWidth = testimonials.length > 0 ? testimonials[0].offsetWidth + 20 : 0;
});
//Функционал кнопок лево\права
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
// Отлик кнопки лайка
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('inverted');
    });
});

// Бургер-меню
burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    headerButtons.classList.toggle('active');
    burger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});
