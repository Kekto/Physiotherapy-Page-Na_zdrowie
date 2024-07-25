<template>
	<div :id="hashTarget" class="treatment-item">
		<div class="treatment-item__content">
			<img
				class="treatment-item__content__image"
				:src="require(`@/assets/images/${imageName}.jpg`)"
				:alt="imageName" />
			<div class="treatment-item__content__details">
				<div>
					<h4>{{ type }}</h4>
					<DividerLine />
					<div style="text-align: justify">{{ details }}</div>
				</div>
			</div>
		</div>
		<div class="treatment-item__collapsible" :id="type">
			<div class="treatment-item__collapsible__list">
				<div
					class="treatment-item__collapsible__list__item"
					v-for="item in childTreatments"
					:key="item.name">
					<div class="treatment-item__collapsible__list__item__name">
						{{ item.name }}
					</div>
					<DividerLine :vertical="true" />
					<div class="treatment-item__collapsible__list__item__details">
						{{ item.details }}
					</div>
				</div>
				<button
					@click="
						router.push({ path: '/zakres-uslug', hash: `#${hashTarget}` })
					">
					{{ buttonContent }}
				</button>
			</div>
		</div>
		<div
			class="treatment-item__collapse-bar"
			@click="(isCollapsed = !isCollapsed), collapse(String(type))">
			<img
				class="icon"
				v-if="!isCollapsed"
				src="@/assets/icons/arrow-down.svg" />
			<img
				class="icon upside-down"
				v-else
				src="@/assets/icons/arrow-down.svg" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import DividerLine from "../DividerLine.vue";
import router from "@/router";

type ChildTreatment = {
	name: string;
	details: string;
};

// eslint-disable-next-line
const props = defineProps({
	type: String,
	details: String,
	imageName: String,
	buttonContent: String,
	hashTarget: String,
	childTreatments: Object as PropType<ChildTreatment[]>,
});

const isCollapsed = ref(false);

const collapse = (type: string) => {
	const collapsible = document.getElementById(type);
	if (collapsible) {
		if (!isCollapsed.value) {
			collapsible.style.maxHeight = "0px";
			collapsible.style.transition = "0.4s";
		} else {
			collapsible.style.maxHeight = "3000px";
			collapsible.style.transition = "1s";
		}
	}
};
</script>

<style scoped lang="scss">
.treatment-item {
	height: 100px;
	min-width: 400px;
	width: 70vw;
	max-width: 900px;
	height: auto;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	display: flex;
	flex-direction: column;
	align-self: center;

	&__content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		&__image {
			inset: 0;
			width: 100%;
			height: 300px;

			object-fit: cover;
			object-position: center;

			background-color: gray;
		}

		&__details {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			padding-left: 20px;
			padding-right: 20px;
			padding-bottom: 12px;
		}

		h4 {
			margin-bottom: 0px;
		}
	}

	&__collapse-bar {
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.3s;
		background-color: #42b983;

		&:hover {
			cursor: pointer;
			background-color: #6ae7af;
			transition: 0.3s;
		}
	}

	&__collapsible {
		max-height: 0px;
		overflow: hidden;
		transition: max-height 0.5s ease-in-out;

		display: flex;
		flex-direction: column;
		gap: 12px;

		&__list {
			padding: 20px 0 20px 0;
			display: flex;
			flex-direction: column;
			box-shadow: rgb(204, 219, 232) 0px 3px 6px 0px inset;
			gap: 20px;

			&__item {
				text-align: left;
				margin: 0 20px 0 20px;
				display: flex;
				flex-direction: row;

				&__name {
					min-width: 150px;
					width: 150px;
					text-align: right;
					align-content: center;
					font-weight: bold;
				}

				&__details {
					width: auto;
					align-content: center;
					text-wrap: wrap;
					white-space: pre-wrap;
					padding: 12px 0 12px 0;
				}
			}
		}
	}
}

button {
	padding: 8px 20px 8px 20px;
	width: 100%;
	align-self: center;
	background: #42b983;
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
		color: #42b983;
	}
}

.icon {
	height: 20px;
	color: white;
}

.upside-down {
	transform: rotate(180deg);
}
</style>
