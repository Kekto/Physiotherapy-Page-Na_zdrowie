<template>
	<div class="work-methods">
		<TitleBanner title="Jak pracuję"/>
		<div class="work-methods__content">
			<div class="work-methods__content__block">
				<h4>Method type</h4>
				<div class="work-methods__content__block__details">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</div> 
				<div class="work-methods__content__block__details">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</div> 
			</div>
			<div class="work-methods__content__block">
				<h4>Method type</h4>
				<div class="work-methods__content__block__details">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</div> 
			</div>
			<div class="work-methods__content__block">
				<h4>Method type</h4>
				<div class="work-methods__content__block__details">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</div> 
			</div>
			<div class="work-methods__content__block">
				<h4>Method type</h4>
				<div class="work-methods__content__block__details">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</div>
				<div class="work-methods__content__block__details">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</div>  
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import TitleBanner from '@/components/TitleBanner.vue';
</script>

<style scoped lang="scss">
.work-methods{

	&__content{
		margin: 5vw;
		margin-bottom: 40px;
		margin-top: 40px;

		gap: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&__block{
			border-left: 2px solid #0e9156;
			box-sizing: content-box;
			padding: 20px;
			text-align: left;
			box-shadow: rgba(0, 0, 0, 0.45) 20px 15px 20px -20px;
			max-width: 900px;
			width: 100%;

			&:nth-child(2n){
				text-align: right;
				border-left: none;
				border-right: 2px solid #0e9156;
				box-shadow: rgba(0, 0, 0, 0.45) -20px 15px 20px -20px;
			}

			&__details{
				margin-bottom: 8px;
			}
		}
	}
}

h4{
	font-size: 20px;
	margin-top: 10px;
}
</style>
