// Set up image
// var imageBounds = [[0, 0], [-5.461, 7.8127]]
var imageBounds = [[0, 0], [-5.4, 7.8]]

var imageLondon = L.imageOverlay('./london_map_large.jpg', imageBounds, {
    attribution: '<a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~309018~90079521:Composite--Sheets-1-6--Map-of-Londo">(Composite map of) (Sheets 1-6) Map of London, From an actual Survey made in the Years 1824.1825 & 1826. By C. and J. Greenwood. Published by the Proprietors... August 21 1827. </a>'
});

// Load GeoJSON from file
var domains = L.geoJSON()
const loadJson = async () => {
    var res = await fetch('./london-geojson.json');
    const json = await res.json();

    domains.addData(json.geojson)
}

loadJson();

// Markers
var test = L.marker([-1, 1])

var markers = L.layerGroup([test])

var overlays = {
    "Domains": domains,
    "Markers": markers
}

var map = L.map('map', {
    layers: [imageLondon, domains],
    maxBounds: imageBounds
})

map.fitBounds(imageBounds)

var layerControl = L.control.layers({}, overlays, {}).addTo(map)

map.pm.addControls({
    position: 'bottomright',
})

var testShape = {
    vertecies: []
}

map.on("pm:drawstart", ({ workingLayer}) => {
    testShape.vertecies = [];
    workingLayer.on("pm:vertexadded", (e) => {
        testShape.vertecies.push(e.latlng)
    })
})

map.on("pm:create", (e) => {
    console.log(testShape.vertecies)
})