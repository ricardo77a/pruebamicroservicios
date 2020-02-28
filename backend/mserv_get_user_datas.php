<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Origin, X-Requested-Width, Content-Type, Accept');

	require_once('main_conection.php');

	session_start();
	$postdata = file_get_contents('php://input');
	$obj = json_decode($postdata);

	header('Content-Type: application/json;charset=UTF-8');

	$action = call_user_func('getUserDatas', $obj);

	$response = json_encode($action, JSON_UNESCAPED_UNICODE);
	$len = strlen($response);

	header('Content-length: {$len}');
	die($response);
	function getUserDatas($obj){
		try {
			$dbc = Database::Conectar();
			$sql = 'SELECT * FROM usuarios';
			$stmt = $dbc->prepare($sql);
			$stmt->execute();

			$data = $stmt->fetchAll(pdo::FETCH_OBJ);

			return $data;
		}catch (PDOException $errMSG){
			return 'tienes un error';
		}
	}
 ?>
