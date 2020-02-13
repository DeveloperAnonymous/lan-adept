<?php

function connect_DB() {
    $dbName = "lan-adept";
    $host = "localhost";
    $user = "root";
    $pwd = "";

    try {
        $bdd = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8", $user, $pwd);
        $bdd -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);    // En cas d'erreur, on affiche un message et on arrête tout
        return $bdd;
    }
    catch(Exception $e) { die('Erreur : '.$e->getMessage()); }
}

/**
 * Ajoute un enregistrement
 * @param: string $table -> la table qu'il faut updater
 * @param: array $data  -> les données à inscrire
 **/
function insert($table, $data) {
    try {
        $conn = connect_DB();

        $columns = implode(", ", array_keys($data));
        $values  = implode("', '", $data);

        $conn->exec("INSERT INTO $table ($columns) VALUES ('$values')");
    } catch (Exception $e) { die('Erreur : '.$e->getMessage()); }
}

/**
 * Modifie un enregistrement
 * @param: string $table -> la table qu'il faut updater
 * @param: array $data  -> les données à modifier
 * @param: array $key_array   -> un array de la clefs
 **/
function update($table, $data, $key_array) {
    try {
        $conn = connect_DB();

        $values = "";
        foreach ($data as $index => $value) {
            $values .= "$index = '$value', ";
        }

        $values = trim($values);
        $values = substr($values, 0, -1);

        $entry = array_keys($key_array)[0];
        $key = $key_array[$entry];

        $conn->exec("UPDATE $table SET $values WHERE $entry = '$key'");
    } catch (Exception $e) { die('Erreur : '.$e->getMessage()); }
}

/**
 * Supprime un enregistrement
 * @param: string $table -> la table dans de l'enregistrement
 * @param: array $key_array   -> un array de la clefs
 **/
function delete($table, $key_array) {
    try {
        $conn = connect_DB();

        $entry = array_keys($key_array)[0];
        $key = $key_array[$entry];

        $conn->exec("DELETE FROM $table WHERE $entry = '$key'");
    } catch (Exception $e) { die('Erreur : '.$e->getMessage()); }
}

/**
 * Obtient des données
 * @param string $table -> la table qu'il faut updater
 * @param array $key_array (optional) -> un array de la clef
 *
 * @return array
 **/
function select($table, $key_array = Array()) {
    try {
        $conn = connect_DB();

        $where = '';
        if (sizeof($key_array) == 1) {
            $entry = array_keys($key_array)[0];
            $key = $key_array[$entry];

            $where = "WHERE $entry = '$key'";
        }

        return $conn->query("SELECT * FROM $table $where")->fetchAll();
    } catch (Exception $e) { die('Erreur : '.$e->getMessage()); }
}