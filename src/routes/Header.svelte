<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    
    let box: HTMLElement;
  	let xLeft: number = 0;
	  let xScroll: number = 0;
	  let xWidth: number = 0;
	  let yTop: number = 0;
	  let yScroll: number = 0;
	  let yHeight: number = 0;
    
    
    export let menuOpen: boolean = false;
    
    function toggleMenu(): void {
        menuOpen = !menuOpen;
    }

    $: menuOpen && parseScroll();
    
    function parseScroll() {
        xLeft=box.scrollLeft
		xScroll=box.scrollWidth
		xWidth=box.clientWidth
		yTop=box.scrollTop
		yHeight=box.clientHeight
		yScroll=box.scrollHeight
	}
	
	onMount(()=>parseScroll())
    
    let logo: string = 'https://github.com/thederpykrafter.png';

    let pages: { title: string, href: string }[] = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Projects', href: '/projects' },
        { title: 'Contact', href: '/contact' },
        { title: 'Resume', href: '/resume' },
    ];
</script>

<header role="navigation" class="border-b-2 border-primary-border">
    <nav class="flex flex-row justify-between pr-2 pl-1">
        <button on:click={toggleMenu}>
            {#if menuOpen}
                <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="5" y1="19" x2="19" y2="5" />
                </svg>
            {:else}
                <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <line x1="5" y1="6" x2="19" y2="6" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="18" x2="19" y2="18" />
                </svg>
            {/if}
        </button>

        <div class="inline-flex overflow-scroll scrollbar-always rounded-full" bind:this={box} on:scroll={parseScroll} on:mousemove={parseScroll} role="navigation">
            {#if menuOpen}
                <ul class="flex flex-row">
                    {#each pages as p}
                        <li aria-current={ $page.url.pathname === p.href ? 'page' : undefined } class="flex items-center p-2">
                            <a on:click={() => menuOpen = false} class="border-b border-secondary-border" href={p.href}>{p.title}</a>
                        </li>
                    {/each}
                </ul>
            {:else}
                {#each pages as p}
                    {#if p.href === '/'}
                        <div aria-current={ $page.url.pathname === p.href ? 'page' : undefined } class="flex flex-row justify-between">
                            <a href="/" class="flex items-center m-2 border-b border-secondary-border">
                                <h1 class="text-xl font-bold">thederpykrafter</h1>
                            </a>
                        </div>
                    {/if}
                {/each}
            {/if}
        </div>
        <a href="/" class="rounded-full">
            <img src={logo} alt="logo" class="max-h-6 max-w-6 mt-2.5 ml-1 rounded-full border-2 border-primary-border">
        </a>
    </nav>
</header>

<svelte:window on:focus={() => menuOpen = false} />

<style lang="postcss">
    li[aria-current='page'] a,
    div[aria-current='page'] a {
        @apply border-b border-primary-border;
    }

    @media screen and (max-width: 550px) {
        nav div ul {
            background:
                /* Shadow covers */
                linear-gradient(0.25turn, rgba(0,0,0,0) 0%, rgba(255,255,255,0.1) 50%, rgba(0,0,0,0) 100%),
                linear-gradient(0.25turn, rgba(255,255,255,0), rgba(0,0,0,0) 70%) 0 100%,
                
                /* Shadows */
                radial-gradient(farthest-side at 50% 0, rgba(1,1,1, .2), rgba(255, 255, 255, 0)),
                radial-gradient(farthest-side at 50% 100%, rgba(1,1,1, .2), rgba(255, 255, 255, 0)) 0 100%;
                background-repeat: no-repeat;
                background-color: rgba(0,0,0,0);
            
                /* Opera doesn't support this in the shorthand */
                background-attachment: local, local, scroll, scroll;
        }
    }
</style>
