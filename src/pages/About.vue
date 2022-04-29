<template>
  <div class="aboutContainer">
    <div class="aboutInnerContainer">
      <div class="infoContainer">
        <h3>A little bit about me...</h3>
        <p>
          Hello! My name's Alex. I'm currently a free lance full-stack web
          developer. My interest in web development started back in 2019 while
          studying at Universtity, when I helped set up an online store for a
          friends small business. The business didn't stick but my interest in
          development was piqued. Since then I've had the oppurtunity to work
          full time at a small tech company, pick up freelance work and pursue
          passion projects.
        </p>
      </div>
      <div class="infoContainer">
        <h4>Some of the technologies I've been using recently</h4>
        <div class="brandsContainer">
          <i class="fa-brands fa-node"></i>
          <i class="fa-brands fa-vuejs"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-wordpress"></i>
          <i class="fa-brands fa-git-alt"></i>
        </div>
      </div>
      <div class="cvContainer">
        <h4>If you'd like to download a copy of my CV</h4>
        <a href=""><button>Download</button></a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .aboutContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .aboutInnerContainer {
    padding: 1rem;
    width: 800px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  h3 {
    font-weight: 400;
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
  .techContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    font-size: 1.5rem;
  }

  .brandsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;

    justify-items: center;
  }

  .fa-brands {
    font-size: 6rem;
  }

  .infoContainer,
  .cvContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    background: none;
    font-size: 2rem;
    border-radius: 1rem;
    padding: 1rem;
    font-weight: 400;
    transition: 0.5s;
    color: var(--primary-text-color);
    border: 2px solid var(--primary-text-color);
  }

  button:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .brandsContainer {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
