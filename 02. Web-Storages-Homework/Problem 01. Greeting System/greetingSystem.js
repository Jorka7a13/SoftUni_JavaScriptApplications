(function() {
	if (!localStorage.getItem('loggedUser')) {
		var name = prompt('Please enter your name');
		localStorage.setItem('loggedUser', name);
	} else {
		alert('Hello ' + localStorage.getItem('loggedUser'));
	}

	if (!sessionStorage.getItem('sessionCount')) {
		sessionStorage.setItem('sessionCount', 1)
	} else {
		var sessionCount = sessionStorage.getItem('sessionCount');
		sessionStorage.setItem('sessionCount',  parseInt(sessionCount) + 1);
	}

	if (!localStorage.getItem('totalCount')) {
		localStorage.setItem('totalCount', 1)
	} else {
		var totalCount = localStorage.getItem('totalCount');
		localStorage.setItem('totalCount',  parseInt(totalCount) + 1);
	}


	$('#sessionVisits').empty().text(sessionStorage.getItem('sessionCount'));
	$('#totalVisits').empty().text(localStorage.getItem('totalCount'));
})();