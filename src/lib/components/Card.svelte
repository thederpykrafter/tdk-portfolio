<script lang="ts">
	let color: string = 'secondary-border';

	function enter(): void {
		color = 'primary-border';
	}

	function leave(): void {
		color = 'secondary-border';
	}
</script>

<div on:mouseleave={leave} on:mouseenter={enter} class="border-{color}" role="region">
	<slot></slot>
</div>

<style lang="postcss">
	div {
		@apply flex flex-col items-center justify-center;
		@apply rounded-md border-2;
		@apply my-1 w-[75vw] p-2;
		@apply text-center;
	}
</style>

