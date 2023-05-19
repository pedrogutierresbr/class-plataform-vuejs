export default {
	data() {
		return {
			api: null,
			loading: true,
		};
	},
	methods: {
		async fetchData(url) {
			this.loading = true;
			this.api = null;
			const homeURL = `http://localhost:3000${url}`;
			fetch(homeURL)
				.then((response) => response.json())
				.then((data) => {
					setTimeout(() => {
						this.api = data;
						this.loading = false;
					}, 1000);
				});
		},
	},
};
