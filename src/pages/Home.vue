<template>
  <div class="homeContainer">
    <div class="innerHomeContainer">
      <p>Hello, I'm</p>
      <h1>Alex Cowls,</h1>
      <h2 class="fullStack">full stack</h2>
      <h2 class="webDev">web developer.</h2>
      <a href="mailto:aclive@live.co.uk" class="buttonContainer">
        <button>Contact Me</button>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .homeContainer {
    /* height: 70vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .innerHomeContainer {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }

  p {
    font-size: 4rem;
    animation-name: fade-left-1;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }

  h1 {
    font-weight: 400;
    font-size: 6rem;

    margin-left: 0rem;
    animation-name: fade-left-2;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    color: var(--primary-highlight-color);
    text-shadow: 2px 2px var(--secondary-highlight-color);
  }

  .fullStack {
    font-size: 4rem;
    margin-left: 0rem;
    animation-name: fade-left-3;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }

  .webDev {
    font-size: 6rem;
    margin-left: 0rem;
    font-weight: 400;
    animation-name: fade-left-4;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    color: var(--primary-highlight-color);
    text-shadow: 2px 2px var(--secondary-highlight-color);
  }

  button {
    color: var(--primary-text-color);
    font-size: 4rem;
    animation-name: fade-left-5;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    background: none;
    border: none;
    border-bottom: 2px solid var(--primary-text-color);
  }

  /* button {
    background: none;
    font-size: 4rem;
    border-radius: 1rem;
    padding: 1rem;
    margin-top: 1rem;
    transition: 0.5s;
    color: var(--primary-text-color);
    border: 2px solid var(--primary-text-color);
    animation-name: fade-left-5;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  } */

  button:hover {
    cursor: pointer;
  }

  /* @keyframes fade-left-1 {
    0% {
      transform: translate(-100px, -20px);
      opacity: 0;
    }

    50% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }

  @keyframes fade-left-2 {
    0% {
      transform: translate(-100px);
      opacity: 0;
    }

    12.5% {
      transform: translate(-100px, -20px);
      opacity: 0;
    }

    62.5% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }
  @keyframes fade-left-3 {
    0% {
      transform: translate(-100px);
      opacity: 0;
    }

    25% {
      transform: translate(-100px, -20px);
      opacity: 0;
    }
    75% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }
  @keyframes fade-left-4 {
    0% {
      transform: translate(-100px);
      opacity: 0;
    }

    37.5% {
      transform: translate(-100px, -20px);
      opacity: 0;
    }
    87.5% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }
  @keyframes fade-left-5 {
    0% {
      transform: translate(-100px);
      opacity: 0;
    }

    50% {
      transform: translate(-100px, -20px);
      opacity: 0;
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  } */
  @media (max-width: 800px) {
    p {
      font-size: 12vw;
    }
    h1 {
      font-size: 14vw;
    }
    .fullStack {
      font-size: 12vw;
    }
    .webDev {
      font-size: 14vw;
    }
    button {
      font-size: 12vw;
    }
  }
  @media (max-width: 600px) {
  }
</style>
