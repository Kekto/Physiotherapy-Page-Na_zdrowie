<template>
	<nav>
		<NavBar />
	</nav>
	<router-view class="router-view" />
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

document.title = "Po Zdrowie Osteopatia i Fizjoterapia - Łukasz Piszcz";
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

body {
	margin: 0px;
}

nav {
	z-index: 10;
	position: fixed;
	height: 70px;
	align-content: center;
	width: 100%;
	background-color: white;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

	@media (max-width: 750px) {
		height: 100px;
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		transition: 0.3s;

		&:hover {
			color: #0e9156;
		}

		&.router-link-exact-active {
			color: #0e9156;
		}
	}
}

.router-view {
	padding-top: 70px;

	@media (max-width: 750px) {
		padding-top: 100px;
	}
}
</style>
