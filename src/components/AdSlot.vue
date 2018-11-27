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
.vue-ad {
    display: inline-block;
    position: relative;
    z-index: 9;
}

.vue-ad:before {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    content: "This is an Ad.";
    font-size: 12px;
}

.vue-ad:empty {
    display: none;
}

.vue-ad + .vue-ad {
    margin-top: 2em;
}

.sticky {
    position: sticky;
    top: 2em;
}
</style>
