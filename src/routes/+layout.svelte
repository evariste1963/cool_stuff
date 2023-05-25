<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Loader from "../lib/components/Loader.svelte";
  import { fade } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { fly, scale } from "svelte/transition";

  export let data;

  // dynamic destructured alternative
  //$: ({pathname} = data)

  const durationIn = 300;
  const durationOut = 300;
  const delay = 400;

  const transitionIn = { easing: cubicOut, y: 10, durationIn, delay };
  const transitionOut = { easing: cubicIn, y: -10, durationOut };

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
    <div class="transition" in:fly={transitionIn} out:fly={transitionOut}>
      <slot />
    </div>
  {/key}
  <Footer />
{/if}
