import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        movies: []
    },
    mutations: {
        startLoading: function(state) {
            state.movies = [];
            state.loading = true;
        },
        stopLoading: function(state) {
            state.loading = false;
        },
        storeMovies: function(state, movies = []) {
            state.movies = movies;
        }
    },
    actions: {
        fetchMovies: function(context, term) {
            context.commit("startLoading");
            axios
                .get(`http://www.omdbapi.com/?apikey=b1b2aab&s=${term}`)
                .then(res => context.commit("storeMovies", res.data.Search))
                .finally(context.commit("stopLoading"));
        }
    }
});
