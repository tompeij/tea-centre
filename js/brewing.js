jQuery.noConflict();

jQuery(document).ready(function ($) {

    // Easter egg - when mouse enters h2 the text fades and changes text content.

    var goodGrade = $('.brewing h2');
    var brewText = $(goodGrade).text();
    

    $(goodGrade).on('mouseenter', function () {

        $(this).fadeOut(1500, function () {
            $(this).fadeIn(1000).text('Dear Frank, please give me a good grade :-)');
        }).mouseleave(function () {
            $(this).fadeOut(1000, function () {
                $(this).fadeIn(1000).text('| at least a C++ ?');
            });
        });
    });
    // Easter egg - when mouse enters .brewing ul area text slides up and slides down with Thank you message.
    var thankYou = $('.brewing ul');
    var origHtml = $('.brewing ul').html(); 

    $(thankYou).on('mouseenter', function () {

        $(this).fadeOut(1500, function () {
            $(this).text('Thank you!!!').css('fontSize', '75px').fadeIn(1500);
        }).mouseleave(function(){
            $(this).fadeOut(1500, function () {
                $(this).html(origHtml).css('fontSize', '16px').fadeIn(1500);
                $('.brewing h2').text(brewText);
            });
           
        });
    });
});