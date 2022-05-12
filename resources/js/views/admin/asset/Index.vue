<template>

    <div class="row">
        <div class="col-12">
            <div class="box">
                <div class="box-header">						
                    <h4 class="box-title">{{$route.meta.cardHeader}}</h4>
                </div>
                <div class="box-body">
                    <div class="row mb-3">
                        <rows v-model="rows"></rows>
                        <search v-model="search"></search>
                    </div>
                    <div class="table-responsive mb-2">
                        <table class="table table-striped table-bordered" style="width:100%">
                            <table-thead
                                :thead="{
                                    'no' : {'title':'No', 'hasSort':false},
                                    'kode' : {'title':'Kode', 'hasSort':true},
                                    'unit' : {'title':'Unit', 'hasSort':true},
                                    'merek' : {'title':'Merek', 'hasSort':true},
                                    'harga' : {'title':'Harga', 'hasSort':true},
                                    'supplier' : {'title':'Supplier', 'hasSort':true},
                                    'status' : {'title':'Status', 'hasSort':true},
                                    'garansi' : {'title':'garansi', 'hasSort':true},
                                    'aksi' : {'title':'Aksi', 'hasSort':false},
                                }"
                                :sort ='sort'
                                @kode="sortBy('kode')"
                                @barang="sortBy('barang')"
                                @merek="sortBy('merek')"
                                @harga="sortBy('harga')"
                                @supplier="sortBy('supplier')"
                                @status="sortBy('status')"
                                @garansi="sortBy('garansi')"
                            ></table-thead>
                            <tbody v-if="!loading">
                                <tr v-if="datas.data.length < 1">
                                    <td colspan="100" class="text-center">Data tidak ditemukan</td>
                                </tr>
                                <tr v-else v-for="(data , index) in datas.data" :key="index">
                                    <td width="1%">{{ index+=1 }}</td>
                                    <td>{{ data.kode.replaceAll(' ','&nbsp;') }}</td>
                                    <td>{{ capitalizeFirstLetter(removeWhiteSpace(data.service_category.title)) }}</td>
                                    <td>{{ removeWhiteSpace(data.barang) }}</td>
                                    <td>{{ data.harga }}</td>
                                    <td>{{ data.supplier ? removeWhiteSpace(data.supplier.name) : '-' }}</td>
                                    <td>{{ data.condition ? removeWhiteSpace(data.condition.name) : '-' }}</td>
                                    <td>{{ data.garansi | moment("DD-MM-YYYY") }}</td>
                                    <td width="1%">
                                        <actions :id="data.id" @click='refreshDelete(data.id)'></actions>
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
                            :page-count="this.$store.state.asset.last_page"
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
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Search from "../../../shared/components/tables/Search.vue";
import Rows from "../../../shared/components/tables/Rows.vue";
import Actions from "../../../shared/components/tables/Actions.vue";
import TableThead from "../../../shared/components/tables/TableThead.vue";

export default {
    name: "asset",
    components:{Rows,Search,Actions,TableThead},
    data() {
        return {
            loading     : false,
            search      : "",
            rows        : 10,
            loading     : true,
            sort        : "updated_at",
            order       : true
        }
    },
    created() {
        this.tables(0);
    },
    computed: {
        ...mapState('asset', {
            datas: state => state.datas
        }),
        page: {
            get() {
                return this.$store.state.asset.page ? this.$store.state.asset.page : 1
            },
            set(val){
                this.$store.commit("asset/SET_PAGE", val);
                this.tables(0);
            }
        }
    },
    
    watch: {
        search() {
            this.tables(1);
        },
        rows() {
            this.tables(1);
        }
    },
    methods: {
        ...mapActions("asset", ["getDatas","remove"]),
        async tables(rowsUpdate){
            this.loading = true
            try {
                await this.getDatas({
                    search : this.search,
                    rows   : this.rows,
                    sort   : this.sort,
                    order  : this.order,
                    rowsUpdate : rowsUpdate,
                });
            } catch (error) {
                console.log(error)
            }
            this.loading = false;
        },
        sortBy(val) {
            this.order = this.sort == val ? !this.order : false;
            this.sort = val;
            this.tables(0);
        }, 
        refreshDelete(data){
            this.remove(data)
            .then(() => {
                this.alert("Data has been deleted !", 1);
                this.tables(0);
            })
            .catch(error => {
                if (error) {
                    console.log(error);
                }
            });        
        }
    }

}
</script>
<style>
table > thead > tr > th{
    padding: 8px!important;
}
table > tbody > tr > td{
    padding: 7px!important;
    font-size: 13px;
}
.pagination{
    font-size: 10px;
    padding: 1px!important;
}
</style>