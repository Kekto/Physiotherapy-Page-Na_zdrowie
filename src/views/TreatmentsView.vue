<template>
  <div class="treatments">
    <TitleBanner title="Zabiegi" />
    <div class="treatments__content" v-for="item in treatmentTypes" :key="item.type">
      <TreatmentItem 
        :type="item.type"
        :details="item.details"
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
    treatments: [
      {
        name: "Treatment type 01 - Name 01",
        details: "Treatment type 01 - Name 01 details"
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
    treatments: [
      {
        name: "Treatment type 03 - Name 01",
        details: "Treatment type 03 - Name 01 details"
      },
      {
        name: "Treatment type 03 - Name 02",
        details: "Treatment type 01 - Name 02 details"
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