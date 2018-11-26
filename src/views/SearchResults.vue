<template>
    <div class="about">
        <router-link to="/">←  Back</router-link>
        <SearchBox />
        <h2>
            Search results for: <span>{{ term }}</span>
        </h2>
        <div class="movies">
            <Loader v-if="loading" />
            <Movie v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
            <NoResults v-if="!loading && !movies.length" />
        </div>
    </div>
</template>

<script>
import Loader from "@/assets/loading.svg?inline";
import SearchBox from "@/components/SearchBox.vue";
import Movie from "@/components/Movie.vue";
import NoResults from "@/components/NoResults.vue";
export default {
    name: "results",
    components: {
        Loader,
        SearchBox,
        Movie,
        NoResults
    },
    computed: {
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
        const term = this.$route.params.query;
        if (!loading && !movies && term) {
            this.$store.dispatch("fetchMovies", term);
        }
    }
};
</script>
