<?php
require_once('util.php');

function is_auth() {
    return isset($_SESSION['token']);
}

function auth() {
    if (!is_auth())
        session_start();
}

function logout() {
    if (is_auth())
        session_destroy();
}