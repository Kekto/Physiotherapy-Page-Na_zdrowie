<template>
	<div class="offer">
		<TitleBanner title="Co leczymy" />
		<div class="offer__content">
			<div class="offer__content__list">
				<div
					v-for="item in offerList"
					:key="item.type"
					@mouseover="setImagePath(item.type)">
					<OfferItem :type="item.type" :item-list="item.itemList" />
				</div>
			</div>
			<img
				v-show="imagePath == 'Kręgosłup'"
				class="offer__content__image"
				:src="require(`@/assets/images/Kręgosłup.jpg`)" />
			<img
				v-show="imagePath == 'Łokieć'"
				class="offer__content__image"
				:src="require(`@/assets/images/Łokieć.jpg`)" />
			<img
				v-show="imagePath == 'Bark'"
				class="offer__content__image"
				src="@/assets/images/Bark.jpg" />
			<img
				v-show="imagePath == 'Głowa'"
				class="offer__content__image"
				src="@/assets/images/treatment_03.jpg" />
			<img
				v-show="imagePath == 'Brzuch'"
				class="offer__content__image"
				src="@/assets/images/Brzuch.jpg" />
			<img
				v-show="imagePath == 'Biodro'"
				class="offer__content__image"
				src="@/assets/images/Biodro.jpg" />
			<img
				v-show="imagePath == 'Kolano'"
				class="offer__content__image"
				src="@/assets/images/Kolano.jpg" />
			<img
				v-show="imagePath == 'Stopa'"
				class="offer__content__image"
				src="@/assets/images/Stopa.jpg" />
		</div>
	</div>
</template>

<script setup lang="ts">
import TitleBanner from "@/components/TitleBanner.vue";
import OfferItem from "@/components/offer/OfferItem.vue";
import { ref } from "vue";

const imagePath = ref(String("Kręgosłup"));

const offerList = [
	{
		type: "Kręgosłup",
		itemList: [
			"rwa kulszowa, rwa ramienna, dyskopatie",
			"wypukliny i przepukliny jądra miażdżystego",
			"zespół mięśnia gruszkowatego",
			"kręgozmyk",
			"mrowienia i drętwienia kończyn",
			"bóle kręgosłupa u kobiet w ciąży",
			"zespół przeciążeniowo - bólowy tkanki mięśniowej i powięziowej",
			"choroby zwyrodnieniowe",
			"choroby reumatoidalne",
			"stany pourazowe",
		],
	},
	{
		type: "Łokieć",
		itemList: [
			"łokieć tenisisty i golfisty",
			"urazy sportowe",
			"zmiany pooperacyjne",
		],
	},
	{
		type: "Bark",
		itemList: [
			"naciągnięcia i naderwania mięśni, ścięgien i więzadeł",
			"zespół cieśni podbarkowej",
			"zapalenie stożka rotatorów",
			"zamrożony bark",
			"zapalenie kaletki",
			"niestabilność kompleksu barkowego",
			"zmiany zwyrodnieniowe",
			"urazy sportowe",
		],
	},
	{
		type: "Głowa",
		itemList: [
			"migreny i bóle głowy",
			"zawroty głowy",
			"mrowienia i drętwienia twarzy",
			"szumy uszne",
			"dysfunkcje stawów skroniowo-żuchwowych",
		],
	},
	{
		type: "Brzuch",
		itemList: [
			"kolki i bóle brzuszne",
			"zgaga i refluks",
			"wzdęcia i zaparcia",
			"zespół jelita drażliwego",
			"bolesne miesiączki",
		],
	},
	{
		type: "Biodro",
		itemList: [
			"bóle zwyrodnieniowe w obrębie pachwiny, pośladka, bocznej strony uda",
			"endoproteza",
			"dysfunkcje obręczy miednicznej",
		],
	},
	{
		type: "Kolano",
		itemList: [
			"uszkodzenia więzadłowe",
			"uszkodzenia łąkotek",
			"bóle zwyrodnieniowe",
			"chondromalacje",
			"tendinopatie ścięgien",
			"dysfunkcje stawu rzepkowo - udowego",
			"endoprotezy",
			"kolano skoczna",
			"kolano biegacza",
		],
	},
	{
		type: "Stopa",
		itemList: [
			"skręcenia",
			"zwichnięcia",
			"naciągnięcia i zerwania więzadeł i ścięgien",
			"ostroga piętowa",
			"zapalenie rozcięgna podeszwowego",
			"hallux - paluch koślawy",
			"zaburzenia krążeniowe",
			"obrzęki",
		],
	},
];

const setImagePath = (type: string) => {
	imagePath.value = type;
};
</script>

<style lang="scss" scoped>
.offer {
	&__content {
		margin: 5vw;
		margin-bottom: 40px;
		margin-top: 40px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;

		&__list {
			max-width: 500px;
			width: 100%;
			min-width: 300px;
			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		&__image {
			width: 300px;
			height: 450px;
			margin-bottom: 20px;
			background-color: rgb(226, 226, 226);

			// box-shadow: rgba(88, 88, 88, 0.9) 0px 7px 19px 0px;
			display: block;
			object-fit: cover;
			object-position: center;
			transition: transform 0.5s ease;
		}
	}
}
</style>
