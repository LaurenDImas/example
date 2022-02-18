<template>

    <div class="row">
        <div class="col-12">
            <div class="box">
                <div class="box-header with-border">
                    <h4 class="box-title">{{$route.meta.cardHeader}}</h4>
                </div>
                <!-- /.box-header -->
                <form class="form" v-if="!loading">
                    <div class="box-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Name</label>
                                    <p>{{data.name}}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>E-mail</label>
                                    <p>{{ data.email }}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Created At</label>
                                    <p>{{ data.created_at | moment("HH:MM DD-MM-YYYY") }}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Updated At</label>
                                    <p>{{ data.updated_at | moment("HH:MM DD-MM-YYYY") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
                <BeatLoader
                            color="#000000"
                            :loading="loading"
                            class="custom-class text-center"
                            style="padding:100px;"
                            :size='10'
                        />
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
        this.loading = true;
        this.edit(this.$route.params.id)
            .then((response) => {
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
            })
    },
    computed:{
        ...mapState("users",{
            data: state => state.data
        })
    },
    methods: {
        ...mapMutations("users", ["CLEAR_DATA"]),
        ...mapActions("users", ["edit"])
    },
    destroyed() {
        this.CLEAR_DATA();
    }
}

</script>