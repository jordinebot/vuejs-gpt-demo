<template>
    <div class="search-box component">
        <h1>Search a movie</h1>
        <form action="/search" @submit="onSearch">
            <input type="search" name="q" v-model="q" />
        </form>
    </div>
</template>

<script>
export default {
    name: "SearchBox",
    data: function() {
        return {
            q: ""
        };
    },
    methods: {
        onSearch: function(event) {
            event.preventDefault();
            this.$router.push(`/search/${this.q}`);
            this.$store.dispatch("fetchMovies", this.q);
            this.q = "";
        }
    }
};
</script>

<style scoped lang="scss">
input {
    width: 100%;
    border: 3px solid #ccc;
    border-radius: 6px;
    font-size: 2em;
    padding: 0.5em;
}
</style>
