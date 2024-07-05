<template>
  <div class="about">
    <TitleBanner title="O mnie"/>
    <div class="about__content">
      <!-- <a href="/media/CV_PL.pdf" target="_blank"> PDF File EXAMPLE</a> -->
      <img class="about__content__image" src="@/assets/łukasz.png">
      <div class="about__content__details">
        <h4>Łukasz Piszcz</h4>
        <div class="about__content__details__paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <div class="about__content__details__paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
    </div>
    <div class="about__documents">
      <h4>Certyfikaty i dyplomy</h4>
      <div class="about__documents__list">
        <div v-for="item in documents" :key="item.name" class="about__documents__list__item">
          <AboutDocumentItem 
            :name="item.name"
            @click="openFile(item.path)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBanner from '@/components/TitleBanner.vue';
import AboutDocumentItem from '@/components/AboutDocumentItem.vue'

const documents = [
  {
    name: "file_01",
    path: String("/media/CV_PL.pdf")
  },
  {
    name: "file_02",
    path: String("/media/CV_PL.pdf")
  },
  {
    name: "file_03",
    path: String("/media/CV_PL.pdf")
  },
  {
    name: "file_04",
    path: String("/media/CV_PL.pdf")
  },
  {
    name: "file_05",
    path: String("/media/CV_PL.pdf")
  },
  {
    name: "file_06",
    path: String("/media/CV_PL.pdf")
  },
]

const openFile = ((path:string) => {
  window.open(path, "_blank")?.focus()
})

</script>

<style scoped lang="scss">
.about{

  &__content{
    margin: 5vw;
    margin-bottom: 40px;
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    &__image{
      width: 300px;
      height: 450px;
    }

    &__details{
      text-align: left;
      margin: 0px 20px 0px 20px;
      max-width: 500px;
      min-width: 300px;
      border-left: 2px solid #0e9156;
      padding-left: 20px;

      &__paragraph{
        margin-bottom: 20px;
      }
    }
  }

  &__documents{
    margin: 5vw;
    text-align: left;

    &__list{
    margin-bottom: 40px;
    border-left: 2px solid #0e9156;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__item{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 50px;
      padding-left: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    }
  }
}
</style>
