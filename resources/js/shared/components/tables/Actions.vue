<template>
    <div class="btn-group">
        <button class="btn btn-rounded btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true"><i class="icon ti-settings"></i></button>
        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-14px, 40px, 0px);">
            <router-link :to="{ name: route+'Edit', params: {id:id}}" class="dropdown-item">Edit </router-link>
            <router-link :to="{ name: route+'Show', params: {id:id}}" class="dropdown-item">Detail</router-link>
            <a class="dropdown-item" @click.prevent="deleteData(id)">Hapus</a>
        </div>
    </div>
</template>
<script>

export default {
    props:{"id": Number},
    data(){
        return{
            route:null
        }
    },
    beforeMount(){
        this.route =  this.$route.name.slice(0, -1)
    },
    methods: {
        deleteData(data) {
            this.$swal({
                title: "Are you sure ?",
                text: "Deleted data cannot be recovery",
                icon: "warning",
                buttons: ["Cancel", "Delete"],
                dangerMode: true
            }).then(willDelete => {
                if (willDelete) {
                    this.$emit('click')
                }
            });
        }
    }
}
</script>