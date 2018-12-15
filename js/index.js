jQuery.noConflict();

jQuery(document).ready(function ($) {

    // load a random quote from quotes array in data.js

    function quoteGenerator() {
        var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
        $('blockquote').eq(0).css({
            'display': 'none',
            'text-transform': 'lowercase'}).fadeIn("slow").text(randQuote);
    }
    quoteGenerator();

    // load a fading in/out slide show of pictures

    function fadeSlide() {
        var $fadeImage = $('img').eq(1);
        $.each(pictures, function (index, picture) {
            $fadeImage.delay(1000).fadeOut(2500, function () {
                $fadeImage.attr("src", "images/" + picture);
            }).fadeIn(2500, fadeSlide);
        });
    }
    fadeSlide();
    // when hovering over links to looseleaf/matcha/green tea font size and weight increase and decrease.
    $('figure a').on('mouseenter', function(){
        $(this).animate({
            fontWeight: '500',
            fontSize: '24px'
        }, 750);
        $(this).mouseleave(function() {
            $(this).animate({
                fontWeight: '300',
                fontSize: '14px'
            }, 750);
        });
    });

});