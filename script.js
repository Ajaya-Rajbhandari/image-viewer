// script.js
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
        },
    });
});
document.querySelectorAll('.swiper-slide img').forEach(img => {
    img.addEventListener('click', function() {
        if (img.requestFullscreen) {
            img.requestFullscreen();
        } else if (img.mozRequestFullScreen) { // Firefox
            img.mozRequestFullScreen();
        } else if (img.webkitRequestFullscreen) { // Chrome, Safari and Opera
            img.webkitRequestFullscreen();
        } else if (img.msRequestFullscreen) { // IE/Edge
            img.msRequestFullscreen();
        }
    });
});
