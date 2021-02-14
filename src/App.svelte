<script lang="ts">
	import Hello from '@/components/Hello.svelte'
	export let name: string;

	//  Object.assign(document.body.style, {
//    backgroundColor: 'darkgray',
//    backgroundImage: 'url(/images/bg.jpg)',
//    backgroundSize: 'cover',
//  })
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

&gt;&gt;&gt; &lt;Hello /&gt;
<Hello />
&lt;&lt;&lt;

<style lang="scss">
	main {
		//display: flex;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
