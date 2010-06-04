<?php
	$data = $_POST['data'];
	preg_match('/([a-zA-Z0-9\/\.]+\.css)/', $_POST['file'], $matches);
	$filePath = realpath("../" . $matches[1]);
	
	if(!empty($filePath)) {
		if(file_put_contents($filePath, $data)) {
			echo "success";
		}
	} else {
		
		echo $_POST['file'];
		
	}
?>