$(function() {

    $('#fullpage').fullpage({
        scrollOverflow: true
    });

});

$(document).on('click', '.scrollDown__btn', function(){
    fullpage_api.moveSectionDown();
});

$(document).on('click', '.scrollUp__btn', function(){
    fullpage_api.moveSectionUp();
});

$(function() {
    $('.toggle').click(function() {
        $(this).toggleClass('active');
        $('.navigation').toggleClass('active');
    });
});

$(function() {
    $('.released-album__exit').click(function() {
        $('.released-album').remove();
    });
});

$(document).ready(function() {
    $('.js-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'>Previous <br> Artist</button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'>Next <br> Artist</button>"
    });
});