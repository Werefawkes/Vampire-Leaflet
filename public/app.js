var imageSize = [14938, 21839];
var imageScale = 0.001;

var imageBounds = [[(-imageSize[0] * imageScale) / 2, (-imageSize[1] * imageScale) / 2], [[(imageSize[0] * imageScale) / 2, (imageSize[1] * imageScale) / 2]]]

var map = L.map('map').fitBounds(imageBounds).setMaxBounds(imageBounds).setZoom(10);

L.imageOverlay('./london_map_large.jpg', imageBounds).addTo(map);