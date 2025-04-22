<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<div class="app-container">
  <nav class="navigation">
    <a href="/">Home</a>
    <a href="/map">Map</a>
    <a href="/locations">Locations</a>
  </nav>

  {@render children()}
</div>

<style>
  :global(body) {
    background-color: #1a1a1a;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
  }

  .app-container {
    min-height: 100vh;
  }

  .navigation {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    padding: 0.5rem;
    background-color: #2a0000;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  a {
    padding: 0.5rem 1rem;
    color: #c0c0c0;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    background-color: #500000;
    color: #ffffff;
    text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
  }
</style>
