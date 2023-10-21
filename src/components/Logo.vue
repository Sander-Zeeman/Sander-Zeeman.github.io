<script setup lang="ts">
import { ref } from "vue";

interface Props {
  link: string;
  icon: string;
  alt: string;
}

defineProps<Props>();

const hover = ref<bool>(false);
</script>

<template>
  <a @mouseover="hover = true" @mouseleave="hover = false" :href="link"
    ><img class="link" :src="icon" :alt="alt"
  /></a>
</template>

<style scoped>
.link {
  width: 40px;
  aspect-ratio: 1;
  -webkit-filter: invert(100%);
}
</style>
