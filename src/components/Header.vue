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

  width: 98%;
  padding: 1%;

  background-color: #111111;
}

.name {
  font-size: 1.3rem;
}
</style>
