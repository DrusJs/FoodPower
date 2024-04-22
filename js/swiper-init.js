var mainBannerSwiper = new Swiper('#mainBannerSwiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
})

var mainLinkSwiper = new Swiper('#mainLinkSwiper', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      877: {        
        centeredSlides: true,
      },
    },
})