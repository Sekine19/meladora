const bannerSwiper = new Swiper('.banner-swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    spaceBetween: 50,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

})


const gardenSwiper = new Swiper('.garden-swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    spaceBetween: 50,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

})

const blogsSwiper = new Swiper('.blogs-swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    spaceBetween: 50,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

})


const modalSwiper = new Swiper('.modal-swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    spaceBetween: 50,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

})



