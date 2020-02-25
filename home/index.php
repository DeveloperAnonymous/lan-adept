<?php
require_once ('../scripts/util.php');

$page = new Home("Accueil", new Countdown());
$page->show();