/* $(function () {
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 5000);

	function changeSlide() {
		carouselList.stop().animate({
			'marginLeft': "-1340px"
		}, 1400, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({
			marginLeft: 0
		});
		nextSlide.on('click', nextClickFunc);
	};


	function moveLastSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({
			marginLeft: "-1340px"
		});
	};

	function changeSlidePrev() {
		moveLastSlide();
		carouselList.stop().animate({
			'marginLeft': 0
		}, 800, function () {
			prevSlide.on('click', prevClickFunc);
		});
	};


	var nextSlide = $(".next");
	var nextClickFunc = function () {
		nextSlide.off('click');
		changeSlide();
	}
	nextSlide.on('click', nextClickFunc);

	var prevSlide = $(".prev");
	var prevClickFunc = function () {
		prevSlide.off('click');
		changeSlidePrev();
	}
	prevSlide.on('click', prevClickFunc);
});


*/


/// ANIMATIONS!!!!!!!!


$(document).ready(function () {

	$('h2').addClass('hide').each(function () {
		$(this).viewportChecker({
			classToAdd: 'show animated fadeInDown',
			classToRemove: 'hide',
			offset: '30%'
		});
	});

});

$(document).ready(function () {

	$('#myself').addClass('hide').each(function () {
		$(this).viewportChecker({
			classToAdd: 'show animated slideInRight',
			classToRemove: 'hide',
			offset: '30%'
		});
	});

});


/*smooth*/

$(document).on('click', 'a', function (event) {
	event.preventDefault();
	$('body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1200);
});
