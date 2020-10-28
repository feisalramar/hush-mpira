<template>
  <v-app id="app">
    <v-toolbar color="cyan" dark max-height="60px">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-btn icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>Hush!Mpira</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <transition
      name="animate__animated"
      enter-active-class="animated__slideIn"
      leave-active-class="animated__slideOut"
      mode="in-out"
    >
      <v-container>
        <router-view />
      </v-container>
    </transition>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    isHome: function () {
      return this.$router.currentRoute.path === "/";
    },
  },
  methods: {
    back: function () {
      this.$router.back();
    },
  },
});
</script>>

<style lang="scss">
html {
  padding: 0px;
}

body {
  padding: 0px;
  margin: 0px;
  background: linear-gradient(#e9e4f0, #d3cce3);
  height: 100vh;
  width: 100 vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
