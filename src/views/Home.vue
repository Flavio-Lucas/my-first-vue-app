<template>
  <div class="home">
    <v-container class="container">
      <Card
        class="card"
        v-for="card in getData"
        v-bind:title="card.title"
        v-bind:url="card.url"
        v-bind:key="card.id"
      />
    </v-container>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  computed: {
    getData() {
      return this.$store.state.cards;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  max-width: 200px !important;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>