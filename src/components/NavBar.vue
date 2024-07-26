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
	</div>
</template>

<script setup lang="ts">
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

	@media (max-width: 800px) {
		flex-direction: column;
	}

	&__logo {
		padding-left: 20px;
		display: flex;
		flex-direction: row;
		gap: 12px;
		align-items: center;

		@media (max-width: 800px) {
			justify-content: center;
		}
	}

	&__nav {
		display: flex;
		flex-direction: row;
		justify-content: right;
		gap: 16px;
		padding-right: 20px;
		align-items: center;

		@media (max-width: 800px) {
			justify-content: center;
			gap: 8px;
		}

		&__item {
			&__link {
				width: 100%;
				height: 100%;
			}
		}
	}
}

h1 {
	font-size: 18px;
	margin: 8px 0 8px 0;
}
</style>
