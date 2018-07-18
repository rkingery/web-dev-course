0
$('#trigger').click(function() {			// when a user clicks button with id 'trigger'
	$('body').css('background','yellow');	// change body background to yellow
	$('img').fadeIn(5000, function () {	// also useful: slideDown, fadeOut, slideUp, fadeToggle, slideToggle
		//$(this).remove();					// remove images from page when fade out completed
		console.log('faded in');
	});
});

// other popular methods: text (for changing block text), html (for changing raw html), val (select value in block)

// most important events: click, keypress, on (biggest one)
$('input[type="text"]').keypress(function(event) {
	if (event.which === 13) {
		console.log('hit enter');
		$(this).text = "";
	}
});

$('div').on('dblclick', function() {console.log('div clicked');});

$('button').on('mouseover', function() {
	$(this).css('font-weight','bold');
});

$('button').on('mouseleave', function() {
	$(this).css('font-weight','normal');
});