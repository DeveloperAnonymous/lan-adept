<?php
# Auth
$user = "lanadept";
$host = "127.0.0.1";
$pwd = "6SMsfhMGVv";
$manager = new MongoDB\Driver\Manager("mongodb://$user:$pwd@$host/admin?authMechanism=SCRAM-SHA-1");

function get_collection_data($collection) {
    global $manager;
    
    // This is for collections made for this site that only have a single block a data
    $find_all_query = new MongoDB\Driver\Query(array());
    $cursor = $manager->executeQuery("lanadept.$collection",$find_all_query);
    $data = object_to_array($cursor->toArray()[0]);
    return $data;
}

function upsert($collection, $_id, $data, $set_mode='$set') {
    global $manager;
    $bulk = new MongoDB\Driver\BulkWrite;
    $bulk->update(['_id' => $_id], ['$set' => $data], ['upsert' => true]);
    $write_concern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 1000);
    $result = $manager->executeBulkWrite("lanadept.$collection", $bulk, $write_concern);
    return $result;
}

// db.createUser({user: "lanadept", pwd: "6SMsfhMGVv", roles: [ {role:  "root", db: "admin" }] })
?>
