<template>
  <v-card>
    <v-img
      :src="url"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="colorIcon($event, 'red')">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon @click="colorIcon($event, 'green')">mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["title", "url", "id"],
  methods: {
    colorIcon: function (event, color) {
      event.preventDefault();
      event.target.classList.toggle(`${color}--text`);
    }
  }
};
</script>