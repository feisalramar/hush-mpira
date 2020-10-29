<template>
  <v-container>
    <v-row>
      <fixture></fixture>
    </v-row>
    <v-row>
      <v-col>
        <standing></standing>
      </v-col>
      <v-col>
        <scorers></scorers>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Vue from "vue";
import Standing from "./Standing.vue";
import Scorers from "./Scorers.vue";
import Fixture from "./Fixture.vue";
export default Vue.extend({
  components: {
    Standing,
    Scorers,
    Fixture,
  },
});
</script>

<style>
</style>