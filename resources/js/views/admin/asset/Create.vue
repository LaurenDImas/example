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
                                    <label for="">Kategori</label>
                                    <div class="d-flex">
                                        <select2 v-model="categoryId" :url="'../api/list-select-role'" :template="'category_id'"></select2>
                                        <p
                                            class="text-danger m-0 p-0"
                                            v-if="errors.category_id"
                                        >
                                            {{ errors.category_id[0] }}
                                        </p>
                                        <a  href="javascript:;" 
                                            class="btn btn-primary btn-sm font-weight-bold"
                                            data-toggle="modal" 
                                            data-target="#modal-default"
                                        >
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Kode</label>
                                    <input type="text" v-model="data.kode" readonly :class="{'is-invalid': errors.kode}" class="form-control" placeholder="Name">
                                    <p
                                            class="text-danger"
                                            v-if="errors.kode"
                                        >
                                            {{ errors.kode[0] }}
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Merek</label>
                                    <input type="text" v-model="data.merek" :class="{'is-invalid': errors.merek}" class="form-control" placeholder="Merek">
                                    <p
                                            class="text-danger"
                                            v-if="errors.merek"
                                        >
                                            {{ errors.merek[0] }}
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Nama Barang</label>
                                    <input type="text" v-model="data.barang" :class="{'is-invalid': errors.barang}" class="form-control" placeholder="Nama Barang">
                                    <p
                                            class="text-danger"
                                            v-if="errors.barang"
                                        >
                                            {{ errors.barang[0] }}
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">CoA</label>
                                    <select2 v-model="coaId" :url="'../api/list-select-role'" :template="'coa_id'"></select2>
                                    <p
                                        class="text-danger m-0 p-0"
                                        v-if="errors.coa_id"
                                    >
                                        {{ errors.coa_id[0] }}
                                    </p>
                                </div>
                            </div>    
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Tipe Barang</label>
                                    <div class="d-flex">
                                        <select2 v-model="itemTypeId" :url="'../api/list-select-role'" :template="'item_type_id'"></select2>
                                        <p
                                            class="text-danger m-0 p-0"
                                            v-if="errors.item_type_id"
                                        >
                                            {{ errors.item_type_id[0] }}
                                        </p>
                                        <a href="" class="btn btn-primary btn-sm font-weight-bold"><i class="fa fa-pencil"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Tanggal Beli</label>
                                    <input type="date" v-model="data.tanggal_beli" :class="{'is-invalid': errors.tanggal_beli}" class="form-control" placeholder="Tanggal Beli">
                                    <p
                                            class="text-danger"
                                            v-if="errors.tanggal_beli"
                                        >
                                            {{ errors.tanggal_beli[0] }}
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Garansi</label>
                                    <input type="date" v-model="data.garansi" :class="{'is-invalid': errors.garansi}" class="form-control" placeholder="Garansi">
                                    <p
                                            class="text-danger"
                                            v-if="errors.garansi"
                                        >
                                            {{ errors.garansi[0] }}
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">File Garansi <small>*PDF,JPG, PNG, JPEG</small></label>
                                    <!-- <upload-file></upload-file> -->
                                    <input type="file"  @change="uploadImage" class="form-control" id="garansi_file"  :class="{'is-invalid': errors.garansi_file}">
                                    <p
                                            class="text-danger"
                                            v-if="errors.garansi_file"
                                        >
                                            {{ errors.garansi_file[0] }}
                                        </p>
                                    <img  src="" class="mt-2 garansi-file-detail" style="height:100px!important;">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Harga</label>
                                    <input type="text" v-model="data.harga" :class="{'is-invalid': errors.harga}" class="form-control" placeholder="Harga">
                                    <p
                                            class="text-danger"
                                            v-if="errors.harga"
                                        >
                                            {{ errors.harga[0] }}
                                        </p>
                                </div>
                            </div>                           
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Tipe Pembelian</label>
                                    <div class="d-flex">
                                        <select2 v-model="buyTypeId" :url="'../api/list-select-role'" :template="'buy_type_id'"></select2>
                                        <p
                                            class="text-danger m-0 p-0"
                                            v-if="errors.buy_type_id"
                                        >
                                            {{ errors.buy_type_id[0] }}
                                        </p>
                                        <a href="" class="btn btn-primary btn-sm font-weight-bold"><i class="fa fa-pencil"></i></a>
                                    </div>
                                </div>
                            </div>                           
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Masa Pakai</label>
                                    <div class="d-flex">
                                        <select2 v-model="lifeTimeId" :url="'../api/list-select-role'" :template="'life_time_id'"></select2>
                                        <p
                                            class="text-danger m-0 p-0"
                                            v-if="errors.life_time_id"
                                        >
                                            {{ errors.life_time_id[0] }}
                                        </p>
                                        <a href="" class="btn btn-primary btn-sm font-weight-bold"><i class="fa fa-pencil"></i></a>
                                    </div>
                                </div>
                            </div>                     
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Metode Depresiasi</label>
                                    <select2 v-model="metodeDepresiasi" :url="'../api/list-select-role'" :template="'metode_depresiasi'"></select2>
                                    <p
                                        class="text-danger m-0 p-0"
                                        v-if="errors.metode_depresiasi"
                                    >
                                        {{ errors.metode_depresiasi[0] }}
                                    </p>
                                </div>
                            </div>                  
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Nilai Residu</label>
                                    <input type="text" v-model="data.nilai_residu" :class="{'is-invalid': errors.nilai_residu}" class="form-control" placeholder="Nilai Residu">
                                    <p
                                            class="text-danger"
                                            v-if="errors.nilai_residu"
                                        >
                                            {{ errors.nilai_residu[0] }}
                                        </p>
                                </div>
                            </div>                 
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Nilai Depresiasi</label>
                                    <input type="text" v-model="data.nilai_depresiasi" :class="{'is-invalid': errors.nilai_depresiasi}" class="form-control" placeholder="Nilai Depresiasi">
                                    <p
                                            class="text-danger"
                                            v-if="errors.nilai_depresiasi"
                                        >
                                            {{ errors.nilai_depresiasi[0] }}
                                        </p>
                                </div>
                            </div>                         
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Kondisi</label>
                                    <div class="d-flex">
                                        <select2 v-model="conditionId" :url="'../api/list-select-role'" :template="'condition_id'"></select2>
                                        <p
                                            class="text-danger m-0 p-0"
                                            v-if="errors.condition_id"
                                        >
                                            {{ errors.condition_id[0] }}
                                        </p>
                                        <a href="" class="btn btn-primary btn-sm font-weight-bold"><i class="fa fa-pencil"></i></a>
                                    </div>
                                </div>
                            </div>  
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Supplier</label>
                                    <select2 v-model="supplierId" :url="'../api/list-select-role'" :template="'supplier_id'"></select2>
                                    <p
                                        class="text-danger m-0 p-0"
                                        v-if="errors.supplier_id"
                                    >
                                        {{ errors.supplier_id[0] }}
                                    </p>
                                </div>
                            </div> 
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Foto <small>*PDF,JPG, PNG, JPEG</small></label>
                                    <!-- <upload-file></upload-file> -->
                                    <input type="file"  @change="uploadImage" class="form-control" id="foto"  :class="{'is-invalid': errors.foto}">
                                    <p
                                            class="text-danger"
                                            v-if="errors.foto"
                                        >
                                            {{ errors.foto[0] }}
                                        </p>
                                    <img  src="" class="mt-2 foto-detail" style="height:100px!important;">
                                </div>
                            </div> 
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Tempat Terpasang</label>
                                    <div class="d-flex">
                                        <select2 v-model="installedId" :url="'../api/list-select-role'" :template="'installed_id'"></select2>
                                        <p
                                            class="text-danger m-0 p-0"
                                            v-if="errors.installed_id"
                                        >
                                            {{ errors.installed_id[0] }}
                                        </p>
                                        <a href="" class="btn btn-primary btn-sm font-weight-bold"><i class="fa fa-pencil"></i></a>
                                    </div>
                                </div>
                            </div>  
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Tempat Penyimpanan</label>
                                    <div class="d-flex">
                                        <select2 v-model="storageId" :url="'../api/list-select-role'" :template="'storage_id'"></select2>
                                        <p
                                            class="text-danger m-0 p-0"
                                            v-if="errors.storage_id"
                                        >
                                            {{ errors.storage_id[0] }}
                                        </p>
                                        <a href="" class="btn btn-primary btn-sm font-weight-bold"><i class="fa fa-pencil"></i></a>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer">
                        <router-link 
                            :to="{ name: 'asset' }"
                            type="button" 
                            class="btn btn-rounded btn-warning btn-outline mr-1"
                        >
                            <i class="ti-trash"></i> Cancel
                        </router-link>
                        <button 
                            type="submit" 
                            @click.prevent="submitCategory" 
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
        <Category></Category>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Select2 from "../../../shared/components/Select2.vue";
