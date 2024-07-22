<template>
    <div class="carousel-banner">
        <h1> testowy tekst</h1>
    </div>
    <div class="carousel-container">
        <img class="carousel-container__slide" src="@/assets/logo.png" alt="#1"/>
        <img class="carousel-container__slide" src="@/assets/łukasz.png" alt="#2"/>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

let slideIndex = 0;
let intervalId = null;
// eslint-disable-next-line
let slides : NodeListOf<Element>;

onMounted(() => {
    slides = document.querySelectorAll(".carousel-container img");
    initializeSlider();
})

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("active");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index:number){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[slideIndex].classList.add("active");
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
</script>

<style scoped lang="scss">
.carousel-banner{
    position: absolute;
    z-index: 1;
    padding: 0 30px 0 24px;

    border-top: 50px solid #42b983;
	border-right: 25px solid transparent;
	height: 0;

    h1 {
        margin: 12px 0 12px 0;
        position: relative;
        top: -56px;
        color: rgb(235, 235, 235);
    }
}
.carousel-container{
    width: 100vw;
    min-height: 35vh;
    height: 30vw;
    position: relative;

    &__slide{
        position: absolute;
        inset: 0;
        opacity: 0;

        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

        &:not(.active){
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
    from {opacity: 0;}
    to {opacity: 1;}
}

@keyframes fade-out {
    from {opacity: 1;}
    to {opacity: 0;}
}
</style>