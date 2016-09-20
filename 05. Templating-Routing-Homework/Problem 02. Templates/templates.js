(function() {
	var employees = [{name:'Garry Finch', jobTitle:'Front End Technical Lead', website:'http://.website.com'}, {name:'Bob McFray', jobTitle:'Photographer', website:'http://goo.gle'}, {name:'Jenny O\'Sullivan', jobTitle:'LEGO Geek', website:'http://stackoverflow.com'}];
	$.get('table.html', function(template) {
	    var rendered = Mustache.render(template, employees);
		$('#table').html(rendered);
	});
})();