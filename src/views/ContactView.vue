<template>
  <div class="contact">
    <TitleBanner title="Kontakt"/>
    <div class="contact__content">
      <div class="contact__content__info">
        <div class="contact__content__info__details">
          <h3>FIZJO –  GABINET FIZJOTERAPII </h3>
        </div>
        <div class="contact__content__info__details">
          <a>Budynek Xxxxx: X piętro – lokal nr XX</a>
          <a>ul. Xxxxxxxx Xxxxxxxxxx X, XX-XXX Lublin</a>
        </div>
        <div class="contact__content__info__details">
          <a>poniedziałek-piątek: 0.00-00.00</a>
          <a>sobota: 0.00-00.00</a>
          <a>niedziela: nieczynne</a>
        </div>
        <div class="contact__content__info__details">
          <a>Telefon:</a>
          <a class="bold">XXX XXX XXX</a>
          <a href="mailto:info@mail.pl" class="bold link">info@mail.pl</a>
        </div>
      </div>
      <ContactsGoogleMap/>
    </div>
    <div class="contact__content" style="justify-content: center;">
      <MailToComponent/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBanner from '../components/TitleBanner.vue'
import ContactsGoogleMap from '../components/ContactsGoogleMap.vue';
import MailToComponent from '../components/MailToComponent.vue'
</script>

<style lang="scss" scoped>
.contact__content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5vw;
  margin-bottom: 40px;
  margin-top: 40px;
  justify-content: center;


  &__info{
    min-width: 400px;
    width: 40vw;
    display: flex;
    flex-direction: column;

    &__details{
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-bottom: 20px;
    }
  }
}
.bold{
  font-weight:600;
  font-size: 14px;
}
.link{
  text-decoration: none;
  color: black;

  &:hover{
    color: #0e9156;
  }
}
</style>