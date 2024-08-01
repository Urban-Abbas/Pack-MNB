//--------------------header--------------------//


function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

//------------------slidere-------------------------- //

    document.addEventListener('DOMContentLoaded', () => {
        let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            showSlide(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            showSlide(currentIndex);
        });

        setInterval(() => {
            nextButton.click();
        }, 10000);

        showSlide(currentIndex);
    });




