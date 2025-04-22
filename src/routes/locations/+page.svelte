<script lang="ts">
  import type { Location } from '$lib/server/locations';

  interface Data {
    locations: Location[];
  }

  let { data }: { data: Data } = $props();
</script>

<svelte:head>
  <title>Locations List - Locations Explorer</title>
</svelte:head>

<div class="container">
  <h1>Locations</h1>

  <div class="locations-grid">
    {#each data.locations as location}
      <div class="location-card">
        <img src={location.image} alt={location.name} class="location-image" />
        <div class="location-info">
          <h2>{location.name}</h2>
          <p>{location.description}</p>
          <div class="location-coordinates">
            <span>Latitude: {location.coordinates.lat}</span>
            <span>Longitude: {location.coordinates.lng}</span>
          </div>
        </div>
      </div>
    {/each}
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
  }

  .locations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .location-card {
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }

  .location-card:hover {
    transform: translateY(-5px);
  }

  .location-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .location-info {
    padding: 1rem;
  }

  .location-info h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  .location-info p {
    margin-bottom: 1rem;
    color: #4a5568;
  }

  .location-coordinates {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    color: #718096;
  }
</style>
