<template>
    <select class="form-control" :id="template" >
    </select>
</template>
<script>
// import select2 from 'select2';
import $ from 'jquery'; 
export default {
    props:{
        'template' : String,
        'url'  : String
    },
    mounted: function(){
        const select2 =  $("#"+this.template).select2({
            placeholder: 'Select an option...',
            width: '100%',
            allowClear: true,
            ajax: {
                url: this.url,
                dataType: 'json',
                delay: 250,
                data: function(params) {
                    return {
                        term: params.term || '',
                        page: params.page || 1
                    }
                },
                cache: true
            }
        });
        select2.on("select2:select", (e) => {
            this.$emit("input", e.params.data.id);
        });
        // this.$forceUpdate();
    }
}
</script>
<style>
.select2-container--default .select2-selection--single .select2-selection__clear{
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
}
</style>