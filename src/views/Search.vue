<template>
  <v-container>
    <v-text-field label="Another input" @input="search($event)"></v-text-field>
    <v-container class="container">
      <Card
        class="card"
        v-for="card in searchResult"
        v-bind:title="card.title"
        v-bind:url="card.url"
        v-bind:key="card.id"
      />
    </v-container>
  </v-container>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  computed: {
    getData() {
      return this.$store.state.cards;
    },
  },
  data: () => ({
    searchResult: [],
    searchString: "",
  }),
  methods: {
    search: function (event) {
      this.searchResult = this.getData.filter(item => item.title.includes(event));
    },
  },
};
</script>
