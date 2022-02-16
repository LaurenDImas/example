<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
		<meta charset="utf-8" />    
        <link rel="icon" href="{{asset('images/favicon.ico')}}">

        <title>EduAdmin - Dashboard</title>
        
        <!-- Vendors Style-->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="{{asset('main-semidark/css/vendors_css.css')}}">
        
        <!-- Style-->  
        <link rel="stylesheet" href="{{asset('main-semidark/css/style.css')}}">
        <link rel="stylesheet" href="{{asset('main-semidark/css/skin_color.css')}}">
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
        {{-- <script>
            (function () {
                // hold onto the drop down menu                                             
                var dropdownMenu;

                // and when you show it, move it to the body                                     
                $(window).on('show.bs.dropdown', function (e) {

                // grab the menu        
                dropdownMenu = $(e.target).find('.dropdown-menu');

                // detach it and append it to the body
                $('body').append(dropdownMenu.detach());

                // grab the new offset position
                var eOffset = $(e.target).offset();

                // make sure to place it where it would normally go (this could be improved)
                dropdownMenu.css({
                    'display': 'block',
                        'top': eOffset.top + $(e.target).outerHeight(),
                        'left': eOffset.left
                });
                });

                // and when you hide it, reattach the drop down, and hide it normally                                                   
                $(window).on('hide.bs.dropdown', function (e) {
                    $(e.target).append(dropdownMenu.detach());
                    dropdownMenu.hide();
                });
            })();
        </script> --}}
    </body>
</html>
