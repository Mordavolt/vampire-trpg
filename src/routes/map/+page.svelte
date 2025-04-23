<script lang="ts">
  import {
    ControlLayers,
    Icon,
    LayerGroup,
    Map,
    Marker,
    Polygon,
    Popup,
    TileLayer,
    Tooltip
  } from 'sveaflet';
  import type { MapOptions } from 'leaflet';
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
</script>

<svelte:head>
  <title>Map - Locations Explorer</title>
</svelte:head>

<div class="container">
  <h1>Locations Map</h1>

  <div class="map-container">
    <Map options={mapOptions}>
      <ControlLayers>
        <TileLayer
          name="Satellite"
          url={'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'}
          checked={true}
          layerType="base"
        />
        <TileLayer
          name="Map"
          url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          layerType="base"
        />

        <LayerGroup checked={true} name="Locations" layerType="overlay">
          {#each data.locations as location}
            <Marker latLng={[location.coordinates.lat, location.coordinates.lng]}>
              <Icon
                options={{
                  iconSize: [60, 60],
                  iconAnchor: [30, 30],
                  popupAnchor: [0, -30],
                  iconUrl: 'images/icons/' + location.map_marker_image,
                  className: location.destroyed ? 'marker-icon-red' : 'marker-icon-white'
                }}
              />
              <Tooltip class={location.destroyed ? 'line-through' : ''}>{location.name}</Tooltip>
              <Popup>
                <div class="popup-content">
                  <b>{location.name}</b>
                  <img src={'images/locations/' + location.image} alt={location.name} class="popup-image" />
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
            ></Polygon>
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

  :global(.marker-icon-white) {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(100%);
  }

  :global(.marker-icon-red) {
    filter: invert(19%) sepia(96%) saturate(6101%) hue-rotate(350deg) brightness(71%) contrast(113%);
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
