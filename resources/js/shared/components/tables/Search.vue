<template>
    <div class="col-12 col-md-8 col-lg-8 col-xl-6 pb-0">
        <input
            type="text"
            class="form-control col-12 col-md-6 float-right ml-1 mb-2"
            name="example-text-input"
            placeholder="Search.."
            @input="handleInput"
        />
    </div>
</template>
<script>
export default {
    methods: {
        handleInput (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>