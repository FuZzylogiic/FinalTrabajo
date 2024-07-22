let index = 0;

const showSlide = (n) => {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (n >= totalSlides) {
        index = 0;
    } else if (n < 0) {
        index = totalSlides - 1;
    } else {
        index = n;
    }

    const newTransformValue = -index * 100 + '%';
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue})`;
};

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    showSlide(index - 1);
});

document.querySelector('.carousel-button.next').addEventListener('click', () => {
    showSlide(index + 1);
});