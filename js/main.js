(function ($) {
"use strict";

// One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
    });

//sticky Menu
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 100) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//data background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");

});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	enabled: true
	}
});

//Isotope
$('.grid').imagesLoaded( function() {
	   	// init Isotope
	var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
	//use outer width of grid-sizer for columnWidth
	columnWidth: '.grid-item',
	}
});
});


// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

 //for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault()
});

// Active Odometer Counter 
jQuery('.odometer').appear(function (e) {
	var odo = jQuery(".odometer");
	odo.each(function () {
		var countNumber = jQuery(this).attr("data-count");
		jQuery(this).html(countNumber);
	});
});


//slick slider active
$('.swiper-slide').slick({
	dots: true,
	arrows: false,
	autoplay: true,
	infinite: true,
    speed: 300,
	autoplaySpeed: 2000,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1200,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		
		}
	},
	{
		breakpoint: 992,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		}
	},
	{
		breakpoint: 600,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		}
	},
	{
		breakpoint: 480,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	}
}
]
});


// scrollToTop active
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '-76', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	
});

// WOW active
new WOW().init();

//preloader
function preloader() {
	if($('#proloader').length) {
		$('#proloader').delay(1000).fadeOut('slow');
	}
}
$(window).on('load', function (){
	preloader();
})

})(jQuery);


//Mobile_Menu
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}






