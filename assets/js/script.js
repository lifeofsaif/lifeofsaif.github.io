/* User experience animations. Dependencies include the jQuery library, Waypoints plugin and Visibility plugin. */
$(document).ready(function() {
    $('.background').css('height', $(window).height() + 'px');

    enableResize();
    fadeInIntro()
    $('#key-0').css('display', '');
    $('#key-1').css('display', '');
    $('#key-2').css('display', '');
});

function enableResize() {
    $(window).on('resize', function(event) {
        $('.background').css('height', $(window).height() + 'px');

    });
}

function fadeInIntro() {

    $('#firstImpression').css('display', 'none');
    $('#big').css('display', 'none');
    $('#small').css('display', 'none');
    $('#quote').css('display', 'none');



    setTimeout(function() {
        $('#firstImpression').fadeIn(500);
    }, 500);
    setTimeout(function() {
        $('#big').fadeIn(500);
    }, 1000);
    setTimeout(function() {
        $('#small').fadeIn(750);
    }, 1500);
    setTimeout(function() {
        $('#quote').fadeIn(1000);
    }, 2250);

}