<script lang="ts">
	import '../app.pcss';
	import Header from './Header.svelte';
</script>

<Header />

<div class="flex flex-col items-center justify-center">
	<slot></slot>
</div>

<style lang="postcss">
	div:nth-child(n) {
		@apply px-2 py-1;
	}
</style>

