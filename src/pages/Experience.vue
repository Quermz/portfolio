<template>
  <div class="experienceContainer" id="experience">
    <h1>Work and Education</h1>
    <h2>References available upon request!</h2>
    <div class="experienceInnerContainer">
      <div class="employmentSubContainer">
        <h3>Technical Support Analyst at The Hub</h3>
        <h4>April 2021 - April 2022</h4>
        <p>
          I began working at The Hub as Technical Support Analyst part time
          while in my final year at university. My primary role was supporting
          our lead developer by producing functional requirements on behalf of
          clients, testing new software, and documenting existing code.
          Additionally, I was responsible for updating The Hubs website using
          WordPress.
        </p>
      </div>
      <div class="employmentSubContainer">
        <h3>The University of Nottingham</h3>
        <h4>September 2018 - June 2021</h4>
        <p>
          I graduated from The University of Nottingham in 2021 with a degree in
          Inudstrial Economics. Somewhere along the way I found out I enjoyed
          writing code!
        </p>
      </div>
      <div class="employmentSubContainer">
        <h3>Junior Analyst at eProductive</h3>
        <h4>September 2017 - June 2018</h4>
        <p>
          Before attending university, I spent a year working as a Junior
          Analyst at Eproductive. While employed I had a varied set of
          responsibilities including answering technical support calls, writings
          queries in SQL on behalf of clients as well as helping maintain the
          companies’ databases.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  :root {
    --main-bg-color: brown;
  }
  .experienceContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
  }
  .experienceInnerContainer {
    display: flex;
    flex-direction: column;
    width: 800px;
    max-width: 100%;
    gap: 4rem;
  }

  .employmentSubContainer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 2px solid var(--primary-text-color);
    padding: 0.5rem;
    border-radius: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
  h2 {
    font-style: italic;
  }
  h3 {
    font-size: 1.75rem;
    font-weight: 400;
  }
  h4 {
    font-style: italic;
    font-size: 1.25rem;
  }

  p {
    font-size: 1.5rem;
  }
</style>
