
$(document).ready(function() {
	$('input[placeholder], textarea[placeholder]').placeholder();
	});

//валидация формы
var validation = (function () {

	function init (){

		_setUpListeners();
	};

	function validateForm (form) {

		var formElements = $(form).find('input, textarea').not('input[type="file"], input[type="submit"], input[type="reset"]'),
			flag = true,
			email = $(form).find('input[type="email"]');
		
		$.each(formElements, function(index, val) {
			var formElement = $(val),
				val = formElement.val(),
				pos = formElement.attr('tooltip-pos');
			

			if (val.length === 0) {		
				$(this).addClass('error');
				
					_createQtip(formElement, pos);
						
				flag = false;
			}
		});
		return flag;
	};



	//---------------------------создаем тултипы-----------------------------------------------------------------
	function _createQtip (element, position) {

		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center',
				effect: false

			}
		} else {
			position = {
				my: 'right center',
				at: 'left center',
				effect: false

			}
		};

		element.qtip({
			content: {
				text: function() {
					return $(this).attr('tooltip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown change hideTooltip'
			},
			position: position,
			style : {
				classes: 'tooltip',
				tip: {
					height: 4,
					width: 8
				}
			}

		}).trigger('show');
	};

	//прослушка событий
	function _setUpListeners (){
		$('form').on('keydown', '.error', _removeError);
		$('form').on('reset', _clearForm);
		$('.close-button').click(_clearForm);
		$('.popup-bg').click(_clearForm);
		$('.submit-success-close').click(_clearForm);
	};

	function _removeError () {
		$(this).removeClass('error');

	};


	function _clearForm () {
		
		var formElements = $('form')
							.find('input, textarea')
							.not('input[type="file"], input[type="submit"], input[type="reset"]');

		$.each(formElements, function() {
				$(this)
					.removeClass('error')
					.val('').trigger('hideTooltip');
				
			}
		);
		


	};


	return {
		init: init,
		validateForm: validateForm
	};
})();


validation.init();

