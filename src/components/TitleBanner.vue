<template>
    <div class="title-banner">
      <h2>{{$props.title}}</h2>
    </div>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// eslint-disable-next-line
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

h2{
  margin: 0px;
  font-size: 30px;
  color: white;
  padding-left: 24px;
  font-weight: normal;
}
</style>