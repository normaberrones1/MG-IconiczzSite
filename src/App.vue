<template>



  <header>
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


</script>

<style scoped>

nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem 0;
}


nav a.router-link-exact-active {
  color: var(--color-text);
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


.wrapper {
  background-image: url('./public/IMG_3862.jpeg');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding: 19.0rem;
  margin-top: -10%;
  text-align: center;
  

}

</style>
