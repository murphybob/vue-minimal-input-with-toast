<template>
    <div id="app">
        <MyToggle v-model="valueOfMyToggle" @input="toggleWasToggled"/>

        <p>The value of your toggle is: {{ valueOfMyToggle }}</p>

        <p v-if="showToast">UPDATED TO {{ valueOfMyToggle.toString().toUpperCase() }}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from './components/HelloWorld.vue';
    import MyToggle from "@/MyToggle.vue";

    @Component({
        components: {MyToggle, HelloWorld},
    })
    export default class App extends Vue {
        valueOfMyToggle: boolean = Math.random() > 0.5; // (choose a random start value to show it doesn't matter!)
        showToast: boolean = false
        toastTimeout: number | null = null

        toggleWasToggled(value: boolean) {
            console.log("Parent: I heard that the input had been toggled to", value);
            this.showToast = true
            if (this.toastTimeout) clearTimeout(this.toastTimeout)
            this.toastTimeout = setTimeout(() => this.showToast = false, 2000)
        }
    }
</script>

<style>
</style>
