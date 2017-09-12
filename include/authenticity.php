<?php

// if logged in an navigated to login page redirect him to the main page
$actual_link = "$_SERVER[REQUEST_URI]";
if(isset($_COOKIE['securityToken'])){
    
    if($actual_link == "/E3Core-App/auth/"){
        header("Location: ../");
    }
}else{
    if($actual_link == "/E3Core-App/"){
        header("Location: auth/");
    }
}   

?>