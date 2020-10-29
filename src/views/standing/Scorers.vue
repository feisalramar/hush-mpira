<template>
  <v-container>
    <h1 style="text-align: left">Top scorers</h1>
    <v-data-table
      :headers="headers"
      :items="topscorers"
      :items-per-page="20"
      class="elevation-4"
      fixed-header
    >
      <template v-slot:item.player_name="{ item }">
        <p style="min-width: 100px; text-align: center">
          {{ item.player_name }}
        </p>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
export default Vue.extend({
  name: "Scorers",
  data: function () {
    return {
      headers: [
        // { text: "Rank", value: "rank" },
        { text: "Name", value: "player_name", align: "center" },
        { text: "Goals", value: "goals.total" },
        { text: "Assist", value: "goals.assists" },
        { text: "Match", value: "games.appearences" },
        { text: "yellow", value: "cards.yellow" },
        { text: "red", value: "cards.red" },
        { text: "shots", value: "shots.total" },
        { text: "Team ", value: "team_name" },
        { text: "Nationality", value: "nationality" },
        { text: "Position", value: "position" },
      ],
    };
  },
  computed: {
    ...mapState({
      topscorers: (state: any) =>
        state.topscorers.map((scorer: any) => {
          if (!scorer.goals.assists) {
            scorer.goals.assists = 0;
          }
          return scorer;
        }),
      league: (state: any) => state.selectedLeague,
    }),
  },
  methods: {
    ...mapMutations(["setTopScorers"]),
  },
  mounted() {
    if (this.league != null) {
      const league: any = this.league;
      this.$http.get(`topscorers/${league.league_id}`).then((response: any) => {
        const data = response.data;
        const topscorers = data.api.topscorers;
        // console.log(topscorers);
        this.$store.commit("setTopScorers", { topscorers });
      });
    }
  },
});
</script>

<style>
</style>