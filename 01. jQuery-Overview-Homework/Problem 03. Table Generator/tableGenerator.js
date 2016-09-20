(function() {
	input = [{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"}, {"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"}, {"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}];

	for (var i = 0; i < input.length; i += 1) {
		drawRow(input[i]); 
	}

	function drawRow(data) {
		var row = $('<tr>');

		row.append($('<td>' + data.manufacturer + '</td>'));
		row.append($('<td>' + data.model + '</td>'));
		row.append($('<td>' + data.year + '</td>'));
		row.append($('<td>' + data.price + '</td>'));
		row.append($('<td>' + data.class + '</td>'));
		
		row.appendTo($('tbody'));
	}
})();