<script>

// Компоненты
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router'
// import OnePage from './views/OnePage.vue';

// Главная страница
export default {
	components: {
		// OnePage,
		AppHeader,
		RouterView
	}
};


</script>

<template>
	<div class="app">
		<!-- Шапка -->
		<app-header></app-header>
		<!-- <one-page></one-page> -->
		<!-- Меняющаяся часть -->
		<router-view></router-view>

	</div>
</template>

<style></style>
