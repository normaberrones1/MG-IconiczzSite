<template>
    <div class="contact">
        <ContactInfo />
    </div>
</template>
  

<script>
    import ContactInfo from '@/components/ContactInfo.vue'

    export default {
        components: {
            ContactInfo
        }
    }
</script>

<style>


  @media (min-width: 1024px) {
    .contact {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
  