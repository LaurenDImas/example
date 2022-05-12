import Vue from 'vue';

Vue.mixin({
    methods: { 
        capitalizeFirstLetter(val) {
            return val.charAt(0).toUpperCase() + val.slice(1);
        },
        removeWhiteSpace(val) {
            return val.replaceAll(' ','&nbsp;');
        },
    }
});
