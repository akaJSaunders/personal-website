<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Greeting from './components/Greeting.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/profile.jpg" width="125" height="125" />

    <div class="wrapper">
      <Greeting msg="Hello World!" />

      <nav>
        <RouterLink to="/">About me</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </div>

    <div class="company-logos">
      <img src="@/assets/profile.jpg" alt="Company Logo 1" />
      <img src="@/assets/profile.jpg" alt="Company Logo 2" />
      <img src="@/assets/profile.jpg" alt="Company Logo 3" />
      <!-- Add more logo images here -->
    </div>

  </header>

  <RouterView />
</template>

<style scoped>

.company-logos {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.company-logos img {
  width: 100px;
  height: 100px;
  margin: 0 px;
  opacity: 0.5;
  animation: scrollLogos 20s linear infinite;
}

@keyframes scrollLogos {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
