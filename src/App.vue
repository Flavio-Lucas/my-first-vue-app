<template>
  <v-app>
    <System />
    <ToolBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import System from "./components/System.vue";
import ToolBar from "./components/ToolBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    System,
    ToolBar,
    Footer,
  },
};
</script>
