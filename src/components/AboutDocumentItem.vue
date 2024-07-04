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
    width: auto;
}
</style>