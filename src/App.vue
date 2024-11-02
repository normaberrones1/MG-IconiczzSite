<template>

  <div v-if="loading" class="loading-image">
    <img src="../public/IMG_3862.jpeg" alt="loading" />
  </div>


  <header v-else>
    <div class="wrapper">
      <HomeDescription msg="Mike Gonzalez & The Iconiczz" />

      <nav>

        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/shows">Shows</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/merch">Merch</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />


</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeDescription from './components/HomeDescription.vue';
import { ref, onMounted } from 'vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2500);
});

</script>

<style scoped>

nav {
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.1);
  width: 25%;
  padding: 1rem 0;
  
}



nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

.loading-image {
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: fixed;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}


</style>
