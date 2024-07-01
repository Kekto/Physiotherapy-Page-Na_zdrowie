<template>
    <div class="pricing-item">
        <img class="pricing-item__image" :src="image"/>
        <h3>{{$props.title}}</h3>
        <div class="pricing-item__description">
            {{$props.description}}
        </div>
        <div class="pricing-item__price">
            <div class="pricing-item__price__value">
                {{ $props.value }}
            </div>
            <div class="pricing-item__price__currency">
                {{ props.currency }}
           </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
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

    &__image{
        width: 300px;
        height: 240px;
        background-color: gray;
    }

    &__description{
        width: 300px;
        box-sizing: border-box;
        text-align: justify;
        padding: 20px;
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
}
</style>