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
    countryRetrieved: false,
    leagueRetrieved: false,
    selectedCountry: null,
    leagues: [],
    selectedLeague: null,
    teams: [],
    selectedTeam: null,
    players: [],
    selectedPlayer: null,
    standings: [],
    topscorers: [],
    fixtures: [],
    lineup: null,
    seasons: [],
  },
  mutations: {
    setSeasons(state, payload) {
      state.seasons = payload.seasons;
    },
    setLineup(state, payload) {
      state.lineup = payload.lineup;
    },
    setFixtures(state, payload) {
      state.fixtures = payload.fixtures;
    },
    setTopScorers(state, payload) {
      state.topscorers = payload.topscorers;
    },
    setStandings(state, payload) {
      state.standings = payload.standings;
    },
    setcountries(state, payload) {
      state.countries = payload.countries;
      state.countryRetrieved = true;
    },
    selectcountry(state, payload) {
      state.selectedCountry = payload.country;
    },
    selectleague(state, payload) {
      state.selectedLeague = payload.league;
    },
    selectPlayer(state, payload) {
      state.selectedPlayer = payload.player;
    },
    selectteam(state, payload) {
      state.selectedTeam = payload.team;
    },
    setleagues(state, payload) {
      state.leagues = payload.leagues;
      state.leagueRetrieved = true;
    },
    setLeagueRetrieval(state, payload) {
      state.leagueRetrieved = payload.flag;
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
