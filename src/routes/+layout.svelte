<script>
	import '../app.pcss';
	import Header from './Header.svelte';
</script>

<Header />

<div>
	<slot></slot>
</div>

<style lang="postcss">
	div:nth-child(n) {
		@apply px-2 py-1;
	}
</style>