<?php

if (array_key_exists('message', $_POST))
{
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $finalMessage = "Envoyé par ".$prenom." ".$nom."\n".$message;

    if(mail("mathieu.ruiz@laplateforme.io","Nouveau formulaire de contact", $finalMessage) == false)
    {
        echo "ça marche pas";
    }
}