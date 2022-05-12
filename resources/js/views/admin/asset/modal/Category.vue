<template>
    <div>
        <!-- modal Area -->              
        <div class="modal fade" id="modal-default">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Kategori</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form class="form">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Kategori</label>
                                        <input type="text"  
                                        v-model="data.name"
                                        :class="{'is-invalid': errors.name}"
                                        class="form-control" placeholder="Kategori">
                                        <p
                                            class="text-danger"
                                            v-if="errors.name"
                                        >
                                            {{ errors.name[0] }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-sm btn-primary float-right">Save changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                            <div class="row mb-3">
                                <rows v-model="rows"></rows>
                                <search v-model="search"></search>
                            </div>
                            <div class="table-responsive mb-2">
                                <table class="table table-striped table-bordered" style="width:100%">
                                    <table-thead
                                        :thead="{
                                            'no' : {'title':'No', 'hasSort':false},
                                            'name' : {'title':'Name', 'hasSort':true},
                                            'created_at' : {'title':'Created At', 'hasSort':true},
                                            'aksi' : {'title':'Aksi', 'hasSort':false},
                                        }"
                                        :sort ='sort'
                                        @name="sortBy('name')"
                                        @created_at="sortBy('created_at')"
                                    ></table-thead>
                                    <tbody v-if="!loading">
                                        <tr v-if="datas.data.length < 1">
                                            <td colspan="100" class="text-center">Data tidak ditemukan</td>
                                        </tr>
                                        <tr v-else v-for="(data , index) in datas.data" :key="index">
                                            <td width="1%">{{ index+=1 }}</td>
                                            <td width="30%">{{ data.name }}</td>
                                            <td width="30%">{{ data.created_at | moment("HH:MM DD-MM-YYYY") }}</td>
                                            <td width="1%">
                                                <actions :id="data.id"></actions>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr>
                                            <td colspan="100" class="text-center">
                                                <BeatLoader
                                                            color="#000000"
                                                            :loading="loading"
                                                            class="custom-class"
                                                            :size='6'
                                                        />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <paginate
                                    v-model="page"
                                    :page-count="this.$store.state.roles.last_page"
                                    :prev-text="'Prev'"
                                    :next-text="'Next'"
                                    :container-class="'pagination mt-3 mb-1 mt-md-0 p-0'"
                                    :pageClass="'page-item'"
                                    :pageLinkClass="'page-link'"
                                    :prevClass="'page-item'"
                                    :prevLinkClass="'page-link'"
                                    :nextClass="'page-item'"
                                    :nextLinkClass="'page-link'"
                                >
                                </paginate>
                            </div>
                        <small>
                            Jumlah Data : {{datas.total}}
                        </small>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    data(){
        return {
            loading: false,
        }
    },
    computed:{
        ...mapState(['errors']),
        ...mapState('category',{
            data: state => state.data
        })
    },
    methods:{
        ...mapMutations("category", ['CLEAR_DATA']),
        ...mapActions('category', ["submit"]),

        async submitForm(){
            this.loading = true;
            try {
                const response = await this.submit();
                if(response.data = "undifined" || response.data === ""){
                    this.loading = false;
                    return false;
                }
                this.alert("Successfully create Role Data ", 1);
            } catch (error) {
                console.log(error);
            }

            this.loading = false;
        },
        destroyed(){
            this.CLEAR_DATA();
        }
    }
}
</script>