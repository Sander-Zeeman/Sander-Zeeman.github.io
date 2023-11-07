<script setup lang="ts">
interface Props {
  title: string;
  internal_name: string;
  img: string;
  desc: string;
}

const props = defineProps<Props>();

const link =
  "https://" + import.meta.env.VITE_GITHUB + ".github.io/" + props.internal_name;
const source =
  "https://github.com/" + import.meta.env.VITE_GITHUB + "/" + props.internal_name;
</script>

<template>
  <div class="card">
    <img :src="img" class="banner" />
    <div class="card-info">
      <a :href="link" class="link">
        <h3 class="card-title">{{ title }}</h3>
      </a>
      <p>{{ desc }}</p>
      <a :href="source" class="link" style="text-align: right">Source Code</a>
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
