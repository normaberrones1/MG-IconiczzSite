<template>
    <div class="merch">

        <BandMerch />
    </div>
</template>

<script>
import BandMerch from '@/components/BandMerch.vue'

export default {
  components: {
    BandMerch
  }
}


</script>
  
  <style>
  @media (min-width: 1024px) {
    .merch {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  