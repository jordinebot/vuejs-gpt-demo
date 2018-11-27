import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
    exclude: { query: false },
});

const api = axios.create({
    baseURL: `http://www.omdbapi.com`,
    adapter: cache.adapter
});

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
            api.get(`/?apikey=${process.env.VUE_APP_OMDB_APIKEY}&s=${term}`)
                .then(res => context.commit("storeMovies", res.data.Search))
                .finally(context.commit("stopLoading"));
        }
    }
});
