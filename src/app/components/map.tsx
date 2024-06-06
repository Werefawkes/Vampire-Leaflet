"use client"

// Thanks to this article for helping me get Leaflet to work:
// https://andresprieto-25116.medium.com/how-to-use-react-leaflet-in-nextjs-with-typescript-surviving-it-21a3379d4d18

import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap, useMapEvents, Polyline } from "react-leaflet";
import { Control, control, LatLng, LatLngExpression, LatLngTuple } from 'leaflet';
import J from "../../data.json"

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LondonMarker from "./LondonMarker";

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 13,
}

const ImportedData = J.mapMarkers[0]

const offset = [51.553, -0.208]
const scale = [0.017, 0.03]

function ToLatLng(loc: number[]) {
    return new LatLng((loc[0] * scale[0]) + offset[0], (loc[1] * scale[1]) + offset[1] )
}

function ArrayToLatLng(array: number[][]) {
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

            {ImportedData.markers.map((marker) => <LondonMarker key={marker.link} tooltip={marker.link} position={ToLatLng(marker.loc)}/>)}
        </MapContainer>
    )
}

export default Map