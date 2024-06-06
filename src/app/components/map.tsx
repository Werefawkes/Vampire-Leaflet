"use client"

// Thanks to this article for helping me get Leaflet to work:
// https://andresprieto-25116.medium.com/how-to-use-react-leaflet-in-nextjs-with-typescript-surviving-it-21a3379d4d18

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { LatLng, LatLngExpression, LatLngTuple } from 'leaflet';

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

const position = new LatLng(51.505, -0.09)

const polygon = [
    [51, 0],
    [51.01, 0],
    [51, 1]
]

function ToLatLng(array: number[][]) {
    return array.map(([lat, lng]) => (new LatLng(lat, lng)))
}

const Map = (Map: MapProps) => {
    const { zoom = defaults.zoom, posix } = Map

    return (
        <MapContainer
            center={posix}
            zoom={zoom}
            maxZoom={16}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="http://maps.nls.uk/projects/subscription-api/">National Library of Scotland</a>'
                url="https://api.maptiler.com/tiles/uk-osgb63k1885/{z}/{x}/{y}.png?key=VLTPHr9mfRwVtty3KayI"
            />
            <Marker position={position} />
            <Polygon positions={ToLatLng(polygon)} />
        </MapContainer>
    )
}

export default Map