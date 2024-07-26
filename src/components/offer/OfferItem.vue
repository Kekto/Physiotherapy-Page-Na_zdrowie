<template>
	<div class="treatment-item">
		<div
			class="treatment-item__content"
			@click="(isCollapsed = !isCollapsed), collapse(String(type))">
			<div class="treatment-item__content__details">
				<div>{{ type }}</div>
				<div v-if="!isCollapsed" style="transform: rotate(90deg)">&#187;</div>
				<div v-else style="transform: rotate(-90deg)">&#187;</div>
			</div>
		</div>
		<div class="treatment-item__collapsible" :id="type">
			<div class="treatment-item__collapsible__list">
				<div
					class="treatment-item__collapsible__list__item"
					v-for="item in itemList"
					:key="item">
					<div class="treatment-item__collapsible__list__item__details">
						&#187; {{ item }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";

// eslint-disable-next-line
const props = defineProps({
	type: String,
	itemList: Object as PropType<string[]>,
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
	height: auto;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	display: flex;
	flex-direction: column;

	&__content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		transition: 0.3s;

		&__details {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			padding: 12px 20px 12px 20px;
			font-size: 18px;
			font-weight: bold;
		}

		&:hover {
			background-color: #018060;
			color: white;
			cursor: pointer;
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

			&__item {
				text-align: left;
				margin: 0 20px 0 20px;
				display: flex;
				flex-direction: row;

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
</style>
