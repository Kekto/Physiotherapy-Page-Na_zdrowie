<template>
    <div class="item">
        <div class="item__content">
            <div class="item__content__image">&nbsp;</div>
            <div class="item__content__details">
                <h4>{{ type }}</h4>
                <DividerLine/>
                <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>

        </div>
        <div class="item__collapse-bar" @click="isCollapsed = !isCollapsed, collapse(String(type))">
            <a v-if="!isCollapsed">Rozwiń</a>
            <a v-else>Zwiń</a>
        </div>
        <div class="item__collapsible" :id="type">
            <div class="item__collapsible__item" v-for="item in childTreatments" :key="item.name">
                {{ item.name }}
                {{ item.details }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref } from 'vue';
import DividerLine from '../DividerLine.vue';

type ChildTreatment = {
    name: string,
    details: string
};

// eslint-disable-next-line
const props = defineProps({
    type: String,
    details: String,
    childTreatments: Object as PropType<ChildTreatment[]>,
});

const isCollapsed = ref(false);

const collapse = ((type:string) => {
    const collapsible = document.getElementById(type);
    if(collapsible){
        if(!isCollapsed.value){
        collapsible.style.maxHeight = '0px';
        } else {
            collapsible.style.maxHeight = '150px';
        }
    }
}
);
</script>

<style scoped lang="scss">
.item{
    height: 100px;
    min-width: 400px;
    width: 70vw;
    max-width: 900px;
    height: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    display: flex;
    flex-direction: column;
    align-self: center;

    &__content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        &__image{
            @media (max-width:850px) {
                width: 100%;
                height: 200px;
            }

            width: 250px;
            height: inherit;
            background-color: rgb(184, 184, 184);
        }

        &__details{
            @media (min-width:851px) {
                width: calc(100% - 290px);
            }
            display: flex;
            flex-direction: column;
            min-width: 300px;
            padding-left: 20px;
            padding-right: 20px;
        }

        h4{
            margin-bottom: 0px;
        }
    }

    &__collapse-bar{
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;

        &:hover{
            cursor: pointer;
            box-shadow: rgb(204, 219, 232) 0px 3px 6px 0px inset;
            transition: 0.3s;
        }
    }

    &__collapsible{
        max-height: 0px;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;

        display: flex;
        flex-direction: column;
        gap: 12px;

        &__item{
            margin-top: 12px;
        }
    }
}
</style>