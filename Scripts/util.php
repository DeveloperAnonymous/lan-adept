<?php
require_once('dbconn.php');
require_once('template.php');
require_once('navbar.php');
require_once('auth.php');

auth();

function get_hash($text) {
    return hash('sha512', $text);
}

function find_user($email) {
    $user = select("users", Array('email', $email));
    return sizeof($user) > 0 ? $user[0] : null;
}

function is_Admin() {
    $user = is_auth() ? find_user($_SESSION['email']) : null;
    return !is_null($user) && $user['isAdmin'];
}

function encode($text) {
    return htmlspecialchars(urlencode($text));
}

function decode($text) {
    return htmlspecialchars_decode(urldecode($text));
}