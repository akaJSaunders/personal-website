<template>
  <div>
    <h1>What i've worked on!</h1>
    <div class="tiles">
      <a href="https://www.gov.uk/appeal-a-penalty-for-filing-your-company-accounts-late" target="_blank">
        <img src="@/assets/profile.jpg" alt="Image 1">
      </a>
      <a href="https://thriva.co/" target="_blank">
        <img src="@/assets/profile.jpg" alt="Image 2">
      </a>
      <a href="https://github.com/akaJSaunders/astro-roid-rage" target="_blank">
        <img src="@/assets/profile.jpg" alt="Image 3">
      </a>
      <a href="https://github.com/akaJSaunders/martian-mike" target="_blank">
        <img src="@/assets/profile.jpg" alt="Image 3">
      </a>
      <a href="https://www.youtube.com/watch?v=biMmRFgScSY" target="_blank">
        <img src="@/assets/profile.jpg" alt="Image 3">
      </a>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.tiles {
  display: flex;
  flex-wrap: wrap;
}

.tiles a {
  flex: 0 0 33.33%;
  padding: 10px;
  text-align: center;
}

.tiles img {
  width: 100%;
  height: auto;
}
</style>