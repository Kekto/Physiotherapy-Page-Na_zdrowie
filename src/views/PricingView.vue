<template>
  <div class="pricing">
    <TitleBanner title="Cennik"/>
    <div class="pricing__content">
      <div class="pricing-item">
        <img class="pricing-item__image" src="@/assets/images/pricing.jpg"/>
        <h3> Cena zabiegu </h3>
        <DividerLine/>
        <div class="pricing-item__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="pricing-item__buttons" @click="router.push({path: '/zabiegi'})">
            <button class="button"> Zobacz zabiegi </button>
        </div>
        <DividerLine/>
        <div class="pricing-item__price">
            <div class="pricing-item__price__value"> 180 </div>
            <div class="pricing-item__price__currency"> zł </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBanner from '@/components/TitleBanner.vue';
import DividerLine from '@/components/DividerLine.vue'
import router from '@/router';

</script>

<style lang="scss" scoped>
.pricing{

  &__content{
    margin: 5vw;
    margin-bottom: 40px;
    margin-top: 40px;

    display: flex;
    justify-content: center;
  }
}

.pricing-item{
    width: 900px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 5px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    transition: 0.3s;
    border-radius: 5px;
    
    &__image{
        inset: 0;
        width: 100%;
        height: 25vw;
        max-height: 400px;
        display: block;

        object-fit: cover;
        object-position: center;
        
        background-color: gray;
        border-radius: 5px 5px 0px 0px;
    }

    &__description{
        width: auto;
        box-sizing: border-box;
        text-align: justify;
        padding:  0px 20px 0px 20px;
    }

    &__buttons{
        display: flex;
        flex-direction: row;
        justify-content: center
    }

    &__price{
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 8px;

        &__value{
            font-size: 30px;
        }

        &__currency{
            display: flex;
            align-items:end;
            font-size: 18px;
        }
    }
}

button{
    padding: 8px 20px 8px 20px;
    margin: 24px 0 0 0;
    align-self: center;
    background: #42b983;
    color: white;
    font-weight: bold;
    font-size: 16px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border: none;
    transition: 0.3s;
    cursor: pointer;

    &:hover:not(:disabled){
        background: white;
        color:#42b983;    
    }
}
</style>
  