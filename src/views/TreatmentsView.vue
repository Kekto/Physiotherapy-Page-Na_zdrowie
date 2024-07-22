<template>
  <div class="treatments">
    <TitleBanner title="Zabiegi" />
    <div class="treatments__content" v-for="item in treatmentTypes" :key="item.type">
      <TreatmentItem 
        :type="item.type"
        :details="item.details"
        :image-name="item.imageName"
        :child-treatments="item.treatments" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBanner from '@/components/TitleBanner.vue';
import TreatmentItem from '@/components/treatments/TreatmentItem.vue'

const treatmentTypes = [
  {
    type: "Treatment type 01",
    details: "Treatment type 01 details",
    imageName: "treatment_01",
    treatments: [
      {
        name: "Treatment type 01 - Name 01",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "Treatment type 01 - Name 02",
        details: "Treatment type 01 - Name 02 details"
      }
    ]
  },
  {
    type: "Treatment type 02",
    details: "Treatment type 02 details",
    imageName: "treatment_02",
    treatments: [
      {
        name: "Treatment type 02 - Name 01",
        details: "Treatment type 02 - Name 01 details"
      }
    ]
  },
  {
    type: "Treatment type 03",
    details: "Treatment type 03 details",
    imageName: "treatment_03",
    treatments: [
      {
        name: "Treatment type 03 - Name 01",
        details: "Treatment type 03 - Name 01 details"
      },
      {
        name: "Treatment type 03 - Name 02",
        details: "Treatment type 03 - Name 02 details"
      },
      {
        name: "Treatment type 03 - Name 03",
        details: "Treatment type 03 - Name 03 details"
      }
    ]
  },
]
</script>

<style scoped lang="scss">
.treatments{

  &__content{
    margin: 5vw;
    margin-bottom: 40px;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>