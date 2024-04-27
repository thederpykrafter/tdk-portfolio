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
        @apply flex flex-col justify-center items-center;
        @apply border-2 rounded-md;
        @apply my-1 p-2 w-[75vw];
        @apply text-center;
    }
</style>