<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Skyplus Agencies</title>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    {{ HTML::script('js/jquery-1.11.0.js') }}
    <!--    <script src="js/jquery-1.11.0.js"></script>-->

    <!-- Bootstrap -->
    {{HTML::style('css/bootstrap.min.css')}}
    <!--    <link href="css/bootstrap.min.css" rel="stylesheet">-->

    <!--Jasny css -->
    {{ HTML::script('jasny-bootstrap/css/jasny-bootstrap.min.css') }}

    <!-- custom css -->
    {{HTML::style('css/landingpage.css')}}
    {{HTML::style('css/global.css')}}
    {{HTML::style('css/nav.css')}}
    {{HTML::style('css/details.css')}}
    <!--    <link rel="stylesheet" href="css/landingpage.css" rel="stylesheet">-->
    <!--    <link rel="stylesheet" href="css/global.css" rel="stylesheet">-->
    <!--    <link rel="stylesheet" href="css/nav.css" rel="stylesheet">-->

    <!-- google fonts -->
    {{HTML::style('http://fonts.googleapis.com/css?family=Open+Sans')}}
    <!--    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>-->


    <!-- Animate css -->
    {{HTML::style('css/animate.css')}}
    {{HTML::style('css/simple-sidebar.css')}}
    <!--    <link rel="stylesheet" href="css/animate.css">-->

    <!-- font awesome -->
    {{HTML::style('font-awesome-4.2.0/css/font-awesome.min.css')}}

    <!--    <link rel="stylesheet" type="text/css" href="font-awesome-4.2.0/css/font-awesome.min.css">-->
<!--    <style rel="stylesheet" type="text/css">-->
<!--        #content{-->
<!--            padding-top: 100px;-->
<!--        }-->
<!--        #nav-bar-links{-->
<!--            background-color: #0a61ff;-->
<!--            border-radius: 2px;-->
<!--        }-->
<!--    </style>-->



</head>
<body>

<!-- navigation bar -->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/"><img src="/images/skyplus_only.png" height="50" width="auto"</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="#"><span class="sr-only">(current)</span></a></li>
                <li><a href="#"></a></li>

            </ul>

            <ul class="nav navbar-nav navbar-right" id="nav-bar-links">
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Task <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="/admin">Admin Home </a></li>
                        <li><a href="/admin/create-new-property">Create A new property</a></li>
                        <li><a href="#">View Property Lists</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </li>
                @if (Auth::check())
                <li><a href="/admin/logout">{{ Auth::user()->login_id }}</a>
                </li>
                @else
                <li><a href="/admin/login">Admin Login</a></li>
                @endif
                <!-- <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>

                  </ul>
                </li> -->
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<!-- end of navigation bar -->
<div class="container">
    <div id="content">

    </div>
    <div class="row">
                @yield('body')
    </div>
</div>
<!-- start of footer section -->

<footer class="text-center">

    <div class="footer-below">
        <div class="container">
            <div class="row">

                <div class="col-lg-4">
                    <ul>
                        <p><a href="">About US</a></p>
                        <p><a href="">Contact Us</a></p>
                        <p><a href="">Services</a></p>

                    </ul>
                </div>
                <div class="col-lg-4">
                    <h3></h3>
                    <ul class="list-inline intro-social-buttons">
                        <li>
                            <a href="https://twitter.com" ><i class="fa fa-twitter fa-3x"></i> <span class="network-name"></span></a>
                        </li>


                        <li>
                            <a href="https://facebook.com"><i class="fa fa-facebook fa-3x"></i> <span class="network-name"></span></a>
                        </li>
                        <li>
                            <a href="https://facebook.com"><i class="fa  fa-google-plus fa-3x"></i> <span class="network-name"></span></a>
                        </li>

                    </ul>







                    <p>Skyplus Real Estate 2015<p>
                </div>
                <div class="col-lg-4">
                    <p>Caxton House, Koinange Street, Opp. GPO, </p>
                    <p>  Second Floor, Room 5,</p>
                    <p> P.O. Box 103793-00101, Nairobi</p>
                    <p><i class="fa fa-mobile fa-fw"></i> 0725-380 152 | 0720-926 158</i></p>
                    <p> Email: skyplusagencies@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
</footer>



















<!-- Include all compiled plugins (below), or include individual files as needed -->
<!--<script src="js/bootstrap.min.js"></script>-->
{{ HTML::script('js/bootstrap.min.js') }}
{{ HTML::script('jasny-bootstrap/js/jasny-bootstrap.min.js') }}



</body>
</html>