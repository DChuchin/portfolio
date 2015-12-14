//добавление проекта модуль

var addProject = (function () {

	var init = function () {
		_setUpListeners();
	},

	_getNameFromPath = function (path) {
		return path.replace(/\\/g, '/').replace(/.*\//, '');
	},

	_setUpListeners = function () {
		$('#add-project').click(_showModal);
		$('.close-button').click(_hideModal);
		$('.popup-bg').click(_hideModal);
		$('.popup-form').on('submit', _addNewProject);
		// $('.error-close-button').click(_hideError);
		$('#upload-file').on('change', _showFileName);
	},


	_showFileName = function () {
		var input = $(this),
			name = _getNameFromPath(input.val());

		$('.picture-upload-field').val(name);
	},

	_addNewProject = function (e) {
		e.preventDefault();
		validation.validateForm(this);
	}







	function _showModal (e) {
		
		e.preventDefault();
		$('.popup-container').show();
		$('.popup-bg').show();

	};

	function _hideModal (e) {
		$('.popup-bg').hide();
		$('.popup-container').hide();
		

	};




	return {
		init: init
	}

})();


addProject.init();


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
		$('form').on('reset', _clearForm);
	},

	_removeError = function () {
		console.log('Красная обводка у элементов форм удалена');
		$(this).removeClass('error');
	}
	







	return {
		init: init,
		validateForm: validateForm
	}
})();


validation.init;
