<template>
  <div class="portfolioContainer">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
  import NavBar from "./components/NavBar.vue";
</script>

<style>
  :root {
    /* --main-bg-color: #f4f1de;
    --primary-text-color: #3d405b;
    --primary-highlight-color: #e07a5f;
    --secondary-highlight-color: #ff0000; */
    --main-bg-color: #faf9f6;
    --primary-text-color: #343434;
    --primary-highlight-color: #e4685c;
    --secondary-highlight-color: #e9a8a2;
  }
  html {
    overflow-y: scroll;

    background: var(--main-bg-color);
    color: var(--primary-text-color);
    overflow-x: hidden;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: var(--primary-text-color);
    text-decoration: none; /* no underline */
  }

  * {
    margin: 0px;
    font-family: "League Spartan", sans-serif;
    font-weight: 300;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.35s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
