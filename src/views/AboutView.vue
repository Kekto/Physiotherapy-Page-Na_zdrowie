<template>
	<div class="about">
		<TitleBanner title="O mnie" />
		<div class="about__content">
			<img class="about__content__image" src="@/assets/łukasz.png" />
			<div class="about__content__details">
				<h4>Łukasz Piszcz</h4>
				<div class="about__content__details__paragraph">
					Absolwent studiów magisterskich Uniwersytetu Medycznego w Lublinie, na
					kierunku fizjoterapia.
				</div>
				<div class="about__content__details__paragraph">
					Uczestnik wielu renomowanych szkoleń:
					<ul>
						<li>
							Kręgosłup – Osteopatyczna diagnostyka i leczenie (wg. B.Mazur)
						</li>
						<li>
							Stawy obwodowe – Osteopatyczna diagnostyka i leczenie (wg.
							B.Mazur)
						</li>
						<li>Manipulacje Powięzi – Fascial Manipulation (wg. Stecco)</li>
						<li>Techniki energizacji mięśni cz. I (wg. J.Ciechomski)</li>
						<li>Kinesiologytapeing – podstawowy</li>
						<li>Anatomia palpacyjna (wg. M. Fluder)</li>
						<li>Suche Igłowanie – Dry Needling Integrated (wg. P. Naporski)</li>
					</ul>
				</div>
				<div class="about__content__details__paragraph">
					Pierwsze zawodowe kroki stawiał będąc jeszcze na studiach, podejmując
					pracę w Zespole Ośrodków Wsparcia, placówkach które kompleksowo niosą
					pomoc osobom starszym. Ta praca nauczyła go empatycznego podejścia do
					pacjenta oraz dogłębnego spojrzenia na problemy z jakimi borykają się
					ludzie na przestrzeni kilkudziesięciu lat swojego życia.
				</div>
				<div class="about__content__details__paragraph">
					W pracy największą satysfakcję sprawia mu niesienie pomocy i
					uwalnianie swoich pacjentów od ich codziennych dolegliwości bólowych.
					Dzięki obszernej wiedzy wyniesionej z licznych szkoleń, w swojej
					terapii kieruje się kompleksowym spojrzeniem na dolegliwości pacjentów
					i leczeniem przyczyn powstałych dysfunkcji, a nie tylko „zaleczaniu”
					objawów.
				</div>
				<div class="about__content__details__paragraph">
					Współpracuje z klubem futbolu amerykańskiego „Tytani Lublin”
				</div>
				<div class="about__content__details__paragraph">
					Prywatnie, miłośnik podrózowania i „odkrywania nowych lądów”.
				</div>
			</div>
		</div>
		<div class="about__documents">
			<h4>Certyfikaty i dyplomy</h4>
			<div class="about__documents__list">
				<div
					v-for="item in documents"
					:key="item.name"
					class="about__documents__list__item">
					<DocumentItem :name="item.name" :path="item.path" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import TitleBanner from "@/components/TitleBanner.vue";
import DocumentItem from "@/components/about/DocumentItem.vue";

const documents = [
	{
		name: "Anatomia Palpacyjna",
		path: "/media/Anatomia-Palpacyjna.pdf",
	},
	{
		name: "Kinesiology Taping",
		path: "/media/Kinesiology-Taping.pdf",
	},
	{
		name: "Kręgosłup - osteopatyczna diagnostyka i leczenie I",
		path: "/media/Kregoslup-osteopatyczna-diagnostyka-i-leczenie-cz-I.pdf",
	},
	{
		name: "Kręgosłup - osteopatyczna diagnostyka i leczenie II",
		path: "/media/Kregoslup-osteopatyczna-diagnostyka-i-leczenie-cz-II.pdf",
	},
	{
		name: "Kręgosłup - osteopatyczna diagnostyka i leczenie II",
		path: "/media/Kregoslup-osteopatyczna-diagnostyka-i-leczenie-cz-III.pdf",
	},
	{
		name: "Kręgosłup - osteopatyczna diagnostyka i leczenie IV",
		path: "/media/Kregoslup-osteopatyczna-diagnostyka-i-leczenie-cz-IV.pdf",
	},
	{
		name: "Manipulacje powięzi",
		path: "/media/Manipulacje-powięzi.pdf",
	},
	{
		name: "Stawy obwodowe - osteopatyczna diagnostyka i leczenie I",
		path: "/media/Stawy-obwodowe-osteopatyczna-diagnostyka-i-leczenie-cz-I.pdf",
	},
	{
		name: "Stawy obwodowe - osteopatyczna diagnostyka i leczenie III",
		path: "/media/Stawy-obwodowe-osteopatyczna-diagnostyka-i-leczenie-cz-III.pdf",
	},
	{
		name: "Suche igłowanie",
		path: "/media/Suche-iglowanie.pdf",
	},
	{
		name: "Tkanki miekkie",
		path: "/media/Tkanki-miekkie.pdf",
	},
];
</script>

<style scoped lang="scss">
.about {
	&__content {
		margin: 5vw;
		margin-bottom: 40px;
		margin-top: 40px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;

		&__image {
			width: 300px;
			height: 450px;
			margin-right: 20px;
			margin-bottom: 20px;
			background-color: rgb(226, 226, 226);
			align-self: center;
		}

		&__details {
			text-align: left;
			max-width: 500px;
			min-width: 300px;
			border-left: 2px solid #0e9156;
			padding-left: 20px;

			&__paragraph {
				margin-bottom: 8px;
			}
		}
	}

	&__documents {
		margin: 0px 5vw 0px 5vw;
		text-align: left;

		&__list {
			margin-bottom: 40px;
			border-left: 2px solid #0e9156;
			padding-left: 20px;
			display: flex;
			flex-direction: column;

			gap: 12px;

			&__item {
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
