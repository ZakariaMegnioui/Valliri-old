// Initialize the platform object:
var platform = new H.service.Platform({
  apikey: "IC0xPYGcOK0JAoW_79NbFBiiUHdu-61_oINrGXzawC8",
  useCIT: true,
  useHTTPS: true,
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById("mapContainer"),
  maptypes.raster.normal.mapnight,
  {
    center: new H.geo.Point(30.4278, -9.5981),
    zoom: 3.5,
    pixelRatio: window.devicePixelRatio || 1,
  }
);
// Define a variable holding SVG mark-up that defines an icon image:
// Create a marker icon from an image URL:
var icon = new H.map.Icon("../img/icons8-location-update-48.png");

// Create a marker using the previously instantiated icon:
var marker = new H.map.Marker({ lat: 30.4278, lng: -9.5981 }, { icon: icon });

// Add the marker to the map:
map.addObject(marker);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components

// Now use the map as required...
moveMapToLocation(map);
