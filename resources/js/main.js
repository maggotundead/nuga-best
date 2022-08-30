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
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    navigation: {
        prevEl: '.swiper-btn-prev',
        nextEl: '.swiper-btn-next',
    },
});

