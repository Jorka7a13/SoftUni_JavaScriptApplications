(function() {
	var router = Sammy(function() {
		this.get('#/:name', function() {
			$('#message').html('Hello, ' + this.params['name'] + '!');
		});
	});

	router.run('#/');
})();