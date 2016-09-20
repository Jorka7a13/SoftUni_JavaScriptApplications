(function() {
  var baseUrl = 'https://baas.kinvey.com/appdata/kid_ZyIUpZ_qJZ/books',
	username = 'user',
	password = '1234',
	userCredentials = btoa(username + ":" + password),
	isEdited = false,
	bookId,
	books;

	function getAllBooks() {
		$.ajax({
			type: "GET",
			url: baseUrl,
			beforeSend: function(xhr){ 
				xhr.setRequestHeader('Authorization', 'Basic ' + userCredentials);
			},
			success: function(data) {
				books = data;
				processJSON(data);
				
				$('.delete').on('click', function(ev) {
					$.ajax({
						type: "DELETE",
						url: baseUrl + '/' + ev.target.id,
						beforeSend: function(xhr) { 
							xhr.setRequestHeader('Authorization', 'Basic ' + userCredentials);
						},
						success: function(data) {
							getAllBooks();
						},
						error: function(data){
							console.error(data);
						}
					});
				});
			},
			error: function(data) {
				console.error(data);
			}
		});
	};

	getAllBooks();

	$('ul').on('click', function(ev) {
		var titleElement = $('#title'),
			authorElement = $('#author'),
			isbnElement = $('#isbn'),
			result;

		if (ev.target.tagName == 'LI') {
			result = books[$(ev.target).index()];
			titleElement.val(result.title);
			authorElement.val(result.author);
			isbnElement.val(result.isbn);

			isEdited = true;
			bookId = result._id;
		}
	});

	$('#submitButton').on('click', function() {
		var titleElement = $('#title'),
		authorElement = $('#author'),
		isbnElement = $('#isbn'),
		title = titleElement.val(),
		author = authorElement.val(),
		isbn = isbnElement.val(),
		data;

		if (title && author && isbn) {
			data = {"title":title, "author":author, "isbn":isbn}; 

			if (isEdited) {
				$.ajax({
					type: "PUT",
					url: baseUrl + '/' + bookId,
					data: data,
					beforeSend: function(xhr){ 
						xhr.setRequestHeader('Authorization', 'Basic ' + userCredentials);
					},
					success: function(data) {
						titleElement.val('');
						authorElement.val('');
						isbnElement.val('');
						getAllBooks();
						isEdited = false;
					},
					error: function(data) {
						console.error(data);
						isEdited = false;
					}
				});
			} else {
				$.ajax({
					type: "POST",
					url: baseUrl,
					data: data,
					beforeSend: function(xhr){ 
						xhr.setRequestHeader('Authorization', 'Basic ' + userCredentials);
					},
					success: function(data) {
						titleElement.val('');
						authorElement.val('');
						isbnElement.val('');
						getAllBooks();
					},
					error: function(data) {
						console.error(data);
					}
				});
			}
		} else {
			alert('Please fill all fields when creating a book!');
		}
	});

	function processJSON(data) {
		$('#bookList ul').empty();

		for (var elementIndex in data) {
			var item = data[elementIndex];
			$('<li />')
				.text('"' + item.title + '" - ' + item.author + '; ISBN: ' + item.isbn)
				.append('<button type="button" class="delete" id="' + item._id + '">Delete</button>')
				.appendTo('#bookList ul');
		}
	}
})();