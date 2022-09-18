<?php

const USERNAME = "root";
const PASSWORD = "";

function dbConnections()
{
    $dbh = new PDO("mysql:host=localhost;dbname=calculatrice", USERNAME, PASSWORD);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

$dbh = dbConnections();

function saveData($calc, $result)
{
    global $dbh;
    $stmt = $dbh->prepare("INSERT INTO calculatrice (calcule, result)
                            VALUES (:a, :b)");
    $stmt->bindValue('a', $calc);
    $stmt->bindValue('a', $result);
    $stmt->execute();
}

function deleteData($id)
{
    global $dbh;
    $stmt = $dbh->prepare("DELETE FROM calculatrice
                            WHERE id = :a");
    $stmt->bindValue("a", $id);
    $stmt->execute();
}

function listData()
{
    global $dbh;
    $stmt = $dbh->prepare("SELECT * FROM calculatrice");
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $data;
}

switch ($_POST) 
{
    case "save":
        $calc = $_POST['calc'];
        $result = $_POST['result'];
        saveData($calc, $result);
    case "delete":
        $id = $_POST['id'];
        deleteData($id);
}

return listData();