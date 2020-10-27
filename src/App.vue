<template>
  <v-app id="app">
    <v-toolbar color="cyan" dark max-height="60px">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Hush!Mpira</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
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
