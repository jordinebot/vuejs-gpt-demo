<template>
    <div class="movie component">
        <img :src="movie.Poster" :alt="movie.Title" />
        <div class="detail">
            <h3>{{ movie.Title }}</h3>
            <p><strong>{{ movie.Year }}</strong></p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nisi orci, rutrum vitae suscipit sed, egestas eget
                risus. Maecenas auctor laoreet libero, non placerat dui pretium
                et. Quisque arcu lectus, sollicitudin vitae augue eu, vehicula
                egestas arcu. Vestibulum in orci eget augue pulvinar accumsan.
                Integer scelerisque ex lorem, vel dapibus tortor fermentum ac.
                Maecenas augue nisi, fringilla at pellentesque vel, scelerisque
                eu massa. Suspendisse bibendum egestas luctus. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Mauris eget
                metus interdum nunc interdum faucibus. Sed porttitor interdum
                suscipit.
            </p>
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
    padding: 2em;
    img {
        display: block;
    }
}
.movie + .movie {
    margin-top: 2em;
}
</style>
