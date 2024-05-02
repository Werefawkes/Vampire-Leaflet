var imageBounds = [[0, 0], [-5.4, 7.8]]

var imageLondon = L.imageOverlay('./london_map_large.jpg', imageBounds, {
    attribution: '<a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~309018~90079521:Composite--Sheets-1-6--Map-of-Londo">(Composite map of) (Sheets 1-6) Map of London, From an actual Survey made in the Years 1824.1825 & 1826. By C. and J. Greenwood. Published by the Proprietors... August 21 1827. </a>'
});

// // Load GeoJSON from file
var domains = L.geoJSON()
var markersLayer = L.layerGroup()

const loadJson = async () => {
    var res = await fetch('./data.json');
    const json = await res.json();

    // Markers
    console.log(json.mapMarkers[0])
    json.mapMarkers[0].markers.forEach(element => {
        // Create marker
        markersLayer.addLayer(L.marker(element.loc))
    });
}
loadJson();

// Markers

var overlays = {
    "Domains": domains,
    "Markers": markersLayer
}

var map = L.map('map', {
    layers: [imageLondon, domains],
    maxBounds: imageBounds
})

map.fitBounds(imageBounds)

var layerControl = L.control.layers({}, overlays, {}).addTo(map)