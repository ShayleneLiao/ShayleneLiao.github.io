/*global $, Typed, google, document, window */

// Loading Screen 
    
$(window).on('load', function () {
    
    "use strict";

    $('.loading .load').fadeOut(1000, function () {

        $(this).parent().fadeOut(1000, function () {
            
            $(this).remove();

        });

    });

});

$(function () {
   
    "use strict";
    
    var sections = $('section'),
        documentEl = $(document),
        progressBar = $(".progress-bar"),
        colors   = $('.color-option .colors li'),
        dl   = $('.color-option .dl li'),
        // Typed Plugin
        typed = new Typed('.type', {
            strings: ["Frontend Developer.", "Web Designer.", "Graphic Designer."], /* Here Type Your Title */
            typeSpeed: 100,
            loop: true,
            backDelay: 1200,
            backSpeed: 20
        });
    
    // Active Class 
    
    $('.navbar .nav-item').on('click', function () {
        
        $(this).addClass('active-nav').siblings().removeClass('active-nav');
    
        // Dynamic Tabs
        var myID = $(this).attr("id");
        $("section").hide();
        $("#" + myID + "-cont").fadeIn(100);
        
        $('.navbar').removeClass('open-nav');
        $('.navbar-toggler .menu').removeClass('toggle');
        $('.navbar .collapse').toggleClass('show');
        
        $('.about .about-img').removeClass('show-img-abt');
        $('.bg-contact, .infos-contact').removeClass('open-info-cont');
        
        $('.active-nav').addClass('show-line').siblings().removeClass('show-line');
        
    });
    
    $('#about').on('click', function () {
        
        $('.about .about-img').addClass('show-img-abt');
        
    });
    
    $('#contact').on('click', function () {
        $('.bg-contact, .infos-contact').addClass('open-info-cont');
    });
    
    // Collapse Menu
    
    $('.navbar .collapse-menu').on('click', 'span', function () {
        $('.navbar').toggleClass('small-menu').toggleClass('default-menu');
        sections.toggleClass('close-menu');
        $('.collapse-icon').toggleClass('closed-menu').toggleClass('open-menu');
    });
    
    $('.navbar-toggler').on('click', function () {
        
        $('.navbar').toggleClass('open-nav');
        $('.navbar-toggler .menu').toggleClass('toggle');
        
    });
    
    $(".btn-home a").on("click", function () {
        
        $('#home-cont').hide();
        $("#contact-cont").fadeIn(500);
        $('#contact').addClass('active-nav').siblings().removeClass('active-nav');
        $('.active-nav').addClass('show-line').siblings().removeClass('show-line');
        
    });
    
    $(".about .btns a.hire-abt").on("click", function () {
        
        $('#about-cont').hide();
        $("#contact-cont").fadeIn(500);
        $('#contact').addClass('active-nav').siblings().removeClass('active-nav');
        $('.active-nav').addClass('show-line').siblings().removeClass('show-line');
        $('.active-nav').addClass('open-info-cont');
        
    });
    
    // About Me image
    
    $('.about-img').mousemove(function (e) {
        var x = e.pageX,
            y = e.pageY;
        
        $('.about-img').css('transform', 'translate(' + x / -30 + 'px, ' + y / -30 + 'px)');
                              
    });
    $('.home2-img').mousemove(function (e) {
        var x = e.pageX,
            y = e.pageY;
        
        $('.home2-img').css('transform', 'translate(' + x / -30 + 'px, ' + y / -30 + 'px)');
                              
    });
    
    // Smooth Scroll Down
    
    $(".about-cont .see-more-abt").on("click", function () {
        
        $("html, body").animate({
            
            scrollTop : $("#about-infos").offset().top
            
        }, 2000);
        
    });
    
    // Progress Bar
    
    $(window).on("scroll", function () {

        var sc = $(this).scrollTop();
        
        if (sc > 200) {
            progressBar.each(function () {
                var progressBarWidth = $(this).data('present');
                /*-- Skill Animation --*/
                $(this).css({
                    "opacity": "1",
                    "width": progressBarWidth
                });
            });
        } else {
            progressBar.each(function () {
                var progressBarWidth = $(this).data('present');
                /*-- Skill Animation --*/
                $(this).css({
                    "opacity": "0",
                    "width": "0"
                });
            });
        }

    });
    
    // Testim Slider
    $('.testim-slider').slick({
        autoplay: true,
        arrows: true,
        prevArrow: '<span class="slick-prev"> < </span>',
        nextArrow: '<span class="slick-next"> > </span>'
    });
    
    // MagnificPopup
    
	$('.video').magnificPopup({
        type: 'iframe'
    });
    
    
    $('.image').magnificPopup({
        type: 'image'
    });
    
    // Active Shuffle
    
    $('.work .shuffle ul li').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.gallery .col-lg-4').css({
                opacity: 1,
                'pointer-events': 'auto'
            }, 200);
        } else {
            $('.gallery .col-lg-4').css({
                opacity: 0.2,
                'pointer-events': 'none'
            }, 200);
            $($(this).data('class')).parent().css({
                opacity: 1,
                'pointer-events': 'auto'
            }, 200);
        }
        
    });
    
    // Google Map
    
    function initMap() {
        var map = new google.maps.Map(documentEl.getElementById('map'), {
            zoom: 4,
            center: {lat: -33, lng: 151},
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false
        });
    }
    
    // Remove The Scroll To Zoom Google Maps
    
    $('#map').addClass('scrolloff');
    $('#overlay').on("mouseup", function () {
        $('#map').addClass('scrolloff');
    });
    
    $('#overlay').on("mousedown", function () {
        $('#map').removeClass('scrolloff');
    });
    
    $("#map").mouseleave(function () {
        $('#map').addClass('scrolloff');
    });
    
    // Open Map
    
    $('.open-map').on('click', function () {
        
        $('.maps, footer').toggleClass('opend');
    
    });
    
    $('.open-map span').on('click', function () {
        
        $(this).removeClass('active').siblings().addClass('active');
    
    });
    
    // Change Template Colors
    
    colors.eq(0).css("backgroundColor", "#ffc847").end()
           .eq(1).css("backgroundColor", "#7ca95c").end()
           .eq(2).css("backgroundColor", "#d88b7c").end()
           .eq(3).css("backgroundColor", "#55aea1").end()
           .eq(4).css("backgroundColor", "#7a81ce");

    colors.on('click', function () {
        
        $("link[href*='color']").attr("href", $(this).attr("data-value"));
        
    });
    
    dl.eq(0).css("backgroundColor", "#1E1E1E").end()
        .eq(1).css("backgroundColor", "#FFF");
    
    dl.on('click', function () {
        
        $("link[href*='template']").attr("href", $(this).attr("data-value"));
        
    });
    
    // Show Color Option Div When Click On The Gear
    
    $(".option-box .gear-check").on("click", function (e) {
        e.preventDefault();
        
        if ($(this).hasClass("slide_in_out")) {
            $(".option-box").stop().animate({right: "0px"}, 500);
            $(".color-option").stop().animate({right: "-190px"}, 500);
        } else {
            $(".option-box").stop().animate({right: "178px"}, 500);
            $(".color-option").stop().animate({right: "0"}, 500);
        }
        
        $(this).toggleClass("slide_in_out");
        return false;
        
    });
    
    // Slider Background
    
    $('.slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="slick-prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fas fa-angle-right"></i></span>'
    });
    
});