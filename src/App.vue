<script setup lang="ts">
import IntroView from "@/views/IntroView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import TimelineView from "@/views/TimelineView.vue";
</script>

<template>
  <IntroView />
  <AboutMeView />
  <PortfolioView />
  <TimelineView />
  <div style="position: relative">
    <span class="footer">&copy;2023 Sander Zeeman</span>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  padding-top: 3px;
  padding-bottom: 3px;

  background-color: #111111;
  width: 100vw;
}
</style>
