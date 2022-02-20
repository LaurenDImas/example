<template>
    <div class="container h-p100 multinav-scroll" style="margin-top:100px;">
		<div class="row align-items-center justify-content-md-center h-p100">	
			<div class="col-12 align-items-center">
				<div class="row justify-content-center align-items-center no-gutters">
					<div class="col-lg-5 col-md-5 col-12">
						<div class="bg-white  rounded30 shadow-lg">
							<div class="content-top-agile p-20 pb-0">
								<h2 class="text-primary">Let's Get Started</h2>
								<p class="mb-0">Sign in to continue to WebkitX.</p>							
							</div>
							<div class="p-40">
								<div v-if="errorAuth" class="alert mb-2 alert-danger alert-dismissible">
									<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
									{{errorAuth}}
								</div>
								<form  method="post">
									<div class="form-group mb-3">
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
											</div>
											<input 
												type="email"  
												class="form-control pl-15 bg-transparent" 
												placeholder="Email"
												v-model="data.email"
												:class="{
                                                    'is-invalid':
                                                        errors.email ||
                                                        errors.invalid
                                                }"
											/>
										</div>
										<span
											class="text-danger"
											v-if="errors.email"
										>
											{{ errors.email[0] }}
										</span>
									</div>
									<div class="form-group mb-3">
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text  bg-transparent"><i class="ti-lock"></i></span>
											</div>
											<input 
												type="password"  
												class="form-control pl-15 bg-transparent" 
												placeholder="password"
												v-model="data.password"
												:class="{
                                                    'is-invalid':
                                                        errors.password ||
                                                        errors.invalid
                                                }"
											/>
										</div>
										<span
											class="text-danger"
											v-if="errors.password"
										>
											{{ errors.password[0] }}
										</span>
									</div>
									  <div class="row">
										<div class="col-12 text-center">
											<button  type="submit" @click.prevent="postLogin" class="btn btn-danger mt-10">
												<span v-if="!loading"> Sign In</span>
											  	<!-- SIGN IN -->
												<BeatLoader
													color="#FFFFFF"
													:loading="loading"
													class="custom-class"
													:size='6'
												/>
											</button>
										</div>
										<!-- /.col -->
									</div>
								</form>	
								<div class="text-center">
									<p class="mt-15 mb-0">Don't have an account? <a href="auth_register.html" class="text-warning ml-5">Sign Up</a></p>
								</div>	
							</div>						
						</div>
						<div class="text-center">
						  <p class="mt-20 text-white">.</p>
						  <!-- <p class="gap-items-2 mb-20">
							  <a class="btn btn-social-icon btn-round btn-facebook" href="#"><i class="fa fa-facebook"></i></a>
							  <a class="btn btn-social-icon btn-round btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
							  <a class="btn btn-social-icon btn-round btn-instagram" href="#"><i class="fa fa-instagram"></i></a>
							</p>	 -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
	data(){
		return {
			loading: false,
			data   : {
				email		: "",
				password	: "",
			}
		}
	},
	created(){
		if(this.isAuth){
			this.$router.push({ name: "dashboard" });
		}
	},
	computed:{
		...mapGetters(['isAuth']),
		...mapState(['errors','errorAuth']),
	},
	methods:{
		...mapActions("auth", ['submit']),
		...mapMutations(['CLEAR_ERRORS']),
		postLogin(){
			this.loading = true;
			this.submit(this.data).then(()=>{
				if (this.isAuth) {
                    this.CLEAR_ERRORS();
                    this.$router.push({ name: "users" });
                }
				this.loading = false;
			})
		}
	}
}
</script>