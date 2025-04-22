<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<nav class="navigation">
  <a href="/">Home</a>
  <a href="/map">Map</a>
  <a href="/locations">Locations</a>
</nav>

{@render children()}

<style>
  .navigation {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    padding: 0.5rem;
    background-color: #f7fafc;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  a {
    padding: 0.5rem 1rem;
    color: #4a5568;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in-out;
  }

  a:hover {
    background-color: #edf2f7;
  }
</style>
