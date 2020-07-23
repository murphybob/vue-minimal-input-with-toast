<template>
    <label>
        <span>Toggle this:</span>
        <input type="checkbox" @input="dothing" :checked="value" />
    </label>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class MyToggle extends Vue {
        @Prop({required: true}) value!: boolean

        dothing (ev) {
            console.log("Input: I am emitting an event to say I have been toggled to", ev.target.checked)
            this.$emit('input', ev.target.checked)
        }
    }
</script>

<style scoped>
    label {
        cursor: pointer
    }
</style>
