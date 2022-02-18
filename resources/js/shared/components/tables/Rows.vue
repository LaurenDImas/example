<template>
    <div class="col-12 col-md-8 col-lg-8 col-xl-6 pb-0 mb-2">
        <label>Show :</label>
        <select
            class="form-control-sm custom-select"
            style="max-width:115px"
            @input="handleChange"
        >
            <option value="10">10 Rows</option>
            <option value="20">20 Rows</option>
            <option value="50">50 Rows</option>
            <option value="100">100 Rows</option>
            <option value="All">All Rows</option>
        </select>
    </div>
</template>
<script>
export default {
    methods: {
        handleChange (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>