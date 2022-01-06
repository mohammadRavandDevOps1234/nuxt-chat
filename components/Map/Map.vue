<template>
    <div id="map" style="width:100%;height:300px"></div>
</template>

<script>
export default {
     head: {
    title: 'My awesome project', // Other meta information
    script: [
        { hid: 'stripe', src: 'http://localhost:3000/javascript/map.js' },
    ],
    link: [{ rel:"stylesheet", type:"text/css", href:'https://tabatabaee.info/scripts/mapbox-gl.css' }]
  },
   
     
}
</script>