<script setup lang="ts">
import Header from "@/components/Header.vue";
import IntroView from "@/views/IntroView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import TimelineView from "@/views/TimelineView.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <IntroView />
  <div class="group">
    <!-- <AboutMeView /> -->
    <PortfolioView />
    <!-- <TimelineView /> -->
  </div>
  <Footer />
</template>

<style>
.sub-title {
  font-size: 3rem;
  text-align: center;
}
</style>

<style scoped>
.group {
  display: grid;
  grid-auto-flow: rows;
  gap: 2rem;
}
</style>