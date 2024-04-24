<script lang="ts">
    let pages: { title: string, href: string }[] = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Projects', href: '/projects' },
        { title: 'Contact', href: '/contact' },
        { title: 'Resume', href: '/resume' },
    ]

    let menuOpen: boolean = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header class="border-b-2 border-purple-500">
    <nav class="flex flex-col space-x-2">
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
        <div>
            {#if menuOpen}
                <ul class="display-block space-x-4 flex flex-row overflow-scroll scrollbar-always">
                    {#each pages as p}
                        <li>
                            <a class="align-middle" href={p.href}>{p.title}</a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </nav>
</header>