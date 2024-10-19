<template>
<div class="home">
  <BandImages />
</div>

</template>

<script>
import BandImages from '@/components/BandImages.vue';

export default {
  components: {
    BandImages
  }
}

</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>