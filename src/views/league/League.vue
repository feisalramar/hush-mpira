<template>
  <v-container>
    <v-row align="start" justify="space-around">
      <v-col
        md="3"
        sm="3"
        lg="3"
        v-for="(league, index) in leagues"
        :key="index"
      >
        <v-card elevation="11" outlined class="pa-2">
          <h4 class="league-name" @click="selectLeague(league)">
            {{ league.name }}
          </h4>
          <div class="flag">
            <img :src="league.logo" height="100px" width="100px" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
export default Vue.extend({
  name: "Leagues",
  data: function () {
    return {
      // leagues: [],
    };
  },
  methods: {
    ...mapMutations(["selectleague", "setleagues"]),
    selectLeague(league: any) {
      this.$store.commit("selectleague", { league });
      this.$router.push("standing");
    },
  },
  computed: {
    ...mapState({
      selectedCountry: (state: any) => state.selectedCountry,
      leagues: (state: any) => state.leagues,
      leagueRetrieved: (state: any) => state.leagueRetrieved,
    }),
  },
  beforeMount() {
    const country = this.selectedCountry;
    if (!this.leagueRetrieved) {
      this.$http
        .get(`leagues/current/${country.country}`)
        .then((response: any) => {
          const data = response.data;
          const leagues = data.api.leagues;
          // this.leagues = data.api.leagues;
          leagues.map((league: any) => console.log(league.type));
          this.$store.commit("setleagues", { leagues });
        })
        .catch((error: any) => {
          console.error("Error", error);
        });
    }
  },
});
</script>

<style scoped>
h4 {
  margin-top: 20px;
}
h4:hover {
  cursor: pointer;
  color: darkgray;
}
</style>