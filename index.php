<?php
require_once ("include/config.php"); require_once ("include/authenticity.php");
?>

<!DOCTYPE html>
<html lang="en" class="" ng-app="e3core">

<head>
  <meta charset="utf-8" />
  <title>E3Core Application</title>
  <meta name="description" content="app, web app, responsive, responsive layout, admin, admin panel, admin dashboard, flat, flat ui, ui kit, AngularJS, ui route, charts, widgets, components"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <link rel="stylesheet" href="../libs/assets/animate.css/animate.css" type="text/css" />
  <link rel="stylesheet" href="../libs/assets/font-awesome/css/font-awesome.min.css" type="text/css" />
  <link rel="stylesheet" href="../libs/assets/simple-line-icons/css/simple-line-icons.css" type="text/css" />
  <link rel="stylesheet" href="../libs/jquery/bootstrap/dist/css/bootstrap.css" type="text/css" />

  <link rel="stylesheet" href="css/font.css" type="text/css" />
  <link rel="stylesheet" href="css/app.css" type="text/css" />
  <link rel="stylesheet" href="css/style.css" type="text/css" />

</head>

<body ng-controller="MainController">
  <div class="app app-header-fixed ">

  <div ng-include="'partials/include.header.html'"></div>


    <!-- aside -->
    <aside id="aside" class="app-aside hidden-xs bg-dark">
      <div class="aside-wrap">
        <div class="navi-wrap">
          <!-- user -->
          <div class="clearfix hidden-xs text-center hide" id="aside-user">
            <div class="dropdown wrapper">
              <a ng-click="navigateToState('profile')">
                <span class="thumb-lg w-auto-folded avatar m-t-sm">
                  <img ng-src="data:image/JPEG;base64,{{$root.profileDetails.userImage}}" class="img-full" alt="...">
                </span>
              </a>
              <a data-toggle="dropdown" class="dropdown-toggle hidden-folded">
                <span class="clear">
                  <span class="block m-t-sm">
                    <strong class="font-bold text-lt">{{$root.profileDetails.FirstName}} {{$root.profileDetails.LastName}}</strong> 
                    <b class="caret"></b>
                  </span>
                  <span class="text-muted text-xs block">Art Director</span>
                </span>
              </a>
              <!-- dropdown -->
              <ul class="dropdown-menu animated fadeInRight w hidden-folded">
                <li class="wrapper b-b m-b-sm bg-info m-t-n-xs">
                  <span class="arrow top hidden-folded arrow-info"></span>
                  <div>
                    <p>300mb of 500mb used</p>
                  </div>
                  <div class="progress progress-xs m-b-none dker">
                    <div class="progress-bar bg-white" data-toggle="tooltip" data-original-title="50%" style="width: 50%"></div>
                  </div>
                </li>
                <li>
                  <a href>Settings</a>
                </li>
                <li>
                  <a ng-click="navigateToState('profile')">Profile</a>
                </li>
                <li>
                  <a href>
                    <span class="badge bg-danger pull-right">3</span>
                    Notifications
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                <a href ng-click="logoutSession()">Logout</a>
                </li>
              </ul>
              <!-- / dropdown -->
            </div>
            <div class="line dk hidden-folded"></div>
          </div>
          <!-- / user -->

          <!-- nav -->
          <nav ui-nav class="navi clearfix">
            <ul class="nav">
              <div ng-repeat="(key,categoryItems) in mainMenu | groupBy: 'category'">
                <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                  <span>{{key}}</span>
                </li>
                <div ng-repeat="menuitem in mainMenu | filter : { category :key}">
                  
                
                
                <li ng-if="menuitem.subMenuItems.length > 0">
                    <a href class="auto">      
                        <span class="pull-right text-muted">
                          <i class="fa fa-fw fa-angle-right text"></i>
                          <i class="fa fa-fw fa-angle-down text-active"></i>
                        </span>
                        <i class="glyphicon {{menuitem.icon}} icon text-primary-dker"></i>
                        <span class="hidden-folded">{{menuitem.displayName}}</span>
                    </a>
                    <ul class="nav nav-sub dk">
                      <li class="nav-sub-header">
                        <a href>
                          <span>{{menuitem.displayName}}</span>
                        </a>
                      </li>
                      <li ng-repeat="subitem in menuitem.subMenuItems">
                        <a href ng-click="navigateToState(subitem,menuitem)">
                      <b ng-if="subitem.noOfNotifications > 0" class="badge bg-info pull-right">{{subitem.noOfNotifications}}</b>
                      <span>{{subitem.displayName}}</span>
                    </a>
                      </li>
                    </ul>
                  </li>

                  
                  
                  
                  
                  <li ng-if="menuitem.subMenuItems.length == 0">
                    <a href ng-click="navigateToState(menuitem)">
                      <b ng-if="menuitem.noOfNotifications > 0" class="badge bg-info pull-right">{{menuitem.noOfNotifications}}</b>
                      <i class="glyphicon {{menuitem.icon}} icon text-info-lter"></i>
                      <span class="font-bold hidden-folded">{{menuitem.displayName}}</span>
                    </a>
                  </li>
                </div>
                <div>
                  <li class="line dk"></li>
            </ul>
          </nav>
          <!-- nav -->

          <!-- aside footer -->
          <!-- <div class="wrapper m-t">
            <div class="text-center-folded">
              <span class="pull-right pull-none-folded">60%</span>
              <span class="hidden-folded">Milestone</span>
            </div>
            <div class="progress progress-xxs m-t-sm dk">
              <div class="progress-bar progress-bar-info" style="width: 60%;">
              </div>
            </div>
            <div class="text-center-folded">
              <span class="pull-right pull-none-folded">35%</span>
              <span class="hidden-folded">Release</span>
            </div>
            <div class="progress progress-xxs m-t-sm dk">
              <div class="progress-bar progress-bar-primary" style="width: 35%;">
              </div>
            </div>
          </div> -->
          <!-- / aside footer -->
          </div>
          </div>
    </aside>
    <!-- / aside -->


    <!-- content -->
    <div id="content" class="app-content" role="main">
      <div ui-view></div>

      
          
        

      </div>
    </div>
    <!-- /content -->

    <!-- footer -->
    <footer id="footer" class="app-footer" role="footer">
      <div class="wrapper b-t bg-light">
        <span class="pull-right">2.2.0 <a href ui-scroll="app" class="m-l-sm text-muted"><i class="fa fa-long-arrow-up"></i></a></span>        &copy; {{ currentYear | date : "yyyy" }} Copyright. Team E3Core
      </div>
    </footer>
    <!-- / footer -->



    </div>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="../libs/jquery/jquery/dist/jquery.js"></script>
    <script src="../libs/jquery/bootstrap/dist/js/bootstrap.js"></script>
    <script src="js/ui-load.js"></script>
    <script src="js/ui-jp.config.js"></script>
    <script src="js/ui-jp.js"></script>
    <script src="js/ui-nav.js"></script>
    <script src="js/ui-toggle.js"></script>
    <script src="js/ui-client.js"></script>

    <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-ui-utils/ui-utils.js"></script>
    <script type="text/javascript" src="bower_components/angular-filter/dist/angular-filter.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>

    <script type="text/javascript" src="js/controllers/uiKernal.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="js/controllers/main.controller.js"></script>
    <script type="text/javascript" src="js/controllers/app.usercreation.js"></script>
    <script type="text/javascript" src="js/controllers/app.jiraprojects.js"></script>
    <script type="text/javascript" src="js/controllers/report.sample.js"></script>
    <script type="text/javascript" src="js/controllers/logins.sample.js"></script>


</body>

</html>