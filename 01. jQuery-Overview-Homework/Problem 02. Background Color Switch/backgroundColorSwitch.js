$('button').on('click', function() {
	var classValue = $('#class').val();
	var selectedColor = $('#color').val();

	if(classValue == '') {
		classValue = $('li');
	} else {
		classValue = '.' + classValue;
	}

	$(classValue).css('background-color', selectedColor);
});