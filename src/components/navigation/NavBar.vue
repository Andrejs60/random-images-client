<template>
  <nav>
    <router-link to="/">Ascending</router-link>
    <router-link to="/descending">Descending</router-link>
    <router-link to="/random">Random</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
nav {
  padding: 20px;
  background: #f5ebe0;
  border-bottom: 1px solid #ccc;
}

nav a {
  padding: 12px 20px;
  margin: 0px 10px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #495057;
  background: #e3d5ca;
  text-decoration: none;
}

nav a:hover {
  color: #000;
  background: #d5bdaf;
}

nav a.router-link-exact-active {
  color: #000;
  background: #d5bdaf;
}

@media (max-width: 500px) {
  nav {
    display: inline-block;
    width: 100%;
  }

  nav a {
    display: inline-block;
    margin: 4px;
  }
}
</style>
