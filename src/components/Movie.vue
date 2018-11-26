<template>
    <div class="movie component">
        <img :src="movie.Poster" alt="movie.Title" />
    </div>
</template>

<script>
export default {
    name: "movie",
    props: {
        movie: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style scoped lang="scss">
.movie {
    border: 1px solid #ccc;
    padding: 1em;
    img {
        display: block;
    }
}
.movie + .movie {
    margin-top: 2em;
}
</style>
