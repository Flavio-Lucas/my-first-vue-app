<template>
  <div>
    <v-toolbar color="primary lighten-1" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="goTo('/search')" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn @click="goTo('/home')" icon>
        <v-icon>mdi-home-circle</v-icon>
      </v-btn>

      <v-btn @click="goTo('/video')" icon>
        <v-icon>mdi-movie</v-icon>
      </v-btn>

      <v-btn @click="goTo('/chip')" icon>
        <v-icon>mdi-chip</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title @click="goTo('/search')">
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              Pesquisa
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="goTo('/home')">
              <v-btn icon>
                <v-icon>mdi-home-circle</v-icon>
              </v-btn>
              Home
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="goTo('/video')">
              <v-btn icon>
                <v-icon>mdi-movie</v-icon>
              </v-btn>
              Video
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="goTo('/chip')">
              <v-btn icon>
                <v-icon>mdi-chip</v-icon>
              </v-btn>
              Chip
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "ToolBar",

  watch: {
    group() {
      this.drawer = false;
    },
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
