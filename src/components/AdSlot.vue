<template>
    <div :id="id" class="vue-ad"></div>
</template>

<script>
export default {
    name: "ad-slot",
    props: {
        id: {
            type: String,
            default: ""
        }
    }
};
</script>

<style scoped lang="scss">
.vue-ad + .vue-ad {
    margin-top: 2em;
}

.sticky {
    position: sticky;
    top: 2em;
}
</style>
