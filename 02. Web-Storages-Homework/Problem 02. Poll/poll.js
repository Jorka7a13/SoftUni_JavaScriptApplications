(function() {
	var minutes = 5,
	seconds = 0;

	$.ready(timerCountdown);

	$('input').on('click', function() {
		localStorage.setItem($(this).prop('name'), $(this).prop('value'));
	});

	$('button').on('click', function() {
		clearInterval(timerCountdown);
		
		var result = '',
			answer1 = localStorage.getItem('question1'),
			answer2 = localStorage.getItem('question2'),
			answer3 = localStorage.getItem('question3');

		result += 'First answer: Mercury - '
		if (answer1 === 'Mercury') {
			result += 'Right!';
		} else {
			result += 'Wrong! Your answer was: ' + answer1;
		}
		result += '\n';

		result += 'Second answer: Magma - '
		if (answer2 === 'Magma') {
			result += 'Right!';
		} else {
			result += 'Wrong! Your answer was: ' + answer2;
		}
		result += '\n';

		result += 'Third answer: Cows - '
		if (answer3 === 'Cows') {
			result += 'Right!';
		} else {
			result += 'Wrong! Your answer was: ' + answer3;
		}
		result += '\n';

		alert(result);
	});

	var timerCountdown = setInterval(function() {
		if (seconds == -1) {
			if (minutes > 0) {
				minutes -= 1;
				seconds = 59;
			} else {
				// Fire custom event for timer stop here.
				clearInterval(timerCountdown);
				seconds = '00';
			}

		} else if(seconds <= 9) {
			seconds = '0' + seconds;
		}

		// Do timer work.
		$('#timer').text(minutes + ':' + seconds);
		seconds -= 1;
	}, 1000);
})();