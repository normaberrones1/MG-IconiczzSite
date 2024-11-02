<template>
  <div class="greetings">
    <h1 class="msg">{{ msg }}</h1>
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

.greetings {
  text-align: center;
  
  margin-top: 2rem;
}

h1 {
  color: #ce906d;
}

h3 {
  color: #f2f2f2;
}


</style>
