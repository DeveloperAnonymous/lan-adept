<?php
require_once('util.php');

function navigationbar() {
    $navbar = new NavigationBar();
    if (is_auth()) {
        $navbar->set_value('loginoptions', new StaticContent('loggedin.html'));
        $user = find_user($_SESSION['email']);
        if (is_Admin()) {
            $navbar->set_value('admin', new StaticContent('admintools.html'));
        } else
            $navbar->set_value('admin', '');
    } else {
        $navbar->set_value('loginoptions', new StaticContent('loggedout.html'));
        $navbar->set_value('admin', '');
    }
    return $navbar;
}