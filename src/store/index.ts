import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lookups: {
      popularCountry: [
        "England",
        "Spain",
        "France",
        "Germany",
        "Italy",
        "Netherlands",
        "Portugal",
        "USA",
      ],
      africanCountry: [
        "South-Africa",
        "Kenya",
        "Tanzania",
        "Nigeria",
        "Rwanda",
        "Tunisia",
        "Senegal",
        "Uganda",
        "Egypt",
        "Algeria",
      ],
      otherCountry: [
        "Brazil",
        "Argentina",
        "Sweden",
        "Denmark",
        "China",
        "Croatia",
        "Japan",
        "Belgium",
        "Saudi-Arabia",
      ],
    },
    countries: [],
    selectedCountry: null,
    leagues: [],
    selectedLeague: null,
    teams: [],
    selectedTeams: null,
    playes: [],
    selectedPlayer: null,
  },
  mutations: {
    setcountries(state, payload) {
      state.countries = payload.countries;
    },
    selectcountry(state, payload) {
      state.selectedCountry = payload.country;
    },
    selectleague(state, payload) {
      state.selectedLeague = payload.league;
    },
    selectteam(state, payload) {
      state.selectedTeam = payload.team;
    },
    setleagues(state, payload) {
      state.leagues = payload.leagues;
    },
    setteams(state, payload) {
      state.teams = payload.teams;
    },
    setplayers(state, payload) {
      state.players = payload.players;
    },
  },
  actions: {},
  modules: {},
});
