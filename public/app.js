// Set up image
// var imageBounds = [[0, 0], [-5.461, 7.8127]]
var imageBounds = [[0, 0], [-5.4, 7.8]]

// var map = L.map('map').fitBounds(imageBounds).setMaxBounds(imageBounds);
var imageLondon = L.imageOverlay('./london_map_large.jpg', imageBounds, {
    attribution: '<a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~309018~90079521:Composite--Sheets-1-6--Map-of-Londo">(Composite map of) (Sheets 1-6) Map of London, From an actual Survey made in the Years 1824.1825 & 1826. By C. and J. Greenwood. Published by the Proprietors... August 21 1827. </a>'
});

var map = L.map('map', {
    layers: [imageLondon],
    maxBounds: imageBounds
})

map.fitBounds(imageBounds)

// Markers
var test = L.marker([-1, 1])

var markers = L.layerGroup([test])

var overlays = {
    "Markers": markers
}

var layerControl = L.control.layers({}, overlays).addTo(map)

// Load GeoJSON from file
const loadJson = async () => {
    var res = await fetch('./london-geojson.json');
    const json = await res.json();

    L.geoJSON(json.geojson).addTo(map)
}

loadJson()

map.pm.addControls({
    position: 'bottomright',
})

layers = map.pm.getGeomanLayers();
console.log(layers)

imageLondon.pm.enable()