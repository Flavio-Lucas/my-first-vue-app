<template>
  <v-app>
    <System />
    <ToolBar />

    <v-main>
      <HelloWorld />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer.vue";
import ToolBar from "./components/ToolBar.vue";
import System from "./components/System.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    Footer,
    ToolBar,
    System,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>