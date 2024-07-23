<template>
	<div class="treatments">
		<TitleBanner title="Zabiegi" />
		<div
			class="treatments__content"
			v-for="item in treatmentTypes"
			:key="item.type">
			<TreatmentItem
				:type="item.type"
				:details="item.details"
				:image-name="item.imageName"
				:button-content="item.buttonContent"
				:hash-target="item.hashTarget"
				:child-treatments="item.treatments" />
		</div>
	</div>
</template>

<script setup lang="ts">
import TitleBanner from "@/components/TitleBanner.vue";
import TreatmentItem from "@/components/treatments/TreatmentItem.vue";

const treatmentTypes = [
	{
		type: "Osteopatia",
		details:
			"Osteopatia, zwana też medycyną osteopatyczną jest rodzajem manualnej metody leczenia ludzkiego organizmu, której początki sięgają XIX wieku. Jej prekursorem był wybitny amerykański lekarz/osteopata Andrew Taylor Still. Filozofia która przyświecała mu podczas praktyki lekarskiej, kierowała się odnalezieniem pierwotnej przyczyny choroby, naprawieniem jej i stworzeniem optymalnych warunków do leczenia dla organizmu. Nastawiona na traktowanie ludzkiego ciała jako integralnej całości, w której zachodzą przenikające się procesy. Stąd też w osteopatii diagnozuje się i leczy cały organizmy oraz przyczyny zaburzeń jego funkcjonowania, a nie tylko ich objawy. Na osteopatię należy patrzeć jako integralną część procesu zdrowienia do spółki z medycyną akademicką, a nie jej konkurencję czy wyłączną alternatywę poprawy stanu zdrowia. ",
		imageName: "treatment_01",
		buttonContent: "Dowiedz się więcej o osteopatii",
		hashTarget: "osteopatia",
		treatments: [
			{
				name: "Terapia manualna",
				details:
					"Techniki takie jak masaż, rozciąganie i manipulacje kręgosłupa są stosowane w celu poprawy funkcjonowania i łagodzenia bólu. Metody te mają na celu przywrócenie równowagi i prawidłowego działania organizmu.",
			},
			{
				name: "Kompleksowa ocena",
				details:
					"Osteopaci przeprowadzają dokładną ocenę, uwzględniając historię choroby i czynniki związane ze stylem życia, aby zidentyfikować pierwotne przyczyny problemów zdrowotnych. Dzięki temu powstają spersonalizowane plany leczenia, dostosowane do indywidualnych potrzeb pacjenta.",
			},
			{
				name: "Terapia czaszkowo-krzyżowa",
				details:
					"Delikatna technika skupiająca się na subtelnych ruchach czaszki i ich wpływie na zdrowie pacjenta.",
			},
			{
				name: "Terapia wisceralna",
				details:
					"Koncentruje się na narządach wewnętrznych ich działaniu, i ich powiązaniach z ogólnym stanem zdrowia.",
			},
			{
				name: "Integracja z innymi metodami terapeutycznymi",
				details:
					"Osteopatia często łączy inne metody holistyczne, takie jak akupunktura, fizjoterapia i zmiany stylu życia. To zintegrowane podejście zapewnia kompleksową opiekę i uwzględnia jednocześnie wiele aspektów zdrowia.",
			},
		],
	},
	{
		type: "Fizjoterapia",
		details:
			"Fizjoterapia to zawód medyczny, którego celem jest przywrócenie, utrzymanie i optymalizacja ruchu i funkcjonowania osób dotkniętych urazem, chorobą lub niepełnosprawnością.",
		imageName: "treatment_02",
		buttonContent: "Dowiedz się więcej o fizjoterapii",
		hashTarget: "fizjoterapia",
		treatments: [
			{
				name: "Fizjoterapia przedoperacyjna",
				details:
					"Polega na zaangażowaniu się w dostosowany program ćwiczeń przed poddaniem się operacji. Wykazano, że takie podejście zapewnia wiele korzyści, które mogą znacząco poprawić wyniki pooperacyjne.",
			},
			{
				name: "Fizjoterapia pooperacyjna",
				details:
					"Zwana także rehabilitacją pooperacyjną, ma kluczowe znaczenie dla powrotu do zdrowia po różnego rodzaju operacjach, w tym po zabiegach ortopedycznych, kardiologicznych, klatki piersiowej, neurologicznych i brzusznych. Ta specjalistyczna fizjoterapia ma na celu stawienie czoła fizycznym i psychicznym wyzwaniom pojawiającym się po operacji oraz ułatwienie powrotu do normalnego funkcjonowania.",
			},
		],
	},
	{
		type: "Inne terapie",
		details: "Pozostałe zabiegi ",
		imageName: "treatment_03",
		buttonContent: "Dowiedz się więcej o pozostałych terapiach",
		hashTarget: "inne",
		treatments: [
			{
				name: "Terapia czaszkowo-krzyżowa",
				details:
					"Terapia czaszkowo-krzyżowa (Craniosacral Therapy - CST) to forma medycyny alternatywnej, która polega na delikatnych manipulacjach czaszką, kręgosłupem i miednicą, aby wpłynąć na przepływ płynu mózgowo-rdzeniowego i poprawić ogólny stan zdrowia.",
			},
			{
				name: "Suche Igłowanie",
				details:
					"Suche igłowanie, znane również jako terapia Dry Needling, to technika fizykoterapii polegająca na wprowadzaniu bardzo cienkich, sterylnych igieł w określone struktury ciała, takie jak mięśnie i powięź, w celu uzyskania odpowiedzi biomechanicznej, biochemicznej i naczyniowej. Metodę tę stosuje się w leczeniu różnych schorzeń układu mięśniowo-szkieletowego i jest szczególnie skuteczna w leczeniu bólu i dysfunkcji mięśniowo-powięziowych.",
			},
		],
	},
];
</script>

<style scoped lang="scss">
.treatments {
	&__content {
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
