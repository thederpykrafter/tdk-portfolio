<script lang="ts">
    import { page } from '$app/stores';

    let logo: string = 'https://github.com/thederpykrafter.png';

    let pages: { title: string, href: string }[] = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Projects', href: '/projects' },
        { title: 'Contact', href: '/contact' },
        { title: 'Resume', href: '/resume' },
    ];

    export let menuOpen: boolean = false;

    function toggleMenu(): void {
        menuOpen = !menuOpen;
    }
</script>

<header role="navigation" class="border-b-2 border-purple-500">
    <nav class="flex flex-row justify-between pr-2 pl-1">
        <button on:click={toggleMenu}>
            {#if menuOpen}
                <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
            {:else}
                <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            {/if}
        </button>
        <div class="inline-flex overflow-scroll scrollbar-always">
            {#if menuOpen}
                <ul class="flex flex-row">
                    {#each pages as p}
                        <li aria-current={ $page.url.pathname === p.href ? 'page' : undefined } class="flex items-center p-2">
                            <a on:click={() => menuOpen = false} class="border-b border-slate-600" href={p.href}>{p.title}</a>
                        </li>
                    {/each}
                </ul>
            {:else}
                <div class="flex flex-row justify-between pr-2 pl-1">
                    <a href="/" class="flex items-center px-2 m-2 border-b border-slate-600">thederpykrafter</a>
                </div>
            {/if}
        </div>
        <a href="/" class="rounded-full">
            <img src={logo} alt="logo" class="max-h-6 max-w-6 mt-2.5 rounded-full border-2 border-purple-500">
        </a>
    </nav>
</header>

<svelte:window on:focus={() => menuOpen = false} />

<style lang="postcss">
    li[aria-current='page'] a {
        @apply border-b border-purple-500;
    }
</style>