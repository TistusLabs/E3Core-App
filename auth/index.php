<?php
require_once ("../include/config.php"); require_once ("../include/authenticity.php");
?>


<!DOCTYPE html>
<html ng-app="loginapp">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=1,initial-scale=1,user-scalable=1" />
	<title>E3Core Authentication</title>

	<link href="http://fonts.googleapis.com/css?family=Lato:100italic,100,300italic,300,400italic,400,700italic,700,900italic,900" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/styles.css" />
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body ng-controller="MainController">
	<section class="container login-form">
	<div ui-view></div>
	</section>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	
	<script type="text/javascript" src="../bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="../bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="../js/controllers/uiKernal.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="controllers/signin.controller.js"></script>
</body>
</html>