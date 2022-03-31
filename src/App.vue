<template>
  <router-view />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

</style>
