<?php
require_once ("../include/config.php"); require_once ("../include/authenticity.php");
?>


	<!DOCTYPE html>
	<html lang="en" ng-app="loginapp">

	<head>
		<meta charset="utf-8">
		<title>E3Core Authentication</title>

		<!-- Google Fonts -->
		<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700|Lato:400,100,300,700,900' rel='stylesheet'
		 type='text/css'>

		<link rel="stylesheet" href="css/animate.css">
		<!-- Custom Stylesheet -->
		<link rel="stylesheet" href="css/style.css">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	</head>

	<body ng-controller="MainController">
		<div class="container">
			<div class="top">
				<h1 id="title" class="hidden"><span id="logo">E3CORE <span></span></span>
				</h1>
			</div>
			<div ui-view></div>
		</div>
	</body>

	<script>
		$(document).ready(function () {
			$('#logo').addClass('animated fadeInDown');
			$("input:text:visible:first").focus();
		});
		$('#username').focus(function () {
			$('label[for="username"]').addClass('selected');
		});
		$('#username').blur(function () {
			$('label[for="username"]').removeClass('selected');
		});
		$('#password').focus(function () {
			$('label[for="password"]').addClass('selected');
		});
		$('#password').blur(function () {
			$('label[for="password"]').removeClass('selected');
		});

	</script>
	<script type="text/javascript" src="../bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="../bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="../js/controllers/uiKernal.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="controllers/signin.controller.js"></script>

	</html>