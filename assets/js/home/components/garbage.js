// garbage.js
// __________________________________________________

// Function
const numbersSwiper = () => {
    if (window.innerWidth <= 600) {
        const swiper = new Swiper(".js--numbers-swiper", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            }
          });
    }
}

// Export
// __________________________________________________

export default numbersSwiper; 