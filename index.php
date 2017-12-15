<!DOCTYPE html>
<html>
<head>
	<title>Projet équipe sous Git</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<?php
$imageActive = '';
?>

<main>
	<section>
		<h1>Schéma Développeurs Front - Back </h1>

<?php
		for ($i = 1; $i < 7; $i++)
		{
			echo
<<<CODEHTML
<img id="img$i" src="img/img$i.png">
CODEHTML;

		}

?>
		<img id="imgfinal" src="img/imgfinal.jpg">
		<button id="button">Cliquez ici !</button>
	</section>

	<section>
		<h2>Notre équipe</h2>
		
		<?php include("list.php");?>
	</section>

	<section>
		<h2><a href="apropos.html">A propos</a></h2>
	</section>

</main>

<script type="text/javascript" src="js/script.js"></script>

</body>
</html>