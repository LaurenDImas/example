<template>
<div>
	<div>
		<div id="loader"></div>
		<div class="wrapper">
			
			<Header v-if="isAuth"></Header>
		
			<Sidebar v-if="isAuth"></Sidebar>

			<!-- Content Wrapper. Contains page content -->
			<div :class="isAuth ? 'content-wrapper' : 'hold-transition theme-primary bg-img'" :style="{'background-image: url(images/auth-bg/bg-1.jpg);height:100vh!important' : !isAuth}">
				<div :class="{'container-full' : isAuth}">
					<!-- Main content -->
					<section :class="{'content' : isAuth}">
						<Breadcrumbs></Breadcrumbs>
						<router-view></router-view>
					</section>
					<!-- /.content -->
				</div>
			</div>
				<!-- /.content-wrapper -->
			<Footer v-if="isAuth"></Footer>

			<!-- Control Sidebar -->
			<SidebarLog v-if="isAuth"></SidebarLog>
			<!-- /.control-sidebar -->
			
			<!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
			<div class="control-sidebar-bg"></div>
			
		</div>
		<!-- ./wrapper -->
		
		<!-- ./side demo panel -->
		<!-- Sidebar -->
		<ChatBox v-if="isAuth"></ChatBox>
	</div>
	<!-- <div v-else>

		<div  class="hold-transition theme-primary bg-img" style="background-image: url(images/auth-bg/bg-1.jpg);height:100vh!important">
			<router-view></router-view>
		</div>
	</div> -->
</div>	
</template>

<script>
    import Sidebar from "./Sidebar";
	import Header from "./Header";
	import Footer from './Footer';
	import ChatBox from "./ChatBox";
	import SidebarLog from "./SidebarLog";
	import {mapState, mapGetters} from 'vuex';
	import Breadcrumbs from "../shared/components/Breadcrumbs.vue";

	export default {
		computed:{
			...mapState(['token']),
			...mapGetters(['isAuth'])
		},
       	components: {
           	Sidebar,
		   	Header,
            Footer,
			ChatBox,
			SidebarLog,
			Breadcrumbs
       } 
    }
</script>
