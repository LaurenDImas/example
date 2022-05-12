<template>
    <div>
        <header class="main-header">
            <div class="inside-header">
                <div class="d-flex align-items-center logo-box justify-content-center">
                    <!-- Logo -->
                    <a href="index.html" class="logo">
                    <!-- logo-->
                    <div class="logo-lg">
                        <span class="light-logo"><img src="https://hr.bintorocorp.co.id/assets/img/100x100.svg" style="width:40px;" alt="logo"></span>
                        <span class="dark-logo"><img src="https://hr.bintorocorp.co.id/assets/img/100x100.svg" style="width:40px;" alt="logo"></span>
                    </div>
                    </a>	
                </div>  
                <!-- Header Navbar -->
                <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                    <div class="app-menu">
                        <ul class="header-megamenu nav">
                        
                        </ul> 
                    </div>

                    <div class="navbar-custom-menu r-side">
                        <ul class="nav navbar-nav">	
                            <li class="btn-group nav-item d-lg-inline-flex  d-none">
                                <a href="#" data-provide="fullscreen" class=" gradient waves-effect waves-light nav-link full-screen" title="Full Screen">
                                    <i class="icon-Expand-arrows"><span class="path1"></span><span class="path2"></span></i>
                                </a>
                            </li>	
                            <!-- User Account-->
                            <li class="dropdown user user-menu">
                                <a href="#" class="waves-effect waves-light dropdown-toggle gradient" data-toggle="dropdown" title="User">
                                    <i class="icon-User"><span class="path1"></span><span class="path2"></span></i>
                                </a>
                                <ul class="dropdown-menu animated flipInX">
                                    <li class="user-body">
                                        <a class="dropdown-item" href="#"><i class="ti-user text-muted mr-2"></i> Profile</a>
                                        <a class="dropdown-item" href="#"><i class="ti-wallet text-muted mr-2"></i> My Wallet</a>
                                        <a class="dropdown-item" href="#"><i class="ti-settings text-muted mr-2"></i> Settings</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#"><i class="ti-lock text-muted mr-2"></i> Logout</a>
                                    </li>
                                </ul>
                            </li>	
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <nav class="main-nav gradient" role="navigation">

            <!-- Mobile menu toggle button (hamburger/x icon) -->
            <input id="main-menu-state" type="checkbox" />
            <label class="main-menu-btn" for="main-menu-state">
                <span class="main-menu-btn-icon"></span> Toggle main menu visibility
            </label>

            <!-- Sample menu definition -->
            <ul id="main-menu" class="sm sm-blue nav-center">
                <li :class="$route.name === 'home' ? 'current' : ''">
                    <router-link :to="{ name: 'home' }">
                        <i class="icon-Layout-4-blocks"><span class="path1"></span><span class="path2"></span></i>
                        <span>Home</span>
                    </router-link>
                </li>
                <li :class="['design','designDetail'].indexOf($route.name) !== -1 ? 'current' : ''">
                    <router-link :to="{ name: 'design' }">
                        <i class="icon-Layout-4-blocks"><span class="path1"></span><span class="path2"></span></i>
                        <span>Design</span>
                    </router-link>
                </li>
                <!-- <li :class="$route.name === 'calculator' ? 'current' : ''">
                    <router-link :to="{ name: 'calculator' }">
                        <i class="icon-Layout-4-blocks"><span class="path1"></span><span class="path2"></span></i>
                        <span>Calculator</span>
                    </router-link>
                </li> -->
            </ul>
        </nav>
    </div>
</template>
<style scoped>
    body{
        background: #DB1C23!important;
    }

    @media only screen and (min-width: 768px) {
        .nav-center{
            display: flex!important;
            justify-content: center!important;
        }
    }

    .gradient {
        background-color: #5F060D!important; 
        background-image: linear-gradient(to right, #9C1C1E ,#D11C23)!important; 
        color: #ffffff!important;
    }

    .sm-blue a {
        color: white!important;
        letter-spacing: 1px;
    }

    .theme-primary .sm-blue a:hover, .theme-primary .sm-blue a:active, .theme-primary .sm-blue a:focus {
        background: #DB1C23 !important;
        color: #ffffff !important;
    }

    .theme-primary .sm-blue li.current > a, .theme-primary .sm-blue li.highlighted > a {
        background: #DB1C23 !important;
        color: #ffffff !important;
    }
</style>