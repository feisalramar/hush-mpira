<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Players</h1>
        <v-data-table
          :headers="headers"
          :items="players"
          :items-per-page="10"
          class="elevation-4"
        >
          <template v-slot:item.player_name="{ item }">
            <a @click="selectPlayer(item)"> {{ item.player_name }} </a>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
export default Vue.extend({
  name: "Team",
  data: function () {
    return {
      headers: [
        { text: "Name", value: "player_name" },
        { text: "Age", value: "age" },
        { text: "nationality", value: "nationality" },
        { text: "Position", value: "position" },
      ],
    };
  },
  computed: {
    ...mapState({
      team: (state: any) => state.selectedTeam,
      players: (state: any) => state.players,
      seasons: (state: any) => state.seasons,
    }),
  },
  methods: {
    ...mapMutations(["setplayers", "selectPlayer"]),
    selectPlayer: function (player: any) {
      this.$store.commit("selectPlayer", { player });
      this.$router.push("player");
    },
  },
  mounted() {
    if (this.team != null) {
      const team: any = this.team;
      const startSeason = this.seasons[this.seasons.length - 3];
      const endSeason = this.seasons[this.seasons.length - 2];

      this.$http
        .get(`players/squad/${team.team_id}/${startSeason}-${endSeason}`)
        .then((response: any) => {
          const data = response.data;
          const players = data.api.players;
          // console.log(players);
          this.$store.commit("setplayers", { players });
        });
    }
  },
});
</script>

<style>
</style>