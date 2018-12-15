jQuery.noConflict();

jQuery(document).ready(function ($) {

    // improve css fadein of span image by animating size change from 100px to 300px.
    var $spanImage = $('table span img');
    $('table img').on('mouseenter', function () {
        $($spanImage)
            .attr('width', 100)
            .attr('height', 100)
            .animate({
                width: 300,
                height: 300,
            }, 1000);

    }).mouseleave(function () {
        $($spanImage)
            .css({
                width: '100',
                height: '100'
            });
    });


    // make tea tables collapse and expand for cleaner appearance.
    // first add new html code
    
    $('#llTable caption').html('looseleaf<a href="#llTable"><strong>-</strong></a><em>(click to contract)</em>');
    $('#mTable caption').html('matcha<a href="#mTable"><strong>-</strong></a><em>(click to contract)</em>');
    $('#gTable caption').html('green<a href="#gTable"><strong>-</strong></a><em>(click to contract)</em>');
    $('caption a').css('paddingLeft', '20px');
    $('caption em').css({
        fontSize: '14px',
        paddingLeft: '10px'
    });
    // build function to keep DRY 
    function expandCollapse(id) {
        var ShowTable = true;
        var TableRec = $(id + ' tr');
        var TableCapExpand = $(id + ' caption a strong');
        var TableClick = $(id + ' caption em');

        $(id + ' caption a strong').on('click', function () {
            if (ShowTable == true) {
                $(TableRec).hide();
                $(TableCapExpand).text('+');
                $(TableClick).text('(click to expand)');
                ShowTable = false;
            } else {
                $(TableRec).show();
                $(TableCapExpand).text('-');
                $(TableClick).text('(click to contract)');
                ShowTable = true;
            }
        });
    }
    expandCollapse('#llTable');
    expandCollapse('#mTable');
    expandCollapse('#gTable');
});