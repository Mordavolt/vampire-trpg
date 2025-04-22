<svelte:head>
  <title>Home - Locations Explorer</title>
</svelte:head>

<div class="container">
  <h1>Welcome to Locations Explorer</h1>
  <p>Explore interesting locations around the world</p>

  <div class="content">
    <div class="card">
      <h2>Map View</h2>
      <p>Explore locations on an interactive map</p>
      <a href="/map" class="button">View Map</a>
    </div>

    <div class="card">
      <h2>Locations List</h2>
      <p>Browse all locations in a list format</p>
      <a href="/locations" class="button">View Locations</a>
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .card {
    background-color: #f7fafc;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex: 1;
    max-width: 400px;
  }

  .card h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .card p {
    margin-bottom: 1.5rem;
  }

  .button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #4a5568;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: bold;
    transition: background-color 0.2s ease-in-out;
  }

  .button:hover {
    background-color: #2d3748;
  }
</style>
