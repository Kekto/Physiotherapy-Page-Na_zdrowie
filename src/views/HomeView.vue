<template>
	<div class="home">
		<div class="title-banner">
			<ImageCarousel />
		</div>
		<div class="short-about-me">
			<div class="short-about-me__content">
				<img class="short-about-me__content__image" src="@/assets/łukasz.png" />
				<div class="short-about-me__content__details">
					<h2>Łukasz Piszcz</h2>
					<div>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum."
					</div>
					<button class="button" @click="router.push({ path: '/o-mnie' })">
						Więcej o mnie
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import ImageCarousel from "@/components/home/ImageCarousel.vue";
import router from "@/router";
</script>

<style lang="scss" scoped>
.short-about-me {
	background-color: #42b983;
	display: flex;
	justify-content: center;

	&__content {
		margin: 5vw;
		margin-bottom: 40px;
		margin-top: 40px;

		width: 1100px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;

		&__image {
			width: 300px;
			height: 450px;
			background-color: rgb(226, 226, 226);
			box-shadow: rgba(88, 88, 88, 0.9) 0px 7px 29px 0px;
		}

		&__details {
			margin-top: 20px;
			text-align: justify;
			max-width: 500px;
			min-width: 300px;
			color: white;
			font-size: 20px;
			height: fit-content;
		}
	}
}

button {
	width: 100%;
	padding: 8px 20px 8px 20px;
	margin: 60px 0 0 0;
	align-self: center;
	color: #42b983;
	background: white;
	font-weight: bold;
	font-size: 16px;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	border: none;
	transition: 0.3s;
	cursor: pointer;

	&:hover:not(:disabled) {
		color: white;
		background: #42b983;
	}
}
</style>
