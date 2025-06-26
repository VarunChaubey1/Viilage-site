$(document).ready(function() {
    // Initialize Swipers
    var gallerySwiper = new Swiper('.gallery-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
        },
    });

    var updatesSwiper = new Swiper('.updates-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
        },
    });

    // Custom functionality for additional button (jump to last slide)
    $('.swiper-button-additional').on('click', function() {
        updatesSwiper.slideTo(updatesSwiper.slides.length - 1);
    });

    // Preloader
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow');
    });

    // Read More Button Functionality
    $('.read-more').on('click', function() {
        var title = $(this).data('title');
        var content = $(this).data('content');
        var date = $(this).data('date');

        $('#newsModalLabel').text(title);
        $('#modal-content').text(content);
        $('#modal-date').text('तारीख: ' + date);

        // Clear previous media
        $('#modal-media').empty();

        // Add sample image
        var img = $('<img>').attr('src', $(this).closest('.update-card').find('.update-media').attr('src')).addClass('modal-media-img');
        $('#modal-media').append(img);

        var newsModal = new bootstrap.Modal(document.getElementById('newsModal'));
        newsModal.show();
    });
});