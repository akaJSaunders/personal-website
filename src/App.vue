<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GreetingCard from './components/GreetingCard.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/profile.jpg" width="125" height="125" />

    <div class="wrapper">
      <GreetingCard msg="Hello World! 👋" />
      <nav>
        <RouterLink to="/">About ❤️</RouterLink>
        <RouterLink to="/experience">Experience 🚀</RouterLink>
        <RouterLink to="/projects">Projects 💡</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%; /* Add this line to make the logo appear as a circle */
  width: 125px; /* Adjust the width to make the logo bigger */
  height: 125px; /* Adjust the height to make the logo bigger */
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
