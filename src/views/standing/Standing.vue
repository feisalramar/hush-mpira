<template>
  <v-data-table
    :headers="headers"
    :items="standings"
    :items-per-page="20"
    class="elevation-4"
  >
    <template v-slot:item.logo="{ item }">
      <v-avatar color="transparent" size="36">
        <img :src="item.logo" />
      </v-avatar>
    </template>
  </v-data-table>
</template> 

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
export default Vue.extend({
  name: "Standing",
  data: function () {
    return {
      headers: [
        { text: "Rank", value: "rank" },
        { text: "", value: "logo" },
        {
          text: "Team",
          align: "start",
          sortable: true,
          value: "teamName",
        },
        { text: "Points", value: "points" },
        { text: "Win", value: "all.win" },
        { text: "Draw", value: "all.draw" },
        { text: "Loose", value: "all.lose" },
        { text: "Match", value: "all.matchsPlayed" },
      ],
    };
  },
  computed: {
    ...mapState({
      standings: (state: any) => state.standings,
      league: (state: any) => state.selectedLeague,
    }),
  },
  methods: {
    ...mapMutations(["setStadings"]),
  },
  mounted() {
    if (this.league != null) {
      const league: any = this.league;
      this.$http
        .get(`leagueTable/${league.league_id}`)
        .then((response: any) => {
          const data = response.data;
          const standings = data.api.standings;
          this.$store.commit("setStandings", { standings: standings[0] });
        });
    }
  },
});
</script>

<style>
</style>