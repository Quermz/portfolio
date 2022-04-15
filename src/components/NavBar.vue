<template>
  <div class="navContainer">
    <nav class="navInnerContainer">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/projects">Projects</router-link>
      <router-link class="link" to="/experience">Experience</router-link>
      <router-link class="link" to="/about">About</router-link>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
  .navContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navInnerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 1200px;
    max-width: 100%;
    padding: 1rem 3rem 1rem 3rem;
  }

  .link {
    font-size: 2rem;
  }
  .router-link-active {
    color: var(--primary-highlight-color);
  }

  @media (max-width: 600px) {
    .link {
      font-size: 1.5rem;
    }
    .navInnerContainer {
      padding: 1rem 1rem 1rem 1rem;
    }
  }
</style>
