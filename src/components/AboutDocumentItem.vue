<template>
    <div class="item">
        {{ $props.name }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// eslint-disable-next-line
const props = defineProps({
    name: String
});
</script>

<style scoped lang="scss">
.item{
    transition: 0.3s;
    font-weight: bold;
    
    &:hover{
        transition: 0.3s;
        color: #0e9156;
        cursor: pointer;
    }
}
</style>