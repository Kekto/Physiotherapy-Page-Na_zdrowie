<template>
    <div class="pricing-item">
        <img class="pricing-item__image" :src="image"/>
        <h3>{{ title }}</h3>
        <DividerLine/>
        <div class="pricing-item__description">
            {{ description }}
        </div>
        <DividerLine/>
        <div class="pricing-item__price">
            <div class="pricing-item__price__value">
                {{ value }}
            </div>
            <div class="pricing-item__price__currency">
                {{ currency }}
           </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import DividerLine from '@/components/DividerLine.vue'
// eslint-disable-next-line
const props = defineProps({
    title: String,
    image: String,
    description: String,
    value: Number,
    currency: String
});
</script>

<style lang="scss" scoped>
.pricing-item{
    width: fit-content;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 5px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    transition: 0.3s;
    border-radius: 5px;
    
    &__image{
        width: 300px;
        height: 240px;
        background-color: gray;
        border-radius: 5px 5px 0px 0px;
    }

    &__description{
        width: 300px;
        box-sizing: border-box;
        text-align: justify;
        padding:  0px 20px 0px 20px;
    }

    &__price{
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 8px;

        &__value{
            font-size: 30px;
        }

        &__currency{
            display: flex;
            align-items:end;
            font-size: 18px;
        }
    }

    &:hover{
        box-shadow: #0e9156 0px 1px 3px 2px, #0e9156 0px 1px 3px 1px;
        transition: 0.3s;
    }
}
</style>