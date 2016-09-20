(function() {
	var index = 1,
		changeSpeed = 5000;

	$(document).ready(function() {
		$('.imageContainer').children().hide();
		showNextSlide();

		$('#previousButton').on('click', showPreviousSlide);
		$('#nextButton').on('click', showNextSlide);
		
		setInterval(showNextSlide, changeSpeed);
	});

	function showPreviousSlide() {
		if (index === 1) {
			index = 3;
		} else {
			index -= 1;
		}

		changeSlide();
	}

	function showNextSlide() {
		if (index === 3) {
			index = 1;
		} else {
			index += 1;
		}

		changeSlide();
	}

	function changeSlide() {
		$('.imageContainer').children().fadeOut(1000);

		setTimeout(function() { 
			$('#image' + index).fadeIn(1000); 
		}, 1000);
	}
})();