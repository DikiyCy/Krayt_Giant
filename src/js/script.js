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

    $('.functions-catalog_close').each(function(i) {
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

    $('.slider-arrow__left').on('click', function() {

        for (let i = 0; i < addrImg.length; i++) {
            $('.slider-carousel__img' + i).attr('src', addrImg[i + 1]);
        }

        $('.slider-carousel__img6').attr('src', addrImg[0]);
        addrImg.push(addrImg.shift());
    });


    $('.slider-arrow__right').on('click', function() {

        for (let i = 1; i < addrImg.length; i++) {
            $('.slider-carousel__img' + i).attr('src', addrImg[i - 1]);
        }

        $('.slider-carousel__img0').attr('src', addrImg[addrImg.length - 1]);
        addrImg.unshift(addrImg.pop());
    });

});
