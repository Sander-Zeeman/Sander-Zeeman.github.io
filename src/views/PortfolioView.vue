<script setup lang="ts">
import { ref } from "vue";

import PortfolioItem from "@/components/PortfolioItem.vue";

import TempImage from "@/assets/temp.jpg";

const projects = ref([
  {
    name: "OverTrack",
    url: "OverTrack",
    img: TempImage,
    desc:
      "Duis egestas ex hendrerit metus facilisis feugiat. Nam congue sem quam, et efficitur augue tincidunt nec. Praesent velit nunc, faucibus in nisi eget, dignissim egestas tellus. Donec quis massa vel.",
  },
  {
    name: "PAG",
    url: "PAG",
    img: TempImage,
    desc:
      "Duis egestas ex hendrerit metus facilisis feugiat. Nam congue sem quam, et efficitur augue tincidunt nec. Praesent velit nunc, faucibus in nisi eget, dignissim egestas tellus. Donec quis massa vel.",
  },
  {
    name: "IEGS2013XR",
    url: "IEGS2013XRandomizer",
    img: TempImage,
    desc:
      "Duis egestas ex hendrerit metus facilisis feugiat. Nam congue sem quam, et efficitur augue tincidunt nec. Praesent velit nunc, faucibus in nisi eget, dignissim egestas tellus. Donec quis massa vel.",
  },
]);
</script>

<template>
  <h2 class="sub-title">My Projects</h2>
  <div class="ProjectList">
    <PortfolioItem
      v-for="(project, idx) in projects"
      :key="idx"
      :img="project.img"
      :title="project.name"
      :internal_name="project.url"
      :desc="project.desc"
    />
  </div>
</template>

<style scoped>
.ProjectList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  margin: 1rem;
  gap: 1rem;
  padding-bottom: 1rem;
}
</style>
