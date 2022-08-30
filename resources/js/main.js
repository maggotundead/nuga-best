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