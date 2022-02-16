<template>

    <div class="row">
        <div class="col-12">
            <div class="box">
                <div class="box-header with-border">
                    <h4 class="box-title">{{$route.meta.cardHeader}}</h4>
                </div>
                <!-- /.box-header -->
                <form class="form">
                    <div class="box-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" v-model="data.name" :class="{'is-invalid': errors.name}" class="form-control" placeholder="Name">
                                    <p
                                            class="text-danger"
                                            v-if="errors.name"
                                        >
                                            {{ errors.name[0] }}
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>E-mail</label>
                                    <input type="text" v-model="data.email" :class="{'is-invalid': errors.email}" class="form-control" placeholder="E-mail">
                                    <p
                                            class="text-danger"
                                            v-if="errors.email"
                                        >
                                            {{ errors.email[0] }}
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" v-model="data.password" :class="{'is-invalid': errors.password}" class="form-control" placeholder="Password">
                                    <p
                                            class="text-danger"
                                            v-if="errors.password"
                                        >
                                            {{ errors.password[0] }}
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Password Confirmation</label>
                                    <input type="password" v-model="data.password_confirmation" :class="{'is-invalid': errors.password_confirmation}" class="form-control" placeholder="Password Confirmation">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer">
                        <router-link 
                            :to="{ name: 'users' }"
                            type="button" 
                            class="btn btn-rounded btn-warning btn-outline mr-1"
                        >
                            <i class="ti-trash"></i> Cancel
                        </router-link>
                        <button 
                            type="submit" 
                            @click.prevent="submitForm" 
                            class="btn btn-rounded btn-primary btn-outline"
                            :disabled="loading"
                        >
                            <span v-if="!loading"><i class="ti-save-alt"></i> Save</span>
                            <!-- SIGN IN -->
                            <BeatLoader
                                color="#FFFFFF"
                                :loading="loading"
                                class="custom-class"
                                :size='6'
                            />
                        </button>
                    </div>  
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    name : "edit-users",
    data() {
        return {
            loading : false
        }
    },
    created(){
        this.edit(this.$route.params.id);
    },
    computed:{
        ...mapState(["errors"]),
        ...mapState("users",{
            data: state => state.data
        })
    },
    methods: {
        ...mapMutations("users", ["CLEAR_DATA"]),
        ...mapActions("users", ["edit","update"]),
        async submitForm(){
            this.loading = true;
            try {
                const response = await this.update(this.$route.params.id);
                if(response.data === "undefined" || response.data === ""){
                    this.loading = false;
                    return false;
                }
                this.$router.push({ name: "users" });
                this.alert("Successfully edit User Data ", 1);
            } catch (error) {
                console.log(error)
            }
            this.loading = false;
        }
    },
    destroyed() {
        this.CLEAR_DATA();
    }
}

</script>