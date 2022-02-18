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
                                    <input type="text" v-model="data.email"  :class="{'is-invalid': errors.email}" class="form-control">
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
                                    <label for="">Role</label>
                                    <select2 v-model="roleId" :url="'../../api/list-select-role'" :template="'role_id'"></select2>
                                    <p
                                        class="text-danger m-0 p-0"
                                        v-if="errors.role_id"
                                    >
                                        {{ errors.role_id[0] }}
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Upload Photo</label>
                                    <input type="file"  @change="uploadImage" class="form-control photo"  :class="{'is-invalid': errors.photo}">
                                    <p
                                            class="text-danger"
                                            v-if="errors.photo"
                                        >
                                            {{ errors.photo[0] }}
                                        </p>
                                    <img  :src="data.file_src" class="mt-2 photo-detail" style="height:100px!important;">
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
import Select2 from "../../../shared/components/Select2.vue";

export default {
    name : "edit-users",
    components :{
        Select2
    },
    data() {
        return {
            roleId:"",
            loading : false
        }
    },
    
    async created(){
        await this.edit(this.$route.params.id);
        this.editSelect2("#role_id");
    },
    computed:{
        ...mapState(["errors"]),
        ...mapState("users",{
            data: state => state.data
        })
    },
    watch:{
        roleId(role_id){
            this.data.role_id = role_id;
        }
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
        },
        uploadImage(e) {
            const file = e.target.files[0];
            const size = file.size/1024/1024;

            if (size > 1) { 
                this.alert("Makasimal photo 1 MB", 2);
                $(".photo-detail").attr("src","");
                $(".photo").val(''); //for clearing with Jquery 
            }else{
                let reader = new FileReader();
                reader.onloadend = file => {
                    $(".photo-detail").attr("src",file.target.result);
                    this.data.photo = reader.result;
                };
                reader.readAsDataURL(file);
            }
            
        },
        editSelect2(id){
            $(`${id}`).append(
                $(`<option selected value=${this.data.role_id}>${this.data.role_name}</option>`)
            ).trigger('change');
        }
    },
    destroyed() {
        this.CLEAR_DATA();
    }
}

</script>