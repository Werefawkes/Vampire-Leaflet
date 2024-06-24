"use client"

// Thanks to this article for helping me get Leaflet to work:
// https://andresprieto-25116.medium.com/how-to-use-react-leaflet-in-nextjs-with-typescript-surviving-it-21a3379d4d18

import { MapContainer, TileLayer, LayersControl, LayerGroup } from "react-leaflet";
import { LatLng, LatLngExpression, LatLngLiteral, LatLngTuple } from 'leaflet';
import J from "../../data.json"

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LondonMarker from "./LondonMarker";
import LondonShape from "./LondonShape";

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 13,
}

const ImportedData = J.mapMarkers[0]

const offset = [51.553, -0.202]
const scale = [0.017, 0.028]

function ToLatLng(loc: number[]) {
    return new LatLng((loc[0] * scale[0]) + offset[0], (loc[1] * scale[1]) + offset[1] )
}

function OffsetAndScale(positions: LatLngLiteral[]) {
    return positions.map((pos) => new LatLng((pos.lat * scale[0]) + offset[0], (pos.lng * scale[1]) + offset[1]))
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
            <LayersControl position="topright">
                <LayersControl.Overlay checked name="Markers">
                    <LayerGroup>
                        {ImportedData.markers.map((marker) => <LondonMarker key={marker.link} category={marker.type} tooltip={marker.link} position={ToLatLng(marker.loc)}/>)}
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Domains">
                    <LayerGroup>
                        {ImportedData.shapes.map((shape) => <LondonShape positions={OffsetAndScale(shape.vertices)} color={shape.color}/>)}
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    )
}

export default Map