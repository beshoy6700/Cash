<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }} - @yield('title')</title>
    <link rel="apple-touch-icon" href="{{asset('images/booking.png')}}">
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('images/booking.png')}}">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Quicksand:300,400,500,700"
          rel="stylesheet">
    <link href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
          rel="stylesheet">
    <!-- BEGIN VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('modern/app-assets/css-rtl/vendors.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('modern/app-assets/vendors/css/forms/icheck/icheck.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('modern/app-assets/vendors/css/forms/icheck/custom.css')}}">
    <!-- END VENDOR CSS-->
    <!-- BEGIN MODERN CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('modern/app-assets/css-rtl/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('modern/app-assets/css-rtl/custom-rtl.css')}}">
    <!-- END MODERN CSS-->
    <!-- BEGIN Page Level CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('modern/app-assets/css-rtl/core/menu/menu-types/horizontal-menu.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('modern/app-assets/css-rtl/core/colors/palette-gradient.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('modern/app-assets/css-rtl/pages/login-register.css')}}">
    <!-- END Page Level CSS-->
    <!-- BEGIN Custom CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('modern/assets/css/style-rtl.css')}}">
</head>
<body class="horizontal-layout horizontal-menu horizontal-menu-padding 1-column   menu-expanded blank-page blank-page"
      data-open="click" data-menu="horizontal-menu" data-col="1-column">


@yield('content')

<!-- BEGIN VENDOR JS-->
<script src="{{asset('modern/app-assets/vendors/js/vendors.min.js')}}" type="text/javascript"></script>
<!-- BEGIN VENDOR JS-->
<!-- BEGIN PAGE VENDOR JS-->
<script type="text/javascript" src="{{asset('modern/app-assets/vendors/js/ui/jquery.sticky.js')}}"></script>
<script src="{{asset('modern/app-assets/vendors/js/forms/icheck/icheck.min.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/vendors/js/forms/validation/jqBootstrapValidation.js')}}"
        type="text/javascript"></script>
<!-- END PAGE VENDOR JS-->
<!-- BEGIN MODERN JS-->
<script src="{{asset('modern/app-assets/js/core/app-menu.js')}}" type="text/javascript"></script>
<script src="{{asset('modern/app-assets/js/core/app.js')}}" type="text/javascript"></script>
<!-- END MODERN JS-->
<!-- BEGIN PAGE LEVEL JS-->
<script src="{{asset('modern/app-assets/js/scripts/forms/form-login-register.js')}}" type="text/javascript"></script>
<!-- END PAGE LEVEL JS-->

</body>
</html>
