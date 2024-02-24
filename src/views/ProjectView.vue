<template>
  <div>
    <div class="tiles">
      <a href="https://github.com/akaJSaunders/astro-roid-rage" target="_blank">
        <p>Astro Roid Rage (Game)</p>
        <img src="@/assets/profile.jpg" alt="Image 3">
      </a>
      <a href="https://github.com/akaJSaunders/martian-mike" target="_blank">
        <p>Martian Mike (Game)</p>
        <img src="@/assets/profile.jpg" alt="Image 3">
      </a>
      <a href="https://www.youtube.com/watch?v=biMmRFgScSY" target="_blank">
        <p>Polymorpous (Game)</p>
        <img src="@/assets/profile.jpg" alt="Image 3">
      </a>
      <a href="https://www.youtube.com/watch?v=biMmRFgScSY" target="_blank">
        <p> Character-Based Handwriting Recognition w/ Neural Network</p>
        <img src="@/assets/profile.jpg" alt="Image 3">
      </a>
      <a href="https://www.youtube.com/watch?v=biMmRFgScSY" target="_blank">
        <p> Endpoint Documentation w/ Ruby on Rails and Rswag</p>
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