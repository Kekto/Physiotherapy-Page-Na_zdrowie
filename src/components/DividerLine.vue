<template>
    <div class="divider-line" v-if="!vertical">
        <hr class="divider-line-horizontal">
    </div>
    <div v-else>
        <div class="divider-line-vertical">&nbsp;</div>
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
.divider-line-horizontal{
    height: 2px;
    margin: 20px 0 20px 0;
}

.divider-line-vertical{
    height: 100%;
    border-left: 1px solid black;
    margin: 0 20px 0 20px;
}

</style>