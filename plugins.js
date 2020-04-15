$(function(){
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
        
    });
    $('.tab-switch li').click(function () { 
        //add selected class to active link
        $(this).addClass('selected').siblings().removeClass('selected');
        //hide all div
        $('.tabs-section .tabs-content > div').hide();
        //show div connected with the link 
        $('.' + $(this).data('class')).show();
        
    });
});



