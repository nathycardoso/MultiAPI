// Global settings to toast
iziToast.settings({
    timeout: 10000,
    resetOnHover: true,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'bottomCenter',
});

function validateRequired(seletor) {

	errors = 0;

  $(seletor).each(function (index, value) {
		if($.trim($(this).val()) == '') {
			errors++;
			$(this).addClass('invalid');
		} else {
			$(this).removeClass('invalid');
		}
	});

	return errors;
}
