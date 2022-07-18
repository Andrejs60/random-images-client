<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/navigation/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-weight: bold;
  font-size: 50px;
  margin: 24px;
}

body {
  background: #edede9;
}
</style>
