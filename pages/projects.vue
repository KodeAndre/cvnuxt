<script setup lang="ts">
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub);
const { pending, data: projects, refresh }: any = useLazyAsyncData('projects', () => $fetch('https://echo-restful.herokuapp.com/api/projects').finally(() => refresh()));
</script>

<template>
  <div>
    <Head>
      <Title>My Projects</Title>
    </Head>

    <ToTop />
    <div v-if="pending">
      Loading projects...
    </div>
    <div v-else class="projectsList">
      <span v-for="project in projects" :key="project.id" class="project">
        <h3 class="title">{{ project.name }}</h3>
        <a v-if="project.homepage" :href="project.homepage" target="_blank">{{ project.homepage }}</a>
        <p v-else class="noSite">Doesn't or can't have a live website</p>
        <p>{{ project.description }}</p>
        <p>Most used language: {{ project.language }}</p>
        <a :href="project.html_url" target="_blank"><FontAwesomeIcon :icon="faGithub" class="icons" /></a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectsList {
  display: grid;
  justify-items: center;
  gap: 1rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1fr);
  }
}
.project {
  background-color: #282828;
  width: 60%;
  padding: 0rem 1rem 1rem;
  border-radius: 10px;
}
.title {
  color: #ffa500;
}
.noSite {
  color: #808080;
}
a {
  word-break: break-word;
  color: #0094e3;
  font-weight: bold;
}
.icons {
  font-size: 2rem;
  color: #ffa500;
}
</style>
