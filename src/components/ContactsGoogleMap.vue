<template>
  <GoogleMap
    api-key="AIzaSyD4vD_jiEOYTc0sq7_3gJ0xWG1YqSn2aJc"
    class="google-map"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>


<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 51.241562099387075, lng: 22.518481991812706 }
</script>

<style lang="scss" scoped>
.google-map{
  min-width: 400px;
  min-height:300px;

  width:45vw;
  height:40vh;
}

</style>