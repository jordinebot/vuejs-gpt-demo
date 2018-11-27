<template>
    <div class="home">
        <AdSlot id="Example_728x90" />
        <SearchBox />
        <About />
    </div>
</template>

<script>
import AdSlot from "@/components/AdSlot.vue";
import SearchBox from "@/components/SearchBox.vue";
import About from "@/components/About.vue";

export default {
    name: "home",
    components: {
        AdSlot,
        SearchBox,
        About
    }
};
</script>

<style scoped lang="scss">
#Example_728x90 {
    text-align: center;
}
</style>

