<template>
    <div id="app"><router-view /></div>
</template>

<script>
import { displayAds } from "@/common/ads";
export default {
    name: "app",
    mounted: function() {
        const slots = document.querySelectorAll(".vue-ad");
        displayAds(slots);
    },
    updated: function() {
        const slots = document.querySelectorAll(".vue-ad");
        displayAds(slots);
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,900");
body {
    font-family: "Noto Sans TC", sans-serif;
    background: #fcfefc;
    color: #555;
    max-width: 1280px;
    margin: 2em auto;
    padding: 0 2em;
}
</style>
