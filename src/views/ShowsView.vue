<template>
  <div class="shows">
    <UpcomingShows />
  </div>
  
</template>


<script>
import UpcomingShows from '@/components/UpcomingShows.vue'

export default {
  components: {
    UpcomingShows
  }
}
</script>


<style>
@media (min-width: 1024px) {
  .shows {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
