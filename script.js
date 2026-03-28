$(document).ready(function(){
    $(".slider").bxSlider({
        minSlides: 2,
        maxSlides: 4, // Уменьшил до 4, чтобы карточки были крупнее и красивее
        slideWidth: 240,
        slideMargin: 20,
        moveSlides: 1,
        infiniteLoop: true,
        pager: false,
        nextText: '<i class="fa-solid fa-chevron-right"></i>',
        prevText: '<i class="fa-solid fa-chevron-left"></i>'
    });
});