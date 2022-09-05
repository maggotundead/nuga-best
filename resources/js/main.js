const scrollbarSwiper = new Swiper('.js-scrollbar-swiper', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        // hide: true,
        draggable: true,
    },
    mousewheel: {
        forceToAxis: true,
    },
    // slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    navigation: {
        prevEl: '.swiper-btn-prev',
        nextEl: '.swiper-btn-next',
    },
});

const tabsGroup = document.querySelectorAll('.tabs');
if (tabsGroup) {
    tabsGroup.forEach(tabsGroup => {
        let tabSelectors = tabsGroup.querySelector('.tab-selectors');
        let tabButton = tabSelectors.querySelectorAll('.tab-selector');
        let tabs = tabsGroup.querySelectorAll('.tab');

        tabButton.forEach( ( btn, i ) => {
            btn.setAttribute('index', i);
            btn.onclick = function() {
                for (let i = 0; i < tabButton.length; i++) {
                    tabButton[i].classList.remove('active');
                }
                this.className = 'tab-selector active';
                let index = this.getAttribute('index');
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('active');
                }
                tabs[i].classList.add('active');
            }
        });
    });
}

const topProductsSwiperMobile = new Swiper('.js-top-products-swiper-mobile', {
    slidesPerView: 'auto',
    loop: false,
    draggable: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        // hide: true,
        draggable: true,
    },
});

// modals
const modalCallbackOpener = document.querySelectorAll('[js-modal-callback-btn]');
const modalOverlay = document.querySelectorAll('.modal-overlay');
const modalClose = document.querySelectorAll('.modal-close');

const modalCallback = document.querySelector('.modal-callback');

modalCallbackOpener.forEach(btn => {
    btn.addEventListener('click', () => {
        modalCallback.classList.add('active');
    });
});
modalOverlay.forEach( bg => {
    bg.addEventListener('click', () => {
        bg.closest('.modal').classList.remove('active');
    });
});
modalClose.forEach( btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').classList.remove('active');
    });
});

// end modals

// header mobile
const header = document.querySelector('header');

header.querySelector('.burger-btn').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mobile-menu-open');
});

const mobileMenuDropdownToggler = header.querySelectorAll('.js-mobile-dropdown-toggler');
mobileMenuDropdownToggler.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        btn.classList.toggle('active');
    });
});

const mobileSearchOpener = header.querySelector('.js-mobile-search-opener');
const mobileSearchCloser = header.querySelector('.js-mobile-search-closer');
const mobileSearch = header.querySelector('.search');
mobileSearchOpener.addEventListener('click', () => {
    mobileSearch.classList.add('active');
});
mobileSearchCloser.addEventListener('click', (e) => {
    e.preventDefault();
    mobileSearch.classList.remove('active');
});
// end header mobile

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// vacancies
const blockVacancies = document.querySelector('.block-vacancies');
if (blockVacancies) {
    const vacancyToggler = blockVacancies.querySelectorAll('.vacancy-toggler');

    vacancyToggler.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.vacancy').classList.toggle('opened');
        });
    });
}
// end vacancies
