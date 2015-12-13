<?php
	
	$data = array();

	$data['mes'] = 'OK';

	header("Content-Type: application/json");
	echo json_decode($data);
	exit;

?>