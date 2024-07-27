<template>
	<GoogleMap
		api-key="AIzaSyD4vD_jiEOYTc0sq7_3gJ0xWG1YqSn2aJc"
		class="google-map"
		:center="center"
		:zoom="16">
		<Marker :options="{ position: center }" />
	</GoogleMap>
</template>

<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: 51.24190516009711, lng: 22.516958270265285 };
</script>

<style lang="scss" scoped>
.google-map {
	min-width: 400px;
	width: 40%;
	min-height: 300px;
	height: 400px;
}
</style>
