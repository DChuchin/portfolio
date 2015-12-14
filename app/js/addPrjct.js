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
		$('form').on('submit', _validate);
		// $('.error-close-button').click(_hideError);
		$('#upload-file').on('change', _showFileName);

	},


	_showFileName = function () {
		var input = $(this),
			name = _getNameFromPath(input.val());

		$('.picture-upload-field').val(name).removeClass('error');
	},

	_validate = function (e) {
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


