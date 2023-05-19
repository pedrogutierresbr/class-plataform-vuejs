<template>
	<div id="app">
		<header-component />
		<router-view class="container"></router-view>
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

	img {
		max-width: 100%;
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

	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	.v-enter {
		opacity: 0;
		transform: translate3d(-20px, 0, 0);
	}

	.v-enter-active {
		transition: all 0.3s;
	}

	.conteudo {
		display: grid;
		grid-template-columns: 1fr minmax(200px, 400px);
		gap: 30px;
	}

	@media screen and (max-width: 400px) {
		.conteudo {
			display: block;
		}
	}
</style>
