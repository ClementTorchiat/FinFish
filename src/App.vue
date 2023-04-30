<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import Footing from "@/components/footer.vue";
  import Heading from "@/components/header.vue";
</script>

<template>
  <heading></heading>
  <RouterView />
  <footing></footing>
</template>

<style lang="css">
body {
  background-color: #ADD6FF;
}
</style>
