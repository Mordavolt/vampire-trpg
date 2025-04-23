<script lang="ts">
  import type { Location } from '$lib/server/locations';

  interface Data {
    locations: Location[];
  }

  let { data }: { data: Data } = $props();
  let selectedImage = $state('');
</script>

<svelte:head>
  <title>Locations List - Locations Explorer</title>
</svelte:head>

<div class="container">
  <h1>Locations</h1>

  <div class="locations-grid">
    {#each data.locations as location}
      <div class="location-card">
        <button
          onclick={() => (selectedImage = 'images/locations/' + location.image)}
          style="border: none; background: none; padding: 0;"
        >
          <img
            src={'images/locations/' + location.image}
            alt={location.name}
            class="location-image cursor-pointer"
          />
        </button>
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

{#if selectedImage}
  <button
    onclick={() => (selectedImage = '')}
    class="fixed inset-0 backdrop-blur-lg bg-gray-900 bg-opacity-30 flex items-center justify-center z-50"
    style="border: none; background: none; padding: 0;"
  >
    <img
      src={selectedImage}
      alt="Full size"
      class="object-cover rounded-lg shadow-lg border-4 border-white"
    />
  </button>
{/if}

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    margin-bottom: 1rem;
    color: #c00000;
    text-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
  }

  .locations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .location-card {
    border: 1px solid #500000;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: #2a0000;
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.5),
      0 0 15px rgba(80, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
  }

  .location-card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 6px 15px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(120, 0, 0, 0.4);
    border-color: #800000;
  }

  .location-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #500000;
    filter: saturate(0.9) contrast(1.1);
  }

  .location-info {
    padding: 1rem;
  }

  .location-info h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    color: #ff9999;
  }

  .location-info p {
    margin-bottom: 1rem;
    color: #e0e0e0;
  }

  .location-coordinates {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    color: #a0a0a0;
    border-top: 1px solid #500000;
    padding-top: 0.5rem;
  }
</style>
