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
});
