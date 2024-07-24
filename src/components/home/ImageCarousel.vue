<template>
	<div class="carousel-container">
		<img
			class="carousel-container__slide"
			src="@/assets/images/treatment_01.jpg"
			alt="#1" />
		<img
			class="carousel-container__slide"
			src="@/assets/images/treatment_02.jpg"
			alt="#2" />
		<img
			class="carousel-container__slide"
			src="@/assets/images/treatment_03.jpg"
			alt="#3" />

		<div class="carousel-overlay">
			<div class="carousel-overlay__citation">
				“To find health should be the object of the doctor. Anyone can find
				disease.”
				<div class="author">― Andrew Taylor Still</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

let slideIndex = 0;
let intervalId = null;
// eslint-disable-next-line
let slides: NodeListOf<Element>;

onMounted(() => {
	slides = document.querySelectorAll(".carousel-container img");
	initializeSlider();
});

function initializeSlider() {
	if (slides.length > 0) {
		slides[slideIndex].classList.add("active");
		intervalId = setInterval(nextSlide, 5000);
	}
}

function showSlide(index: number) {
	if (index >= slides.length) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = slides.length - 1;
	}

	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
	slides[slideIndex].classList.add("active");
}

function nextSlide() {
	slideIndex++;
	showSlide(slideIndex);
}
</script>

<style scoped lang="scss">
.carousel-overlay {
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.3);

	&__citation {
		position: absolute;
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: relative;
		color: rgb(235, 235, 235);
		font-size: 36px;
		font-style: italic;
		font-family: "Times New Roman", "Ancient Runes", serif;
	}
}

.author {
	font-size: 20px;
	margin-top: 20px;
}

.carousel-container {
	min-height: 35vh;
	height: 30vw;
	position: relative;

	&__slide {
		position: absolute;
		inset: 0;
		opacity: 0;

		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;

		&:not(.active) {
			animation-name: fade-out;
			animation-duration: 0.5s;
		}
	}
}

.active {
	opacity: 1;
	animation-name: fade-in;
	animation-duration: 0.5s;
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade-out {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
</style>
