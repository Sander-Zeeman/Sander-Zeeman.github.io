<script setup lang="ts">
import IconList from "@/components/IconList.vue";

const img = import.meta.env.VITE_IMAGE_LINK;
</script>

<template>
  <div class="vert-container">
    <img :src="img" alt="A picture of me" class="profile-pic" />
    <h1 class="name">Sander Zeeman</h1>
    <h2 class="subtext">Software Engineer</h2>
    <IconList />
  </div>
</template>

<style scoped>
.profile-pic {
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.name {
  font-size: 3em;
  padding-top: 40px;
  padding-bottom: 5px;
}

.subtext {
  font-size: 2em;
  padding-top: 5px;
  padding-bottom: 10px;
}

@media screen and (max-width: 400px) {
  .name {
    font-size: 2em;
    padding-top: 40px;
    padding-bottom: 5px;
  }

  .subtext {
    font-size: 1em;
    padding-top: 5px;
    padding-bottom: 10px;
  }
}

.vert-container {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
