'use strict';

const header = document.querySelector('header');
const sidebar = document.querySelector('.sidebar');
const bannerSection = document.querySelector('#hero-image');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeSidebarBtn = document.querySelector('.close-sidebar');
const scrollTop = document.querySelector('.scroll-top');


// -- Intersection Observer  -------------------------------------------------------------------

const options = {
    threshold: 1
};

const headerObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}, options);

const scrollObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            scrollTop.style.right = "3%";
        } else {
            scrollTop.style.right = "-30%";
        }

    });
}, options);

headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);


// -- Event Listeners -------------------------------------------------------------------

const openSidebar = () => {
    sidebar.style.right = "0";
};

const closeSidebar = () => {
    sidebar.style.right = "-100%";
};

scrollTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

hamburgerMenu.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);



// -- Swiper -------------------------------------------------------------------


const clientSwiper = new Swiper('#client-list', {

    loop: true,
    keyboard: true,
    spaceBetween: 10,
    slidesPerView: 7,
    centeredSlides: true,
    breakpoints: {
        100: {
            slidesPerView: 2
        },
        460: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 5
        },
        1260: {
            slidesPerView: 7
        }
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});

const instagramSwiper = new Swiper('#intagram-post-list', {

    loop: true,
    keyboard: true,
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides: true,

    breakpoints: {
        100: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});