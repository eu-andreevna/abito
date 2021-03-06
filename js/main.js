var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 4
        }
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-panel');
const menuCloseBtn = document.querySelector('.close-menu');

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("is-open");
})
menuCloseBtn.addEventListener("click", () => {
    menu.classList.toggle("is-open");
})