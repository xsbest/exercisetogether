<template>
  <div id="app">
    <router-view />
    <div v-if="visible"><Navbar /></div>
  </div>
</template>
<script>
import Navbar from "@/components/Home/Navbar";
export default {
  components: {
    Navbar,
  },
  mounted() {
    if (location.pathname === "/login") {
      this.visible = false;
    }
  },
  updated() {
    if (location.pathname === "/login") {
      this.visible = false;
    } else {
      this.visible = true;
    }
  },
  data() {
    return {
      visible: true,
    };
  },
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
