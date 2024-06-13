<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<h1>
		Hello I'm
		<span class="text-primary-border"> thederpykrafter </span>
	</h1>

	<p>This site is a work in progress</p>
	<p>
		The source code is available on
		<a class="border-brand-github" href="https://github.com/thederpykrafter/tdk-portfolio">
			GitHub
		</a>
	</p>
	<p>
		I built this site using
		<a href="https://svelte.dev" class="border-brand-svelte"> Svelte </a>
		&
		<a href="https://tailwindcss.com" class="border-brand-tailwind"> Tailwindcss </a>
	</p>
</Card>
<Card>
	<h1>Hello World</h1>
	<span>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque enim voluptatem ab pariatur
		repellendus commodi reiciendis quaerat. Debitis, natus consequuntur quam voluptates et vero,
		optio commodi, ab aperiam quidem quis!
	</span>
</Card>

<style lang="postcss">
	a {
		@apply border-b;
	}
</style>
