<template>
	<div class="navbar-content">
		<div class="navbar-content__logo">
			[logo]
			<h1>Po zdrowie</h1>
		</div>
		<div class="navbar-content__nav">
			<div
				class="navbar-content__nav__item"
				v-for="link in LINKS"
				:key="link.value">
				<router-link class="navbar-content__nav__item__link" :to="link.route">
					{{ link.value }}
				</router-link>
			</div>
		</div>
		<div class="navbar-content__nav-icon">
			<img
				class="icon"
				src="@/assets/icons/menu.svg"
				@click="showWindowNav = !showWindowNav" />
		</div>
	</div>
	<div
		v-if="showWindowNav"
		class="navbar-window"
		@click="showWindowNav = false">
		<div
			class="window-item"
			v-for="link in LINKS"
			:key="link.value"
			@click="router.push(link.route)">
			<router-link class="navbar-content__nav__item__link" :to="link.route">
				{{ link.value }}
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const showWindowNav = ref(false);

const LINKS = [
	{ route: "/", value: "Strona główna" },
	{ route: "/o-mnie", value: "O mnie" },
	{ route: "/zakres-uslug", value: "Zakres usług" },
	{ route: "/co-leczymy", value: "Co leczymy" },
	{ route: "/zabiegi", value: "Zabiegi" },
	{ route: "/pierwsza-wizyta", value: "Pierwsza wizyta" },
	{ route: "/cennik", value: "Cennik" },
	{ route: "/kontakt", value: "Kontakt" },
];
</script>

<style lang="scss" scoped>
.navbar-content {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 8px;

	&__logo {
		padding-left: 20px;
		display: flex;
		flex-direction: row;
		gap: 12px;
		align-items: center;
	}

	&__nav {
		display: flex;
		flex-direction: row;
		justify-content: right;
		gap: 16px;
		padding-right: 20px;
		align-items: center;

		@media (max-width: 999px) {
			display: none;
		}

		&__item {
			&__link {
				width: 100%;
				height: 100%;
			}
		}
	}

	&__nav-icon {
		padding-right: 20px;
		align-content: center;

		@media (min-width: 1000px) {
			display: none;
		}
	}
}

.navbar-window {
	position: absolute;
	right: 0;
	top: 70px;
	bottom: 0;
	width: 100%;
	height: calc(100vh - 70px);
	background-color: rgba($color: #000000, $alpha: 0.3);
}

.window-item {
	width: 100vw;
	height: 30px;
	align-content: center;

	background: #018060;
	font-weight: bold;
	font-size: 16px;
	box-shadow: rgba(60, 64, 67, 0.7) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.6) 0px 1px 3px 1px;
	border: none;
	transition: 0.3s;
	cursor: pointer;

	&:hover:not(:disabled) {
		background: white;
	}
}

.icon {
	height: 30px;
	filter: invert(80%) sepia(75%) saturate(2443%) hue-rotate(355deg)
		brightness(99%) contrast(89%);
	cursor: pointer;
}

h1 {
	font-size: 18px;
	margin: 8px 0 8px 0;
}
</style>
