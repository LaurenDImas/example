<template>        
    <div  v-if="$route.meta.breadcrumb.length" class="content-header mb-4 p-0 ">
        <div class="d-flex align-items-center">
           <div class="mr-auto">
               <!-- {{$route.meta.breadcrumb.length}} -->
                <h3 class="page-title">{{$route.meta.title}}</h3>
                <div class="d-inline-block align-items-center">
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link :to="{'name': 'dashboard'}">
                                    <i class="mdi mdi-home-outline"></i>
                                </router-link></li>
                            <router-link 
                                v-for="(route, index) in  $route.meta.breadcrumb" :key="index"
                                class="breadcrumb-item" 
                                aria-current="page"
                                :to="{'name': route.to}"
                                >
                                {{route.name}}
                            </router-link>

                        </ol>
                    </nav>
                </div>
            </div>
            <ButtonCreate></ButtonCreate>
        </div>
    </div>
    <!-- </div> -->

</template>
<script>
import ButtonCreate from "./ButtonCreate.vue";

export default {
    components:{ButtonCreate}
}
</script>