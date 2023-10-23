<script setup lang="ts"></script>

<template>
  <header class="header">
    <span class="name">Sander Zeeman</span>
    <button class="download" @click="console.log('?')">Download CV</button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 0;

  width: 97%;
  padding: 1.5%;

  background-color: #111111;
}

.name {
  font-size: 1.3em;
}

.download {
}
</style>
