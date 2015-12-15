
$(document).ready(function() {
	jQuery('input[placeholder], textarea[placeholder]').placeholder();
});


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
			
			
			$(this).prev('.tooltip').show();
			 // $('.tooltip-'+className).show(300);
			// $(this+'.tooltip').show();
			element.addClass('error');
			flag = false;
		}
		});

	},

	
	_setUpListeners = function (){
		$('form').on('keydown', '.error', _removeError);
		$('form').on('reset', _clearForm);
		$('.close-button').click(_clearForm);
		$('.popup-bg').click(_clearForm);
	},

	_removeError = function () {
		console.log('Красная обводка у элементов форм удалена');
		$(this).removeClass('error');
		var className = $(this).attr('class');
		$('.tooltip-'+className).hide();
	},


	_clearForm = function () {
		var elements = $('form').find('input, textarea').not('input[type="file"], input[type="submit"], input[type="reset"]');
		$.each(elements, function() {
				$(this).removeClass('error').val('');
				var className = $(this).attr('class');
				$('.tooltip-'+className).hide();

			}
		);
		$(this).removeClass('error');


	};


	return {
		init: init,
		validateForm: validateForm
	};
})();


validation.init();

