<template>
    <div>
        <p v-translate="{countdown}" translate-comment="PUBLIC-DRIVE">
            You have %{countdown} seconds to live
        </p>

        <fieldset>
            <legend>Language</legend>
            <select name="language" v-model="$language.current">
                <option v-for="(language, key) in $language.available" :value="key">{{ language }}</option>
            </select>
        </fieldset>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class TimeToLive extends Vue {
        countdown: number = 10;

        mounted() {
            console.log("App created");
            setInterval(() => {
                this.countdown -= 1;
                if (this.countdown === 0) this.countdown = 10;
            }, 1000);
        }
    }
</script>

<style lang="sass" scoped>

</style>
