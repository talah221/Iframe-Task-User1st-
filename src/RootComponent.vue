<template>
<main class="app-container">
  <!-- <Navbar/> -->
  <router-view/>
</main>
</template>

<script>
// import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    // Navbar,
  },
};
</script>

<style>
.app-container{
/* max-width: 80%;
margin: 0 auto; */
}
</style>
