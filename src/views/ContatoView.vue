<template>
	<div class="contato">
		<div v-if="loading">
			<PageLoading />
		</div>
		<div v-if="api">
			<h1>Contato</h1>
			<p>{{ api }}</p>
		</div>
	</div>
</template>

<script>
	import fetchData from "@/mixins/fetchData";

	export default {
		name: "ContatoView",
		mixins: [fetchData],
		created() {
			this.fetchData("/contato");
		},
	};
</script>

<style></style>
