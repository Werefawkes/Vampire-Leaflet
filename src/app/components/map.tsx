// src/components/map/index.tsx

"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 19,
}

const Map = (Map: MapProps) => {
    const { zoom = defaults.zoom, posix } = Map

    return (
        <MapContainer
            center={posix}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="http://maps.nls.uk/projects/subscription-api/">National Library of Scotland</a>'
                url="https://api.maptiler.com/tiles/uk-osgb63k1885/{z}/{x}/{y}.png?key=VLTPHr9mfRwVtty3KayI"
            />
        </MapContainer>
    )
}

export default Map