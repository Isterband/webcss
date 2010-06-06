<?php
	$data = $_POST['data'];
	define("WEBROOT_PATH", realpath(".."));
	preg_match('#^((?:(?:\w:\\\\)|(?:\w+://))?[\w/\\\\]+\.css)#', $_POST['file'], $matches);
	if(!preg_match('#^((?:\w:\\\\)|(?:\w+://)[\w/\\\\]+\.css)#', $matches[1])) {
		$filePath = realpath("../" . $matches[1]);
	} else {
		// $filePath = $matches[1];
		echo "Filepath is not relative to the webroot";
		exit;
	}
	
	if(empty($filePath)) {
		echo "Filepath is empty";
	} elseif(!file_exists($filePath)) {
		echo "File doesn't exist: " . $filePath;
	} else {
		if(file_put_contents($filePath, $data)) {
			echo "success";
		} else {
			echo "Unexpected error occured";
		}
	}
?>