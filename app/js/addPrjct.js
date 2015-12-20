//модуль добавоения нового проекта

var addProject = (function () {

	function init () {
		_setUpListeners();
	};

	 
  	//прослушка событий
	function _setUpListeners () {
		$('#add-project')
			.click(_showModal);
		$('.close-button').click(_hideModal);
		$('.popup-bg').click(_hideModal);
		// $('.error-close-button').click(_hideError);
		$('.submit-success-close').click(_hideModal);
		$('#upload-file').on('change', _showFileName);
		$('form').on('submit', _addProject);

	};

	//показываем имя файла в фейковом инпуте
	function _showFileName () {
		var input = $(this),
			name = _getNameFromPath(input.val());

		$('.picture-upload-field').val(name).removeClass('error').trigger('hideTooltip')
		$('.tooltip-picture-upload-field').fadeOut(200);
	};
	
	function _getNameFromPath (path) {
		return path.replace(/\\/g, '/').replace(/.*\//, '')
	};



	function submitForm (form) {
		
		var url = form.attr("action");

		var data = form.serialize();

		$.ajax ({
			url: url,
			type:'POST',
			dataType: 'json',
			data: data,
		}).done( function(data){
			$('.popup-container').hide();
			$('.submit-success').show();
			
		}

		).fail( function(){
			$('.uploading-error').show();
			
		});

		
	};

	function _addProject (e) {
		e.preventDefault();
		var form = $(this);
		validation.validateForm(form);

		if (validation.validateForm(form)) {
			submitForm(form);
		}
	};


	function _showModal (e)  {
		
		e.preventDefault();
		$('.popup-container').fadeIn(200);
		$('.popup-bg').fadeIn(200);
		$('input[placeholder], textarea[placeholder]').placeholder();
	};

	 function _hideModal (e) {
		
		$('.popup-bg').fadeOut(200);
		$('.popup-container').fadeOut(200);
		$('.submit-success').fadeOut(200);
	};



	
	return {
		init: init
	}

})();


addProject.init();


