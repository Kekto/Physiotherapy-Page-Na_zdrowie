<template>
	<div class="contact">
		<TitleBanner title="Kontakt" />
		<div class="contact__content">
			<div class="contact__content__info">
				<div class="contact__content__info__details">
					<h3>Po Zdrowie Osteopatia i Fizjoterapia</h3>
				</div>
				<div class="contact__content__info__details">
					<a>Budynek Irydion: 5 piętro – lokal nr 55</a>
					<a>ul. Zygmunta Krasińskiego 2, 20-709 Lublin</a>
				</div>
				<div class="contact__content__info__details">
					<a>poniedziałek-piątek: 10:00 - 20:00</a>
					<a>sobota-niedziela: nieczynne</a>
				</div>
				<div class="contact__content__info__details">
					<a>Telefon:</a>
					<div>
						<img src="@/assets/icons/phone.svg" class="icon" />
						<a class="bold">721 112 921</a>
					</div>
					<div>
						<img src="@/assets/icons/envelope.svg" class="icon" />
						<a href="mailto:info@mail.pl" class="bold link">info@mail.pl</a>
					</div>
				</div>
			</div>
			<ContactsGoogleMap />
		</div>
	</div>
</template>

<script setup lang="ts">
import TitleBanner from "../components/TitleBanner.vue";
import ContactsGoogleMap from "../components/contact/ContactsGoogleMap.vue";
</script>

<style lang="scss" scoped>
.contact__content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 5vw;
	margin-bottom: 40px;
	margin-top: 40px;
	justify-content: center;

	&__info {
		min-width: 400px;
		width: 40vw;
		max-width: 400px;
		display: flex;
		flex-direction: column;

		&__details {
			display: flex;
			flex-direction: column;
			text-align: left;
			margin-bottom: 20px;
		}
	}
}

.bold {
	font-weight: 600;
	font-size: 14px;
}

.link {
	text-decoration: none;
	color: black;

	&:hover {
		color: #018060;
	}
}

.icon {
	height: 16px;
	padding-right: 12px;
}
</style>
