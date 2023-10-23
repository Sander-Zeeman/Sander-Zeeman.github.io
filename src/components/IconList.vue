<script setup lang="ts">
import { ref } from "vue";

import LinkedInIcon from "@/assets/linkedin_icon.svg";
import GithubIcon from "@/assets/github_icon.svg";
import DiscordIcon from "@/assets/discord_icon.svg";
import MailIcon from "@/assets/gmail_icon.svg";

const linkedin_hover = ref<bool>(false);
const github_hover = ref<bool>(false);
const discord_hover = ref<bool>(false);
const mail_hover = ref<bool>(false);

const linkedin_link = "https://www.linkedin.com/in/" + import.meta.env.VITE_LINKEDIN;
const github_link = "https://github.com/" + import.meta.env.VITE_GITHUB;
const discord_link = "https://discordapp.com/users/" + import.meta.env.VITE_DISCORD_ID;
const mail_link = "mailto:" + import.meta.env.VITE_EMAIL;
</script>

<template>
  <div class="grid">
    <a style="grid-area: logo_linkedin" :href="linkedin_link"
      ><img class="link" :src="LinkedInIcon" alt="LinkedIn"
    /></a>

    <a style="grid-area: logo_github" :href="github_link"
      ><img class="link" :src="GithubIcon" alt="Github"
    /></a>

    <a style="grid-area: logo_discord" :href="discord_link"
      ><img class="link" :src="DiscordIcon" alt="Discord"
    /></a>

    <a style="grid-area: logo_mail" :href="mail_link"
      ><img class="link" :src="MailIcon" alt="Mail"
    /></a>
  </div>
</template>

<style scoped>
.grid {
  width: 100%;
  display: grid;
  align-items: top;
  justify-content: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "logo_linkedin logo_github logo_discord logo_mail";
  gap: 10px;
}

.link {
  width: 40px;
  aspect-ratio: 1;
  -webkit-filter: invert(100%);
}
</style>
