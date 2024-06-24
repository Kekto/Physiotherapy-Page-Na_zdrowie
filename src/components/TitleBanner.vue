<template>
    <div class="title-banner">
      <h1>{{$props.title}}</h1>
    </div>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: String
});
</script>

<style lang="scss" scoped>
.title-banner{
  height: 75px;
  width: auto;
  background-color: #42b983;
  display: flex;
  justify-content: left;
  align-items: center;
}

h1{
  margin: 0px;
  color: white;
  padding-left: 24px;
  font-weight: normal;
}
</style>