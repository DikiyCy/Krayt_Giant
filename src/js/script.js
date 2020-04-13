'use strict'

window.addEventListener('DOMContentLoaded', function() {

// -------popap for video--------
    const play = document.querySelector('.video__play'),
    video = document.querySelector('.video-hidden'),
    videoClose = document.querySelector('.video_close');

    play.addEventListener('click', function() {
        video.classList.remove('hidden');
    });
    videoClose.addEventListener('click', function() {
        video.classList.add('hidden');
    });


// -------popap for text from "functions"-------

    $('.functions-catalog__item').on('click', function() {
        $(this).find('.functions-catalog_hidden').toggleClass('hidden');
    });

    $('.functions-catalog_close').each(function() {
        $('.functions-catalog_hidden').fadeOut('fast');
    });

//--------slider-------------
    let addrImg = [
        'img/section_4_slider/img_0.png',
        'img/section_4_slider/img_1.png',
        'img/section_4_slider/img_2.png',
        'img/section_4_slider/img_3.png',
        'img/section_4_slider/img_4.png',
        'img/section_4_slider/img_5.png',
        'img/section_4_slider/img_6.png'
    ];

// click on left arrow
    $('.slider-arrow__left, .slider-carousel__posit_1, .slider-carousel__posit_2, .slider-carousel__posit_3').on('click', function() {

        for (let i = 0; i < addrImg.length; i++) {
            $('.slider-carousel__img' + i).attr('src', addrImg[i + 1]);
        }

        $('.slider-carousel__img6').attr('src', addrImg[0]);
        addrImg.push(addrImg.shift());
    });

// click on right arrow
    $('.slider-arrow__right, .slider-carousel__posit_5, .slider-carousel__posit_6, .slider-carousel__posit_7').on('click', function() {

        for (let i = 0; i < addrImg.length; i++) {
            $('.slider-carousel__img' + i).attr('src', addrImg[i - 1]);
        }

        $('.slider-carousel__img0').attr('src', addrImg[addrImg.length - 1]);
        addrImg.unshift(addrImg.pop());
    });

// --------feedback-------------

    let arrOrder = [
        'temporary_class',
        'feedback-item_order-1',
        'feedback-item_order-2',
        'feedback-item_order-3'
    ];
// click on left arrow
    $('.feedback-arrow__left').on('click', function() {

        for (let i = 1; i < arrOrder.length; i++) {
            $('.' + arrOrder[i]).removeClass('' + arrOrder[i]).addClass('' + arrOrder[i - 1]);
        }
        $('.' + arrOrder[0]).removeClass('' + arrOrder[0]).addClass('' + arrOrder[3]);

    });

// click on right arrow
    $('.feedback-arrow__right').on('click', function() {

        $('.' + arrOrder[3]).removeClass('' + arrOrder[3]).addClass('' + arrOrder[0]);

        for (let i = arrOrder.length - 2; i >= 0; i--) {
            $('.' + arrOrder[i]).removeClass('' + arrOrder[i]).addClass('' + arrOrder[i + 1]);
        }
    });

});
