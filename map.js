const getMap = () =>{
var platform = new H.service.Platform({
 'app_id': '{YOUR_APP_ID}',
 'app_code': '{YOUR_APP_CODE}'
 });

 // Obtain the default map types from the platform object
 var maptypes = platform.createDefaultLayers();

 // Instantiate (and display) a map object:
 var map = new H.Map(
 document.getElementById('mapContainer'),
 maptypes.normal.map,
 {
   zoom: 10,
   center: { lng: 13.4, lat: 52.51 }
 });
}
 module.exports = getMap;
