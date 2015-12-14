
// 	console.log($('.main-footer'))
// 	$('.b-close').click(hideModal);
// 	$('.popup-bg').click(hideModal)
// 	$('.add-project').click(showModal);
// 	function showModal() {
// 		$('.popup-container').show();
// 		$('.popup-bg').show();

// 	};
	

// 	function hideModal() {
// 		$('.popup-container').css("display", "none");
// 		$('.popup-bg').css("display", "none");
// 		$(document).keypress(function(eventObject) {
//  			console.log(eventObject);	
// 	 	});

// };



// $('.button-submit').click(showSuccess);

// function showSuccess() {
// 	$('.popup-container').hide();
// 	$('.uploading-success').show();

// }

var myModule = (function () {
	
	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('#add-project').click(_showModal);
		$('.close-button').click(_hideModal);
		$('.popup-bg').click(_hideModal);
		$('.popup-form').on('submit', _addProject);
		$('.error-close-button').click(_hideError);
		$('.upload-file').on('change', _showText);

	};

	


	function _showText() {

		var fullFileName = $(this).val();

		var cutFileName;

		var index = fullFileName.lastIndexOf('\\');

		cutFileName = fullFileName.substr(index+1);

		$('.picture-upload-field').html(cutFileName);
	}

	function _hideError() {
		$('.uploading-error').hide();
	}

	function submitForm(form) {
		var url = form.attr("action");

		var data = form.serialize();

		$.ajax ({
			url: url,
			type:'POST',
			dataType: 'json',
			data: data,
		}).done( function(data){
			console.log('yes');
		}

		).fail( function(){
			$('.uploading-error').show();
			console.log("NO");
		});

		console.log(data);
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

	function _addProject (e) {
		e.preventDefault();
        var flag = true;
		var form = $(this),

			// url = 'add_project.php',
			// data = form.serialize(),
			items = form.find('input, textarea').not('input[type="submit"], input[type="reset"]');
			$.each(items, function(index, val) {
				var content = $(val).val();
				if ($('#upload-file').val().length == 0) {
					$('.picture-upload-field').addClass('error');
				} else {
					$('.picture-upload-field').removeClass('error');
				}
				if (content.length == 0) { 
					$(this).addClass('error');
					flag = false;
					// _showTooltip(this);
				} else {
					$(this).removeClass('error');
					flag = flag * true;
	
				}
			});
			console.log(flag);

		if (flag === 1) {
			submitForm(form);
		}




		// function _showTooltip (target) {
		// 	var _showTooltip = 
		// }

		// $.ajax({
		// 	url: '/path/to/file',
		// 	type: 'POST',
		// 	dataType: 'json',
		// 	data: data,
		// })
		// .done(function(ans) {
		// 	console.log("success");
		// 	console.log(ans);
		// })
		// .fail(function() {
		// 	console.log("error");
		// })
		// .always(function() {
		// 	console.log("complete");
		// });
		



	};

	return {
		init: init
	};
})();

myModule.init();