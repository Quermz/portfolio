<template>
  <div class="projectOuterContainer" id="projects">
    <div class="disclaimerContainer">
      <h3>Please note!</h3>
      <p class="">
        Servers go to sleep after 1 hour of inactivity, so the first request may
        have a slower response time!
      </p>
    </div>

    <div class="projectContainer">
      <div class="textContainer">
        <h2>Webstore</h2>
        <p>Built Using: Vue, Vuex, Node, Express, MongoDB</p>
        <p>
          A custom built webstore that allows customers to create accounts and
          persist their basket between visits. Maintains a complete and detailed
          order history accessible to the customer.
        </p>
        <p>Account details: Email: test, Username: test, Password: test.</p>
        <div class="linksContainer">
          <a href="https://cowebstore.netlify.app/#/" target="_blank">
            <button>Visit Here</button>
          </a>
          <div class="gitHubLink">
            <div>Front End</div>
            <a href="https://github.com/Quermz/cowebstore-front" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </div>
          <div class="gitHubLink">
            <div>Back End</div>
            <a href="https://github.com/Quermz/webstore-server" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
      </div>
      <img alt="webstore" src="../assets/webstore.png" />
    </div>
    <div class="projectContainer">
      <div class="textContainer">
        <h2>co Notes</h2>
        <p>Built Using: Vue, Vuex, Node, Express, MongoDB</p>
        <p>
          A notes application that allows users to create accounts and store
          notes. API routes secured using JWT authentication.
        </p>
        <p>Account details: Username: test, Password: test.</p>

        <div class="linksContainer">
          <a href="https://conotes.netlify.app/#/" target="_blank">
            <button>Visit Here</button>
          </a>
          <div class="gitHubLink">
            <div>Front End</div>
            <a href="https://github.com/Quermz/notes_frontend" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </div>
          <div class="gitHubLink">
            <div>Back End</div>
            <a href="https://github.com/Quermz/notes_backend" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
      </div>
      <img alt="coNotes" src="../assets/coNotes.png" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  h1 {
    font-size: 2rem;
  }
  .projectOuterContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .disclaimerContainer {
    padding: 1rem;
    width: 1200px;
    max-width: 100%;
    text-align: center;
  }

  .disclaimerContainer > h3 {
    font-size: 2rem;
    text-align: center;
  }

  .projectContainer {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1200px;
    max-width: 100%;
    gap: 3rem;
  }
  .textContainer {
    align-items: space-around;
    justify-content: space-around;
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
  }

  .linksContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
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

  .fa-github {
    font-size: 4rem;
    border-radius: 50%;
  }

  img {
    border: 3px solid black;
    border-radius: 20px;
    width: 600px;
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (max-width: 1200px) {
    .projectOuterContainer {
      gap: 1rem;
    }
    .disclaimerContainer {
      width: 600px;
      max-width: 100%;
    }
    .projectContainer {
      flex-direction: column;
      width: 600px;
      max-width: 100%;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .textContainer {
      gap: 1rem;
      align-items: center;
      border: 2px solid var(--primary-text-color);
      border-radius: 1rem;
      padding: 1rem;
    }
  }
</style>
