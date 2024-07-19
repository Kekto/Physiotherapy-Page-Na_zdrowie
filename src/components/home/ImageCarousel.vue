<template>
    <div class="carousel-container">
        <img class="carousel-container__slide" src="@/assets/logo.png" alt="#1"/>
        <img class="carousel-container__slide active" src="@/assets/łukasz.png" alt="#2"/>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
let slideIndex = 0;
let intervalId = null;
let slides : NodeListOf<Element>;
onMounted(() => {
    slides = document.querySelectorAll(".carousel-container img");

    document.addEventListener("DOMContentLoaded", initializeSlider);
})

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("active");
        intervalId = setInterval(nextSlide, 5000);
    }
    console.log(slides)
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
.carousel-container{
    width: 100vw;
    height: 30vw;
    // background: #c0c0c0;
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