<template>
    <div id="app">
        <MyToggle v-model="valueOfMyToggle" @input="toggleWasToggled" :loading="inProgress"/>

        <p>The value of your toggle is: {{ valueOfMyToggle }}</p>

        <fieldset>
            <legend>If / else test</legend>
            <p v-if="valueOfMyToggle" v-translate :key="1">
                This text shows if the toggle is true
            </p>
            <p v-else v-translate :key="2">
                Otherwise this text if false
            </p>
        </fieldset>

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
        inProgress: boolean = false
        showToast: boolean = false
        fakeAsyncActionTimeout: number | null = null
        toastTimeout: number | null = null

        async toggleWasToggled(value: boolean) {
            console.log("Parent: I heard that the input had been toggled to", value);

            this.inProgress = true
            await new Promise(resolve => {
                if (this.fakeAsyncActionTimeout) clearTimeout(this.fakeAsyncActionTimeout)
                this.fakeAsyncActionTimeout = setTimeout(resolve, 1000 + Math.random() * 4000)
            })
            this.inProgress = false

            this.showToast = true
            await new Promise(resolve => {
                if (this.toastTimeout) clearTimeout(this.toastTimeout)
                this.toastTimeout = setTimeout(resolve, 2000)
            })
            this.showToast = false
        }
    }
</script>

<style>
</style>
