<script lang="ts">
    import 'leaflet/dist/leaflet.css';
    import { Icon, Map, Marker, Popup, TileLayer } from 'sveaflet';
    import type { BaseIconOptions, MapOptions, TileLayerOptions } from 'leaflet';
    import type { Location } from '$lib/server/locations';
    import { onMount } from "svelte";

    interface Data {
        locations: Location[];
    }

    let { data }: { data: Data } = $props();

    const mapOptions: MapOptions = {
        center: { lat: 56.949055, lng: 24.099086 },
        zoom: 12
    };

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions: TileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19,
        attribution: '© OpenStreetMap contributors'
    };
    const iconOptions: BaseIconOptions = {
        iconSize: [60, 60],
        iconAnchor: [20, 60],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28]
    };
    const googleMapStyles = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ae2323"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "weight": "1.5"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": "15"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ff0000"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": "15"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": "5"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": "5"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": "15"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#030506"
                },
                {
                    "lightness": "16"
                }
            ]
        }
    ];

    onMount(() => {
        // Load Google Maps API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB028vR6P3n_IwAp6WZETtHWMXU-ugCL9E`;
        document.head.appendChild(script);
    });

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
