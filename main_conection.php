<?php


define('HOST', 'localhost');
define('USER', 'ubuntu');
define('BD', 'microservicios');
define('PASS', '123qwe');

class Database

{

    public static function Conectar()

    {

        $pdo =  new PDO('mysql:host='.HOST.';dbname='.BD.';charset=utf8', USER, PASS);

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $pdo;

    }

}
