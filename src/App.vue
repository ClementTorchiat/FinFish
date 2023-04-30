<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import Footing from "@/components/footer.vue";
  import Heading from "@/components/header.vue";
  import Headingfr from  "@/components/headerfr.vue";
</script>

<template>
  <heading v-if="!['homefr', 'storyfr', 'offffr'].includes($route.name)"></heading>
  <headingfr v-if="!['home', 'story', 'offf'].includes($route.name)"></headingfr>
  <RouterView />
  <footing></footing>
</template>

<style lang="css">
body {
  background-color: #ADD6FF;
}
</style>
