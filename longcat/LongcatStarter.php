
<?php
# Check to see if the user has visited before (if cookie is set)
?>

<!DOCTYPE html>
<html>
	<head>
		<title>L<?= $o ?>ng Cat</title>
		<style type="text/css">
			div { line-height: 0; }
		</style>
	</head>
	
	<body>
		<h1>L<?= $o ?>ng Cat</h1>
		<p>You have visited this page <?= $visits ?> time(s).</p>

		<div><img src="top.jpg" alt="top of cat" /></div>

		<?php for ($i = 0; $i < $visits; $i++) { ?>
			<div><img src="middle.jpg" alt="top of cat" /><div>
		<?php }?>
		
		<div><img src="bottom.jpg" alt="top of cat" /><div>
	</body>
</html>