import Category from "./modal/Category";

export default {
    name : "create-asset",
    components :{
        Select2,
        Category
    },
    data() {
        return {
            categoryId:"",
            loading : false
        }
    },
    computed:{
        ...mapState(["errors"]),
        ...mapState("asset",{
            data: state => state.data
        })
    },
    watch:{
        categoryId(category_id){
            this.data.category_id = category_id;
        },
    },
    methods: {
        ...mapMutations("asset", ["CLEAR_DATA"]),
        ...mapActions("asset", ["submit"]),
        async submitCategory(){
            this.loading = true;
            try {
                const response = await this.submit();
                if(response.data === "undefined" || response.data === ""){
                    this.loading = false;
                    return false;
                }
                this.$router.push({ name: "asset" });
                this.alert("Successfully create User Data ", 1);
            } catch (error) {
                console.log(error)
            }
            this.loading = false;
        },
        uploadImage(e) {
            const file = e.target.files[0];
            const size = file.size/1024/1024;
            if (size > 3) { 
                this.alert("Makasimal photo 1 MB", 2);
                $("#photo").val(''); //for clearing with Jquery 
            }else{
                let reader = new FileReader();
                reader.onloadend = file => {
                    $(".photo-detail").attr("src",file.target.result);
                    this.data.photo = reader.result;
                };
                reader.readAsDataURL(file);
            }            
        },
    },
    destroyed() {
        this.CLEAR_DATA();
    }
}

</script>