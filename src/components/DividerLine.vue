<template>
    <div class="divider-line">
        <div v-if="!vertical">
            <hr class="horizontal">
        </div>
        <div v-else>
            <div class="divider-line__vertical">&nbsp;</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// eslint-disable-next-line
const props = defineProps({
    vertical: Boolean
});
</script>

<style lang="scss" scoped>
.divider-line{
    margin: 20px;
    height: 2px;

    &__vertical{
        border-left: 1px solid black;
    }
}
</style>