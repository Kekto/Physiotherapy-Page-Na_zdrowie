<template>
	<div class="first-visit">
		<TitleBanner title="Pierwsza wizyta" />
		<div class="first-visit__content">
			<div class="first-visit__content__details">
				<div class="first-visit__content__details__paragraph">
					<h4>Pierwsza wizyta w gabinecie osteopatycznym</h4>
					Przygotowanie do pierwszego leczenia osteopatii obejmuje kilka kroków,
					które mają zapewnić płynne i skuteczne leczenie. Oto kluczowe punkty
					do rozważenia:
					<h5>Przed spotkaniem</h5>
					<ol type="1">
						<li>
							<b>Zbierz odpowiednią dokumentację medyczną:</b> Przynieś wszelkie
							aktualne zdjęcia rentgenowskie, wyniki USG, płyty tomografii
							komputerowej czy rezonansu magnetycznego, skany lub wyniki badań
							(z ostatnich pięciu lat), które mogą pomóc w zdiagnozowaniu Twojej
							choroby.
						</li>
						<li>
							<b>Nawodniaj:</b> Pij wodę przed wizytą, aby pomóc organizmowi
							lepiej zareagować na zabieg, zwłaszcza, że osteopatia może
							obejmować pracę z układem limfatycznym.
						</li>
						<li>
							<b>Unikaj jedzenia tuż przed spotkaniem:</b> Staraj się nie jeść
							co najmniej godzinę przed spotkaniem, aby zapewnić sobie komfort
							podczas sesji.
						</li>
					</ol>
				</div>
				<div class="first-visit__content__details__paragraph">
					<h5>W co się ubrać</h5>
					<ol type="1">
						<li>
							<b>Wygodna odzież:</b> Noś luźną, wygodną odzież, która umożliwia
							swobodny ruch. Zalecane są szorty, wygodna koszulka.
						</li>
						<li>
							<b>Bądź przygotowany na częściowe rozebranie się:</b> Możesz
							zostać poproszony o zdjęcie części ubrania w celu lepszej oceny,
							zwłaszcza w okolicach kręgosłupa. Zapewniona zostanie prywatność.
							Dzieci i młodzież do 18 roku życia powinny być w obecności rodzica
							lub prawnego opiekuna.
						</li>
					</ol>
				</div>
				<div class="first-visit__content__details__paragraph">
					<h5>Podczas spotkania</h5>
					<ol type="1">
						<li>
							<b>Dyskusja na temat historii zdrowia: </b> Sesja rozpocznie się
							kompleksową dyskusją na temat Twojej historii zdrowia, w tym
							przeszłych urazów, operacji, leków i nawyków związanych ze stylem
							życia. Pomaga to osteopacie zrozumieć Twój stan i wszelkie
							podstawowe problemy.
						</li>
						<li>
							<b>Badania fizykalne:</b> Osteopata przeprowadzi badanie
							fizykalne, aby ocenić Twoją postawę, zakres ruchu i mobilność.
							Może to obejmować wykonanie określonych ruchów i badanie
							palpacyjne (badanie manualne) w celu zidentyfikowania obszarów
							ograniczeń lub bólu.
						</li>
						<li>
							<b>Diagnoza i plan leczenia:</b> Na podstawie badania, osteopata
							zdiagnozuje Twój stan i omówi dostosowany plan leczenia. Wyjaśnią
							techniki, które będą stosować, ich korzyści i wszelkie potencjalne
							skutki uboczne. Przed przystąpieniem do jakiegokolwiek leczenia
							praktycznego wymagana jest Twoja zgoda.
						</li>
						<li>
							<b>Leczenie praktyczne:</b> Osteopata będzie stosować techniki
							manualne, takie jak masaż tkanek miękkich, manipulacje stawami i
							ćwiczenia rozciągające w celu wspomagania gojenia i przywracania
							równowagi. Leczenie jest na ogół delikatne i ma na celu
							zmniejszenie bólu i poprawę funkcjonowania.
						</li>
					</ol>
				</div>
				<div class="first-visit__content__details__paragraph">
					<h5>Po leczeniu</h5>
					<ol type="1">
						<li>
							<b>Porady po zabiegu: </b> Po sesji możesz otrzymać porady
							dotyczące ćwiczeń, modyfikacji stylu życia i strategii leczenia
							bólu, aby zmaksymalizować korzyści z leczenia.
						</li>
						<li>
							<b>Wizyty kontrolne:</b> W zależności od Twojego stanu osteopata
							może zalecić następujące wizyty kontrolne: sesje w celu
							monitorowania postępów i dostosowywania planu leczenia w razie
							potrzeby. Regularne sesje mogą pomóc w osiągnięciu długoterminowej
							poprawy stanu zdrowia.
						</li>
					</ol>
					Postępując zgodnie z tymi wskazówkami, możesz mieć pewność, że jesteś
					dobrze przygotowany na pierwszą wizytę u osteopatii i możesz w pełni
					wykorzystać leczenie.
				</div>
			</div>
			<button
				@click="router.push({ path: '/zakres-uslug', hash: `#osteopatia` })">
				Dowiedz się więcej o osteopatii
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import TitleBanner from "@/components/TitleBanner.vue";
import router from "@/router";
</script>

<style lang="scss" scoped>
.first-visit {
	&__content {
		margin: 5vw;
		margin-bottom: 40px;
		margin-top: 40px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;

		&__details {
			text-align: left;
			max-width: 900px;
			min-width: 300px;
			border-left: 2px solid #0e9156;
			padding: 0 0 20px 20px;
			margin-bottom: 20px;
			&__paragraph {
				margin-bottom: 8px;

				li {
					font-size: 15px;
				}
			}
		}
	}
}

button {
	padding: 8px 20px 8px 20px;
	width: 100%;
	align-self: center;
	background: #018060;
	color: white;
	font-weight: bold;
	font-size: 16px;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	border: none;
	transition: 0.3s;
	cursor: pointer;

	&:hover:not(:disabled) {
		background: white;
		color: #018060;
	}
}

h4 {
	font-size: 24px;
	margin-top: 10px;
}

h5 {
	font-size: 16px;
}
</style>
