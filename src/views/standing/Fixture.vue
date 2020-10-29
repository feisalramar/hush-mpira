<template>
  <v-container>
    <v-snackbar v-model="show" :timeout="timeout" color="orange darken-2">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <h1>Upcoming Matches</h1>
    <v-row style="padding-left: 10%">
      <v-col
        cols="5"
        v-for="fixture in fixtures"
        :key="fixture.fixture_id"
        style="background-color: beige; margin: 2px"
      >
        <v-row>
          <v-col cols="2">
            <v-avatar color="transparent" size="36">
              <img :src="fixture.homeTeam.logo" />
            </v-avatar>
          </v-col>
          <v-col cols="3" class="lineup-link" @click="getLineup(fixture)">
            {{ fixture.homeTeam.team_name }}</v-col
          >
          <v-col cols="2"> <h2>vs</h2> </v-col>
          <v-col cols="3" class="lineup-link">
            {{ fixture.awayTeam.team_name }}</v-col
          >
          <v-col cols="2">
            <v-avatar color="transparent" size="36">
              <img :src="fixture.awayTeam.logo" />
            </v-avatar>
          </v-col>
          <v-row>
            <v-col>
              <p style="font-weight: bold">{{ fixture.venue }}</p>
              <p>{{ fixture.event_date | moment }}</p>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import { mapMutations, mapState } from "vuex";
export default Vue.extend({
  name: "Fixture",
  data: function () {
    return {
      show: false,
      text: "Lineup is not available yet",
      timeout: 5000,
    };
  },
  computed: {
    ...mapState({
      fixtures: (state: any) => state.fixtures,
      league: (state: any) => state.selectedLeague,
      lineup: (state: any) => state.lineup,
    }),
  },
  methods: {
    ...mapMutations(["setFixtures", "setLineup"]),
    moment: function () {
      return moment();
    },
    getLineup(fixture: any) {
      console.log(fixture);
      this.$http.get(`lineups/${fixture.fixture_id}`).then((response: any) => {
        const data = response.data;
        const lineup = data.api.lineUps;

        if (data.api.results <= 0) {
          // console.log("results");
          this.show = true;
          this.text = "Line up is not available yet";
          //   this.timeout = 2000;
          return;
        }
        this.$store.commit("setLineup", { lineup });
      });
    },
  },
  filters: {
    moment: function (date: any) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
  mounted() {
    if (this.league != null) {
      const league: any = this.league;
      this.$http
        .get(`fixtures/league/${league.league_id}/next/10`)
        .then((response: any) => {
          const data = response.data;
          const fixtures = data.api.fixtures;
          //   console.log(fixtures);
          this.$store.commit("setFixtures", { fixtures });
        });
    }
  },
});
</script>

<style>
.lineup-link {
  color: gray;
  cursor: pointer;
}

.lineup-link:hover {
  color: black;
  font-weight: bold;
}
</style>
