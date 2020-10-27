<template>
  <div class="content-containter">
    <v-card
      class="card-content"
      elevation="11"
      outlined
      v-for="(country, index) in countries"
      :key="country.name"
    >
      <h3 @click="getLeagues(country, index)">{{ country.country }}</h3>
      <div class="flag">
        <img :src="country.flag" height="100px" width="100px" />
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
      seasons: [],
    };
  },
  methods: {
    getLeagues: function (country: any, index: number) {
      this.$http
        .get(`leagues/current/${country.country}`)
        .then((response: any) => {
          const data = response.data;
          console.log("Result is ", response);
        })
        .catch((error: any) => {
          console.error("Error", error);
        });
    },
  },
  mounted: function () {
    this.$http
      .get("countries")
      .then((response: any) => {
        const data = response.data;
        console.log("Result is ", response);
        this.countries = data.api.countries;
      })
      .catch((error: any) => {
        console.error("Error", error);
      });
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
    background-color: beige;
    margin: 20px 20px;
    .flag {
      display: flex;
      margin-top: 10px;
    }
    h3 {
      margin-top: 20px;
    }
    h3:hover {
      cursor: pointer;
      color: darkgray;
    }
  }
}
</style>
