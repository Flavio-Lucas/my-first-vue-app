<template>
  <v-system-bar color="primary" lights-out dark>
    <v-spacer></v-spacer>
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span>{{ momentInstance.format('HH:mm:ss') }}</span>
  </v-system-bar>
</template>

<script>
import moment from "moment";

export default {

  data() {
    return {
      momentInstance: new moment(),
    };
  },
  mounted() {
    setInterval(() => {
      this.momentInstance = new moment();
    }, 1000);
  },
};
</script>

