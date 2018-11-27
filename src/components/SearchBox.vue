<template>
    <div class="search-box component">
        <h1>Search a movie</h1>
        <form action="/search" @submit="onSearch">
            <input
                autofocus
                type="search"
                name="q"
                v-model="q"
                placeholder="Search by movie title only"
            />
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
.search-box {
    padding: 2em 0;
}
input {
    width: 100%;
    border: 3px solid #ccc;
    border-radius: 6px;
    font-size: 2em;
    padding: 0.5em;
}
::placeholder {
    color: #ddd;
}
</style>
