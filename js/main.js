'use strict';

const header = document.querySelector('header');
const sidebar = document.querySelector('.sidebar');
const fadeIns = document.querySelectorAll('.fade-in');
const scrollTop = document.querySelector('.scroll-top');
const bannerSection = document.querySelector('#hero-image');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeSidebarBtn = document.querySelector('.close-sidebar');


// -- Intersection Observer  -------------------------------------------------------------------


const options = {
	threshold: 1
};

const appearOptions = {
	threshold: 0.8,
	rootMargin: '-100px 0px -100px 0px'
};

const headerObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky'));
}, options);

const scrollObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => !entry.isIntersecting ? scrollTop.style.right = "3%" : scrollTop.style.right = "-30%");
}, options);

let appearObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearObserver.unobserve(entry.target);
		}
	});
}, appearOptions);

headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);

fadeIns.forEach(fadeIn => {
	appearObserver.observe(fadeIn);
});


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