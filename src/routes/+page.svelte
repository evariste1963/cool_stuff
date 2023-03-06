<script>
  import "../app.css";
  import Button89 from "$lib/Button89.svelte";
  import SliderBtn from "$lib/SliderBtn.svelte";
  import BackToTopBtn from "../lib/BackToTopBtn.svelte";
  import SvelteScolling from "../lib/SvelteScolling.svelte";
  import ScrollToBtn from "$lib/ScrollToBtn.svelte"
  import { scrollRef } from 'svelte-scrolling';

  const pageLoader = () => {
    pageIsLoaded = true;
  };
  let pageIsLoaded = false;
</script>

<!-- this is to check that the page is loaded -->
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

<BackToTopBtn />
  <div class="page">
    <h1>this is my cool stuff library</h1>

    
    <SvelteScolling />
<div class="btns">
    <h2>Button-89</h2>
    <Button89 />

    <h2>Slider Button</h2>
    <SliderBtn />
	
	<h2>Scroll To Button</h2>
	<ScrollToBtn />
</div>
    <div style="height:100vh" />
    <div style="height:100vh" />
	<div class='scroll' use:scrollRef={'scroll'} />
  </div>
{/if}


<style>
.page {
	margin: 1em 2em
}

h2 {
	margin: 0 1em 0 2em;
}

.btns {
	display: flex;
	align-items:center;
	border-top: 2px solid  rgba(97, 108, 110, 0.7);
	border-bottom: 2px solid  rgba(97, 108, 110, 0.7);
}

.scroll {
	height:100vh;
	width:100%
}
</style>
