<?php
	$data = $_POST['data'];
	$filePath = realpath("../" . $_POST['file']);
	$filename = basename($_POST['file']);
	
	if(file_put_contents($filePath, $data)) {
		echo "success";
	}
?>