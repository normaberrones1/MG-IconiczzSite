<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      In memory of Tejano legend Jimmy Gonzalez
    </h3>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>



</style>
