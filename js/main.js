// Vue.component('hello-component', {
// 	template: `<p>Hello</p>`,
// });

new Vue({
	el: '#app',
	data: {
		bpi: null,
		hasError: false,
		loading: true,
	},
	methods: {},
	mounted: function () {
		axios
			.get('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then(
				function (response) {
					this.bpi = response.data.bpi;
				}.bind(this)
			)
			.catch(
				function (error) {
					console.log(error);
					this.hasError = true;
				}.bind(this)
			)
			.finally(
				function () {
					this.loading = false;
				}.bind(this)
			);
	},
	filters: {
		currencyDecimal(value) {
			return value.toFixed(2);
		},
	},
});
