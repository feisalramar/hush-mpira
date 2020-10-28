<template>
  <v-container>
    <scorers></scorers>
    <!-- <standing></standing> -->
  </v-container>
</template>
<script>
import Vue from "vue";
import Standing from "./Standing.vue";
import Scorers from "./Scorers.vue";
export default Vue.extend({
  components: {
    Standing,
    Scorers,
  },
});
</script>

<style>
</style>