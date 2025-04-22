<script lang="ts">
    import { Icon, Map, Marker, Popup, TileLayer } from 'sveaflet';
    import type { BaseIconOptions, MapOptions } from 'leaflet';
    import type { Location } from '$lib/server/locations';

    interface Data {
        locations: Location[];
    }

    let { data }: { data: Data } = $props();

    const mapOptions: MapOptions = {
        center: { lat: 56.949055, lng: 24.099086 },
        zoom: 12
    };

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // const tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    const iconOptions: BaseIconOptions = {
        iconSize: [60, 60],
        iconAnchor: [20, 60],
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
            <TileLayer url={tileUrl}/>

            {#each data.locations as location}
                <Marker latLng={[location.coordinates.lat, location.coordinates.lng]}>
                    <Icon options={{...iconOptions, iconUrl: 'images/icons/'+location.map_marker_image}}/>
                    <Popup>
                        <div class="popup-content">
                            <b>{location.name}</b>
                            <img src={location.image} alt={location.name} class="popup-image"/>
                            <p>{location.description}</p>
                            <p><b>Regnant:</b>{location.regnant}</p>
                        </div>
                    </Popup>
                </Marker>
            {/each}
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
    }

    .map-container {
        height: 600px;
        margin-bottom: 1rem;
    }

    .popup-content {
        max-width: 200px;
    }

    .popup-image {
        width: 100%;
        height: auto;
        margin: 0.5rem 0;
    }
</style>
