var validation = (function () {

	var init = function (){

		_setUpListeners();
	},

	validateForm = function (form) {

		var elements = $(form).find('input, textarea').not('input[type="file"], input[type="submit"], input[type="reset"]'),
			flag = true;
		$.each(elements, function(index, val) {
			var element = $(val),
			val = element.val();

		if (val.length === 0) {
			element.addClass('error');
			flag = false;
		}
		});

	},

	_setUpListeners = function (){
		$('form').on('keydown', '.error', _removeError);
		// $('form').on('reset', _clearForm);
	},

	_removeError = function () {
		console.log('Красная обводка у элементов форм удалена');
		$(this).removeClass('error');
	},

	_checkValid = function (e) {
		e.preventDefault;
		validateForm(this);
	}
	







	return {
		init: init,
		validateForm: validateForm
	};
})();


validation.init();

