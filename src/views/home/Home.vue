<template>
  <div class="content-containter">
    <v-card
      class="card-content"
      elevation="11"
      outlined
      v-for="country in countries"
      :key="country.name"
    >
      <h3>{{ country.name }}</h3>
      <div class="flag">
        <img :src="country.flag" />
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data: function () {
    return {
      countries: [
        { name: "Tanzania", flag: "Tz" },
        { name: "Uganda", flag: "Ug" },
      ],
    };
  },
  components: {},
});
</script>

<style lang="scss" scoped>
.content-containter {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  .card-content {
    min-height: 100px;
    height: auto;
    min-width: 200px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 20px;
    .flag {
      display: flex;
      margin-top: 20px;
    }
  }
}
</style>
