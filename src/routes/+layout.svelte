<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import Loader from "../lib/Loader.svelte";
  import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
  import { disableScrollHandling } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(async () => {
    disableScrollHandling();
});

  export let data;

  // dynamic destructured alternative
	//$: ({pathname} = data)

	const duration = 500;
	const delay = duration + 50;

	const transitionIn = { easing: cubicOut, duration, delay };
	const transitionOut = { easing: cubicIn, duration };

  const pageLoader = () => {
    pageIsLoaded = true;
  };
  let pageIsLoaded = false;
</script>

{#if !pageIsLoaded}
  <div
    use:pageLoader
    style="position:fixed; 
		top:0; 
		bottom:0; 
		left:0; 
		right:0; 
		display:grid; 
		place-items:center; 
		z-index: 9999"
  >
    <Loader />
  </div>
{:else}
  <Navbar />
  {#key data.pathname}
		<!-- {#key pathname}-->
		<div class="transition" in:fade={transitionIn} out:fade={transitionOut}>
			<slot />
		</div>
	{/key}
  <Footer />
{/if}
