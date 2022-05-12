/*
[Custom Script] Copyright Â© 2017
Title  : SASS Landing Page
Version: 1.0
Author:  
Author URI:  
Support:  
*/

/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	

	"use strict";
	
	//Initiat WOW JS
	new WOW().init();

	//Smooth Scroll
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	//Testimonial Slider
	//Testimonial Slider
	if ($('.cs-testimonial-slider').length) {
		$(".cs-testimonial-slider").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			nav: false,
			dots: true
		});
	}
	
	//Partner Slider
	if ($('.cs-partner-slider').length) {
		$(".cs-partner-slider").owlCarousel({
			items: 2,
			autoplay: true,
			nav: false,
			dots: false,

			responsive: {
				0: {
					items: 2,
					dots: true,
				},
				600: {
					items: 3,
					dots: true
				},
				992: {
					items: 4
				},
				1000: {
					items: 5
				},
				1200: {
					items: 6
				}
			}
		});
	}
	
	/* Magnific Gallgery*/
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}

	});

});
