import App from '@/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: "Svelte"
	},
});

export default app;

// Hot Module Replacement (HMR)
if (import.meta.hot) {
	import.meta.hot.accept();
	import.meta.hot.dispose(() => {
		app.$destroy();
	});
}