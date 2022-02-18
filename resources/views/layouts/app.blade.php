<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
		<meta charset="utf-8" />    
        <link rel="icon" href="{{asset('images/favicon.ico')}}">

        <title>EduAdmin - Dashboard</title>
        
        <!-- Vendors Style-->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="{{asset('main-semidark/css/vendors_css.css')}}">
        
        
        <style rel="stylesheet"  src="{{ mix('/css/app.css') }}"></style>
        <!-- Style-->  
        <link rel="stylesheet" href="{{asset('main-semidark/css/style.css')}}">
        <link rel="stylesheet" href="{{asset('main-semidark/css/skin_color.css')}}">
        {{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet"/> --}}

    </head>
    <body class="hold-transition light-skin sidebar-mini theme-primary fixed">
        <div id="app">
        </div>


        <script src="{{ mix('/js/app.js') }}"></script>
        
        <!-- Vendor JS -->
        <script src="{{asset('main-semidark/js/vendors.min.js')}}"></script>
        <script src="{{asset('main-semidark/js/pages/chat-popup.js')}}"></script>
        <script src="{{asset('assets/icons/feather-icons/feather.min.js')}}"></script>

        <script src="{{asset('assets/vendor_components/moment/min/moment.min.js')}}"></script>
        <script src="{{asset('assets/vendor_components/fullcalendar/fullcalendar.js')}}"></script>
        
        <!-- EduAdmin App -->
        <script src="{{asset('main-semidark/js/template.js')}}"></script>
        <script src="{{asset('main-semidark/js/pages/dashboard.js')}}"></script>
        <script src="{{asset('main-semidark/js/pages/calendar.js')}}"></script>
        
    </body>
</html>
