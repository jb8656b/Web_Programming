<?php
$myArray = array(array("Name" => "Jimmy"));
$readyForJSON = json_encode($myArray);
File_put_contents("Testing.json",$readyForJSON);
echo("This should be working");
echo($readyForJSON);
?>
