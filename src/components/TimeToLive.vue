<template>
    <div>
        <p v-translate="{countdown, advertiser}" translate-comment="PUBLIC-DRIVE">
            You have %{countdown} seconds to live because %{advertiser} says so!
        </p>

        <fieldset>
            <legend>Advertiser</legend>
            <select name="language" v-model="advertiser">
                <option v-for="advertiser in advertisers" :value="advertiser">{{ advertiser }}</option>
            </select>
        </fieldset>

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
        advertisers: Array<string> = [
            "Badger Team",
            "Bodger Team",
            "MASHED POTATO"
        ]
        advertiser: string = this.advertisers[Math.floor(Math.random() * this.advertisers.length)]

        mounted() {
            setInterval(() => {
                this.countdown -= 1;
                if (this.countdown === 0) this.countdown = 10;
            }, 1000);
        }
    }
</script>

<style lang="sass" scoped>

</style>
