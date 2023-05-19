<template>
	<div id="app">
		<header-component />
		<router-view></router-view>
	</div>
</template>

<script>
	import HeaderComponent from "@/components/HeaderComponent.vue";

	export default {
		components: {
			HeaderComponent,
		},
	};
</script>

<style>
	body {
		margin: 0;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		color: #234;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	a {
		font-weight: bold;
		text-decoration: none;
		color: #234;
	}

	a.router-link-active {
		color: #4b8;
	}
</style>
