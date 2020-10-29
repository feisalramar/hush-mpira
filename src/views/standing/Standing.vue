<template>
  <v-container>
    <h1 style="text-align: left">League Standing</h1>
    <v-data-table
      :headers="headers"
      :items="standings"
      :items-per-page="20"
      class="elevation-4"
    >
      <template v-slot:item.logo="{ item }">
        <v-avatar
          @click="selectTeam(item)"
          color="transparent"
          size="36"
          class="link-logo"
        >
          <img :src="item.logo" />
        </v-avatar>
      </template>
    </v-data-table>
  </v-container>
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
    ...mapMutations(["setStadings", "selectteam"]),
    selectTeam: function (team: any) {
      this.$store.commit("selectteam", { team });
      this.$router.push("team");
    },
  },
  mounted() {
    if (this.league != null) {
      const league: any = this.league;
      this.$http
        .get(`leagueTable/${league.league_id}`)
        .then((response: any) => {
          const data = response.data;
          const standings = data.api.standings;
          // console.log(standings);
          this.$store.commit("setStandings", { standings: standings[0] });
        });
    }
  },
});
</script>

<style>
.link-logo:hover {
  cursor: pointer;
  background-color: gray;
}
</style>