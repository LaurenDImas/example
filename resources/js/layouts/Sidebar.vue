<template>
    <aside class="main-sidebar">
        <!-- sidebar-->
        <section class="sidebar position-relative">	
            <div class="multinav">
            <div class="multinav-scroll" style="height: 100%;">	
                <!-- sidebar menu-->
                <ul class="sidebar-menu" data-widget="tree">	
                    <li class="header">Dashboard & Apps</li>
                    <li :class="$route.name === 'dashboard' ? 'active' : ''">
                        <router-link :to="{ name: 'dashboard' }">
                            <i class="icon-Layout-4-blocks"><span class="path1"></span><span class="path2"></span></i>
                            <span>Dashboard</span>
                        </router-link>
                    </li>

                    <li class="header">Master</li>
                    <li :class="$route.name === 'users' ? 'active' : ''">
                        <router-link :to="{ name: 'users' }">
                            <i class="icon-User"><span class="path1"></span><span class="path2"></span></i>
                            <span>Users</span>
                        </router-link>
                    </li> 	     
                </ul>
            </div>
            </div>
        </section>
        <div class="sidebar-footer">
            <a href="javascript:void(0)" class="link" data-toggle="tooltip" title="" data-original-title="Settings" aria-describedby="tooltip92529"><span class="icon-Settings-2"></span></a>
            <a href="mailbox.html" class="link" data-toggle="tooltip" title="" data-original-title="Email"><span class="icon-Mail"></span></a>
            <a href="javascript:void(0)" class="link" data-toggle="tooltip" title="" data-original-title="Logout"><span class="icon-Lock-overturning"><span class="path1"></span><span class="path2"></span></span></a>
        </div>
    </aside>
</template>
