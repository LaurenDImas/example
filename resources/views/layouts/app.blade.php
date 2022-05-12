<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
		<meta charset="utf-8" />    
        <link rel="icon" href="https://hr.bintorocorp.co.id/assets/img/100x100.svg">

        <title>Skrisi</title>
        
        <!-- Vendors Style-->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <style rel="stylesheet"  src="{{ mix('/css/app.css') }}"></style>
        @if (in_array(request()->segment(1),['login','admin']))
            <link rel="stylesheet" href="{{asset('main-semidark/css/vendors_css.css')}}">
            <link rel="stylesheet" href="{{asset('main-semidark/css/style.css')}}">
            <link rel="stylesheet" href="{{asset('main-semidark/css/skin_color.css')}}">
        @else
            <link rel="stylesheet" href="{{asset('main-horizontal/css/vendors_css.css')}}">
            <link rel="stylesheet" href="{{asset('main-horizontal/css/horizontal-menu.css')}}">
            <link rel="stylesheet" href="{{asset('main-horizontal/css/style.css')}}">
            <link rel="stylesheet" href="{{asset('main-horizontal/css/skin_color.css')}}">
        @endif
    </head>
    <body   @if (in_array(request()->segment(1),['login','admin']))
                class="hold-transition light-skin sidebar-mini theme-primary fixed"
            @else
                class="layout-top-nav light-skin theme-primary"
            @endif
            >
        
        <div id="app">
    </div>


        <script src="{{ mix('/js/app.js') }}"></script>
        
        @if (in_array(request()->segment(1),['login','admin']))
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
        @else
            
            <script src="{{asset('main-horizontal/js/vendors.min.js')}}"></script>
            <script src="{{asset('assets/icons/feather-icons/feather.min.js')}}"></script>	
            
            <!-- EduAdmin App -->
            <script src="{{asset('main-horizontal/js/jquery.smartmenus.js')}}"></script>
            <script src="{{asset('main-horizontal/js/menus.js')}}"></script>
            <script src="{{asset('main-horizontal/js/template.js')}}"></script>
            
            {{-- detail --}}
            {{-- <script src="{{asset('main-horizontal/js/pages/ecommerce_details.js')}}"></script> --}}

        @endif
    </body>
</html>
