<template>
    <div class="btn-group">
        <button class="btn btn-rounded btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true"><i class="icon ti-settings"></i></button>
        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-14px, 40px, 0px);">
            <router-link :to="{ name: 'userEdit', params: {id:id}}" class="dropdown-item">Edit</router-link>
            <router-link :to="{ name: 'userShow', params: {id:id}}" class="dropdown-item">Detail</router-link>
            <a class="dropdown-item" @click.prevent="deleteData(id)">Hapus</a>
        </div>
    </div>
</template>
<script>
export default {
    props:{"id": Number}
}
</script>