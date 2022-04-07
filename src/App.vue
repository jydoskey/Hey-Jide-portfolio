<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
