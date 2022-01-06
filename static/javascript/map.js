var s=false;
function loadMap(){
    
    s=true;
    //the event occurred
    let map = initMap('map')
    // Change Center
    map.setCenter([51.39, 35.7])
    
    //Add Custom Marker
    let icon = createIcon(
        'https://fishopping.ir/templates/map/marker-48.png',
        48,
        48
        )
        let marker = AddMarker(map, [51.39178988, 35.70056027], icon, true)

function onDragEnd() {
    let lngLat = marker.getLngLat()
      document.getElementById('lng').value = lngLat.lng
      document.getElementById('lat').value = lngLat.lat
    sessionStorage.setItem('lat',lngLat.lat)
    sessionStorage.setItem('lng',lngLat.lng)

}
marker.on('dragend', onDragEnd);

function flyMarkerOneMap(lat, lng) {
    marker.setLngLat({ lng: lng, lat: lat })
    map.flyTo({
        center: [lng, lat],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    })
   
    document.getElementById('lng').value = lng
    document.getElementById('lat').value = lat
}

}

if(s==false){
    loadMap()
}