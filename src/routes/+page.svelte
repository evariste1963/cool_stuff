<script>
  import "../app.css";
  import Button89 from "$lib/Button89.svelte";
  import SliderBtn from "$lib/SliderBtn.svelte";
  import BackToTopBtn from "../lib/BackToTopBtn.svelte";
  import SvelteScolling from "../lib/SvelteScolling.svelte";

  const pageLoader = () => {
    pageIsLoaded = true;
  };
  let pageIsLoaded = false;
</script>

<!-- this is to check that thew page is loaded -->
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
  />
{:else}
  <h1>this is my cool stuff library</h1>

  <BackToTopBtn />
  <SvelteScolling />

  <h2>Button-89</h2>
  <Button89 />

  <h2>Slider Button</h2>
  <SliderBtn />

  <div style="height:100vh" />
  <div style="height:100vh" />
{/if}
