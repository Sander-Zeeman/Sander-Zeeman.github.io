<script setup lang="ts">
interface Props {
  title: string;
  link: string;
  img: string;
  desc: string;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <img :src="img" class="banner" />
    <div class="card-info">
      <a :href="link" class="link">
        <h3 class="card-title">{{ title }}</h3>
      </a>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #888888;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-width: min(60%, 400px);
  max-width: 400px;
}

.card-info {
  display: grid;
  grid-auto-flow: row;
  align-content: start;
  gap: 1rem;
  margin: 1rem;
}

.link {
  color: #cccccc;
  text-decoration: underline;
}

.banner {
  border-radius: 20px 20px 0 0;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.card-title {
  font-size: 2rem;
  text-align: center;
}
</style>
