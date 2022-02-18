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
                    </div>
                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                    <router-link 
                        :to="{ name: 'roles' }"
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
    name : "create-roles",
    data() {
        return {
            loading : false
        }
    },
    computed:{
        ...mapState(["errors"]),
        ...mapState("roles",{
            data: state => state.data
        })
    },
    methods: {
        ...mapMutations("roles", ["CLEAR_DATA"]),
        ...mapActions("roles", ["submit"]),
        async submitForm(){
            this.loading = true;
            try {
                const response = await this.submit();
                if(response.data === "undefined" || response.data === ""){
                    this.loading = false;
                    return false;
                }
                this.$router.push({ name: "roles" });
                this.alert("Successfully create Role Data ", 1);
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