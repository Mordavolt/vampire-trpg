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
    color: #c00000;
    text-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    color: #e0e0e0;
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .card {
    background-color: #2a0000;
    border: 1px solid #500000;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.5),
      0 0 15px rgba(80, 0, 0, 0.3);
    text-align: center;
    flex: 1;
    max-width: 400px;
    transition: all 0.2s ease-in-out;
  }

  .card:hover {
    box-shadow:
      0 6px 15px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(120, 0, 0, 0.4);
    border-color: #800000;
    transform: translateY(-5px);
  }

  .card h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #ff9999;
  }

  .card p {
    margin-bottom: 1.5rem;
    color: #e0e0e0;
  }

  .button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #800000;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border: 1px solid #a00000;
  }

  .button:hover {
    background-color: #a00000;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
  }
</style>
