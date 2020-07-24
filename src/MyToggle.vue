<template>
    <label :class="{loading}">
        <span>Toggle this:</span>
        <input type="checkbox" @input="handleInput" :checked="value" :disabled="loading"/>
    </label>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class MyToggle extends Vue {
        @Prop({required: true}) value!: boolean
        @Prop({required: false, default: true}) loading!: boolean

        handleInput (ev: Event) {
            const target = (ev.target as HTMLInputElement)
            console.log("Input: I am emitting an event to say I have been toggled to", target.checked)
            this.$emit('input', target.checked)
        }
    }
</script>

<style scoped>
    label {
        display: block;
        cursor: pointer;
    }

    @keyframes spin {
        from {transform: rotateX(0)}
        to {transform: rotateX(1turn)}
    }

    label.loading {
        transform-origin: center center;
        animation: spin 2s infinite linear;
    }
</style>
