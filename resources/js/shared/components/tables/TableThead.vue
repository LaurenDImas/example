<template>
    <!-- <thead>
        <tr>
            <th
                class="table-header-relative text-center"
                style="width: 80px;"
            >
                No.
            </th>
            <th
                class="table-header-relative sort-head"
                @click="sortBy('name')"
            >
                Name
                <i
                    class="fa fa-sort sort-icon"
                    v-bind:class="{
                        active: sort == 'name'
                    }"
                ></i>
            </th>
            <th
                class="table-header-relative sort-head"
                @click="sortBy('email')"
            >
                Email
                <i
                    class="fa fa-sort sort-icon"
                    v-bind:class="{
                        active: sort == 'email'
                    }"
                ></i>
            </th>
            <th
                class="table-header-relative sort-head"
                @click="sortBy('created_at')"
                style="width: 15%;"
            >
                Created At
                <i
                    class="fa fa-sort sort-icon"
                   v-bind:class="{
                        active: sort == 'created_at'
                    }" 
                ></i>
            </th>
            <th>
                Aksi
            </th>
        </tr>
    </thead> -->
    <thead>
        <tr>
            <th 
                v-for="(value , index) in datas" 
                :key="index" 
                class="table-header-relative"
                :class="{'sort-head' : value['hasSort']}"
                @click="$emit(index, index)"
            >
                <span>
                    {{value['title']}}
                    <i v-if="value['hasSort']"
                        class="fa fa-sort sort-icon"
                        v-bind:class="{
                            'text-primary': sort == index
                        }"
                    ></i>
                </span>
            </th>
        </tr>
    </thead>
</template>
<script>
export default {
    props:{'thead':Object,'sort':String},
    data(){
        return {
            'datas' : this.thead
        }
    },
    mounted(){
        // delete this.datas.aksi
        // this.datas = this.datas;
    }
}
</script>