<template>
    <router-link :to="{ name: $route.meta.buttonCreate}" class="btn btn-primary btn-sm">
        <span v-if="$route.meta.breadcrumb.length > 1">
            Kembali
        </span>
        <span v-else>
            Tambah Data
        </span>
    </router-link>
</template>