
	console.log($('.main-footer'))
	$('.b-close').click(hideModal);
	$('.popup-bg').click(hideModal)
	$('.add-project').click(showModal);
	function showModal() {
		$('.popup-container').show();
		$('.popup-bg').show();

	};
	

	function hideModal() {
		$('.popup-container').css("display", "none");
		$('.popup-bg').css("display", "none");
		$(document).keypress(function(eventObject) {
 			console.log(eventObject);	
	 	});

};



$('.button-submit').click(showSuccess);

function showSuccess() {
	$('.uploading-success').css('display','block');
}