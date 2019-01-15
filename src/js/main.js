$(function() {

    $('#fullpage').fullpage({
        scrollOverflow: true
    });

});

$(document).on('click', '.scrollDown__btn', function(){
    fullpage_api.moveSectionDown();
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