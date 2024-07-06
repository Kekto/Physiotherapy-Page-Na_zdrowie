<template>
    <div>
        {{ type }}
    </div>
    <div>
        {{ details }}
    </div>
    <div v-for="item in childTreatments" :key="item.name">
        {{ item.name }}
        {{ item.details }}
    </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';

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
</script>

<style scoped lang="scss">
</style>