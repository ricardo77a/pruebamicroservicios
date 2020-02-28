<?php


define('HOST', 'localhost');
define('USER', 'root');
define('BD', 'microservicios');
define('PASS', '');

class Database

{

    public static function Conectar()

    {

        $pdo =  new PDO('mysql:host='.HOST.';dbname='.BD.';charset=utf8', USER, PASS);

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $pdo;

    }

}
