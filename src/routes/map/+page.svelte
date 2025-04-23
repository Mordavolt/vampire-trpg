<script lang="ts">
  import {
    ControlLayers,
    Icon,
    LayerGroup,
    Map,
    Marker,
    Popup,
    TileLayer,
    Polygon
  } from 'sveaflet';
  import type { BaseIconOptions, MapOptions } from 'leaflet';
  import type { Location } from '$lib/server/locations';
  import type { Domain } from '$lib/server/domains';

  interface Data {
    locations: Location[];
    domains: Domain[];
  }

  let { data }: { data: Data } = $props();

  const mapOptions: MapOptions = {
    center: { lat: 56.949055, lng: 24.099086 },
    zoom: 12
  };

  const openStreetMapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const satelliteUrl =
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  const iconOptions: BaseIconOptions = {
    iconSize: [60, 60],
    iconAnchor: [30, 30],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
  };
</script>

<svelte:head>
  <title>Map - Locations Explorer</title>
</svelte:head>

<div class="container">
  <h1>Locations Map</h1>

  <div class="map-container">
    <Map options={mapOptions}>
      <ControlLayers>
        <TileLayer name="Satellite" url={satelliteUrl} checked={true} layerType="base" />
        <TileLayer name="Map" url={openStreetMapUrl} layerType="base" />

        <LayerGroup checked={true} name="Locations" layerType="overlay">
          {#each data.locations as location}
            <Marker latLng={[location.coordinates.lat, location.coordinates.lng]}>
              <Icon
                options={{
                  ...iconOptions,
                  iconUrl: 'images/icons/' + location.map_marker_image
                }}
              />
              <Popup>
                <div class="popup-content">
                  <b>{location.name}</b>
                  <img src={location.image} alt={location.name} class="popup-image" />
                  <p>{location.description}</p>
                  <p><b>Regnant:</b>{location.regnant}</p>
                </div>
              </Popup>
            </Marker>
          {/each}
        </LayerGroup>
        <LayerGroup checked={true} name="Domains" layerType="overlay">
          {#each data.domains as domain}
            <Polygon
              latLngs={domain.coordinates}
              options={{
                color: domain.color
              }}
            />
          {/each}
        </LayerGroup>
      </ControlLayers>
    </Map>
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
    color: #c00000;
    text-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
  }

  .map-container {
    height: 600px;
    margin-bottom: 1rem;
    border: 1px solid #500000;
    border-radius: 0.25rem;
    box-shadow: 0 0 10px rgba(80, 0, 0, 0.3);
  }

  /* Override popup styles for the map */
  :global(.leaflet-popup-content-wrapper) {
    background-color: #2a0000;
    color: #e0e0e0;
    border-radius: 0.25rem;
  }

  :global(.leaflet-popup-tip) {
    background-color: #2a0000;
  }

  :global(.leaflet-marker-icon) {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%);
  }

  .popup-content {
    max-width: 200px;
    color: #e0e0e0;
  }

  .popup-content b {
    color: #ff9999;
  }

  .popup-image {
    width: 100%;
    height: auto;
    margin: 0.5rem 0;
    border: 1px solid #500000;
  }
</style>
