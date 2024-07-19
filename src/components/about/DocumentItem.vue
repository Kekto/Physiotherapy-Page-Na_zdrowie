<template>
    <img src="@/assets/icons/file.svg" class="icon"/>
    <a :href="path" target="_blank" class="item">{{ name }}</a>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const props = defineProps({
    name: String,
    path: String
});
</script>

<style scoped lang="scss">
.icon{
    height: 20px;
    padding-right: 12px;
}

.item{
    transition: 0.3s;
    font-weight: bold;
    text-decoration: none;
    color: black;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;

    &:hover{
        transition: 0.3s;
        color: #0e9156;
        cursor: pointer;
    }
}
</style>