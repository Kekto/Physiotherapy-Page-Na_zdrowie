<template>
  <div class="pricing">
    <TitleBanner title="Cennik"/>
    <div class="pricing__content">
      <PricingItem v-for="item in prices" :key="item.title"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :value="item.value"
        :currency="item.currency"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBanner from '@/components/TitleBanner.vue';
import PricingItem from '@/components/PricingItem.vue'

const prices = [
  {
    image: "",
    title: "Nazwa zabiegu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    value: 110,
    currency: "zł"
  },
  {
    image: "",
    title: "Nazwa zabiegu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    value: 150,
    currency: "zł"
  },
  {
    image: "",
    title: "Nazwa zabiegu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    value: 230,
    currency: "zł"
  }
]
</script>

<style lang="scss" scoped>
.pricing{

  &__content{
    margin: 5vw;
    margin-bottom: 40px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
  