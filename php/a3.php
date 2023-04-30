<?php
if ($_POST['sex'] == 'man') $str = $_POST['height'] - 100;
else if ($_POST['sex'] == 'woman') $str = $_POST['height'] - 110;
else $str = 'error';
echo $str;
?>
