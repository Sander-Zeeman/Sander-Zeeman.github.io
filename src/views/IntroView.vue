<script setup lang="ts">
import LinkedInIcon from "@/assets/linkedin_icon.svg";
import GithubIcon from "@/assets/github_icon.svg";
import DiscordIcon from "@/assets/discord_icon.svg";
import MailIcon from "@/assets/gmail_icon.svg";

import Logo from "@/components/Logo.vue";
</script>

<template>
  <div class="container column centered">
    <img
      src="https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg"
      alt="A picture of me"
      class="item profile-pic"
    />
    <h1 class="name">Sander Zeeman</h1>
    <h2 class="subtext">What am I</h2>
    <div class="row centered links">
      <Logo
        link="https://www.linkedin.com/in/sanderzeeman/"
        :icon="LinkedInIcon"
        alt="LinkedIn"
      />
      <Logo link="https://github.com/Sander-Zeeman" :icon="GithubIcon" alt="Github" />
      <Logo link="#" :icon="DiscordIcon" alt="Discord" />
      <Logo link="mailto:szeeman2000@gmail.com" :icon="MailIcon" alt="Mail" />
    </div>
  </div>
</template>

<style scoped>
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

.links {
  padding-top: 10px;
}

.container {
  width: 100vw;
  height: 100vh;
}

.column {
  display: flex;
  flex-direction: column;
}

.row {
  width: 70%;
  gap: 10px;
  display: flex;
  flex-direction: row;
}

.centered {
  justify-content: center;
  align-items: center;
}

.profile-pic {
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
}
</style>
