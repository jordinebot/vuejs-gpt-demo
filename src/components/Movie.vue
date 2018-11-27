<template>
    <div class="movie component">
        <img :src="movie.Poster" :alt="movie.Title" />
        <div class="detail">
            <h3>{{ movie.Title }}</h3>
            <p>{{ movie.Year }}</p>
        </div>
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
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 2em;
    border: 1px solid #ccc;
    img {
        display: block;
    }
}
.movie + .movie {
    margin-top: 2em;
}
</style>
