<template>
<div>
    <div id="loader"></div>
	
    <Header></Header>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <div class="container-full">
            <!-- Main content -->
            
            <section class="content">
                <router-view></router-view>
            </section>
            <!-- /.content -->
        </div>
    </div>
    <!-- /.content-wrapper -->
    <Footer></Footer>

<!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>

</div>
</template>

<script>
// import Sidebar from "./Sidebar";

import Header from "./Header";
import Footer from './Footer';
// import ChatBox from "./ChatBox";
// import SidebarLog from "./SidebarLog";
// import {mapState, mapGetters} from 'vuex';
// import Breadcrumbs from "../shared/components/Breadcrumbs.vue";

export default {
    // computed:{
    //     ...mapState(['token']),
    //     ...mapGetters(['isAuth'])
    // },
    components: {
        // Sidebar,
        Header,
        Footer,
        // ChatBox,
        // SidebarLog,
        // Breadcrumbs
    } 
}
</script>