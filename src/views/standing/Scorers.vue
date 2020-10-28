<template>
  <h1>Top scorers</h1>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
export default Vue.extend({
  name: "Scorers",
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      topscorers: (state: any) => state.topscorers,
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
        const scorers = data.api;
        console.log(scorers);
        //   this.$store.commit("setTopScorers", { topr: standings[0] });
      });
    }
  },
});
</script>

<style>
</style>