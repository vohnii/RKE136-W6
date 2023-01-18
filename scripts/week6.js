const slides = document.getElementsByClassName('carousel__item');
const slidesTotal = slides.length;
const nextButton = document.querySelector('#carousel_button--next');
const prevButton = document.querySelector('#carousel_button--prev');

let slidePosition = 0;

nextButton.addEventListener('click', () => {

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === slidesTotal - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add('carousel__item--visible');

});


prevButton.addEventListener('click', () => {
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === 0) {
        slidePosition = slidesTotal - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add('carousel__item--visible');
});