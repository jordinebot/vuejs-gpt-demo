<template>
    <div class="about">
        <AdSlot id="Example_728x90" />
        <router-link to="/">← Back</router-link>
        <SearchBox />
        <h2>
            Search results for: <span>{{ term }}</span>
        </h2>
        <div class="content">
            <section class="movies">
                <Movie
                    v-for="movie in movies"
                    :key="movie.imdbID"
                    :movie="movie"
                />
                <NoResults v-if="!loading && !movies.length" />
            </section>
            <aside>
                <AdSlot id="Example_300x250_Flex" />
                <AdSlot id="Example_300x600" class="sticky" />
            </aside>
        </div>
    </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import Movie from "@/components/Movie.vue";
import NoResults from "@/components/NoResults.vue";
import AdSlot from "@/components/AdSlot.vue";
export default {
    name: "results",
    components: {
        SearchBox,
        Movie,
        NoResults,
        AdSlot
    },
    computed: {
        term: function() {
            return this.$route.params.query;
        },
        movies: {
            get() {
                return this.$store.state.movies;
            }
        },
        loading: {
            get() {
                return this.$store.state.loading;
            }
        }
    },
    created: function() {
        const loading = this.$store.state.loading;
        const movies = this.$store.state.movies.length;
        if (!loading && !movies && this.term) {
            this.$store.dispatch("fetchMovies", this.term);
        }
    }
};
</script>

<style scoped lang="scss">
#Example_728x90 {
    float: right;
}
.content {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-gap: 2em;
}
aside {
    text-align: center;
}
</style>
