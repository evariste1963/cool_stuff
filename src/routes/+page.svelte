<script>
  import Button89 from "$lib/components/Button89.svelte";
  import SliderBtn from "$lib/components/SliderBtn.svelte";
  import BackToTopBtn from "../lib/components/BackToTopBtn.svelte";
  import SvelteScolling from "../lib/components/SvelteScolling.svelte";
  import ScrollToBtn from "$lib/components/ScrollToBtn.svelte";
  import ToggleHideBtn from "$lib/components/ToggleHideBtn.svelte";
  import SlideShow from "$lib/components/SlideShow.svelte";
  import { scrollRef } from "svelte-scrolling";
  import SKEmbed from "$lib/components/SKEmbed.svelte";
  import Container from "$lib/Container/Container.svelte";
  import SvelteCarousel from "$lib/components/SvelteCarousel.svelte";
  import BmwCarousel from "$lib/components/BmwCarousel.svelte";
  import FlipCard from "$lib/components/FlipCard.svelte";
  import ExpandingCards_2 from "$lib/components/ExpandingCards_2.svelte";
  import { Accordion, AccordionItem } from '$lib/components/accordion/accordion';
  //import MixBlendMode from "$lib/components/MixBlendMode.svelte";
  import WWRMixBlendMode from "$lib/components/WWRMixBlendMode.svelte";
  //import NepalnMeSlider from "$lib/components/NepalnMeSlider.svelte";

  let imagesToShow = 2;
  export let data;
	let { items } = data;
</script>

<BackToTopBtn />
<div class="page">
  <h1>this is my cool stuff library</h1>

  <SvelteScolling />
  <div class="btns">
    <div class="btn-container">
      <h2>Button-89</h2>
      <Button89 />
    </div>
    <div class="btn-container">
      <h2>Slider Button</h2>
      <SliderBtn />
    </div>
    <div class="btn-container">
      <h2>Scroll To Button</h2>
      <ScrollToBtn />
    </div>
    <div class="btn-container">
      <h2>Toggle Button</h2>
      <ToggleHideBtn />
    </div>
  </div>

  <div style="width:100%">
    <Container />
  </div>

  <div class="slideshows">
    <h1>Carousels</h1>
    <div
      style="display:flex; align-items:center; width:100%; justify-content:center"
    >
      <h2 style="text-align:center; ">Svelte Carousel</h2>
      <input
        type="number"
        style="padding: 1em; margin:0.5em;  "
        bind:value={imagesToShow}
        min="1"
        max="5"
      />Number of images to show
    </div>
    <div
      class="svelteCarousel"
      style=" width:{imagesToShow *
        22}vw; height: auto; margin:0 auto;  border-bottom: 2px solid rgba(97, 108, 110, 0.7);"
    >
      <SvelteCarousel {imagesToShow} />
    </div>
    <div
      class="slideCarousel"
      style=" border-bottom: 2px solid rgba(97, 108, 110, 0.7);"
    >
      <h2 style="width:100%; text-align:center">Slide Carousel</h2>
      <SlideShow />
    </div>
    <div class="bmwCarousel">
      <h2 style="width:100%; text-align:center; margin-top:2em;"
        >BMW Carousel</h2
      >
      <!-- importing component differently-->
      <svelte:component this={BmwCarousel} />
    </div>
  </div>
  <div style="height:100vh; border-bottom: 2px solid rgba(97, 108, 110, 0.7); ">
    <FlipCard />
  </div>

  <!--<div
    style=" display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width:100vw;
   "
  >
    <NepalnMeSlider />
  </div>
  -->

  <div style="min-height:100vh">
    <ExpandingCards_2 />
  </div>

  <div class="accordion">
    <Accordion colapse --accordion-width="60ch">
      {#each items as item, i}
        <!-- <AccordionItem open={i === 0}> -->
        <AccordionItem open={false}>
          <svelte:fragment slot="title">{item.title}</svelte:fragment>
          <svelte:fragment slot="content">{@html item.details}</svelte:fragment>
        </AccordionItem>
      {/each}
    </Accordion>
    </div>
    

  <div style="height:100vh"
    ><br /><br /><h1>**** CCC MASK/CLIPPING to go in here? **** </h1></div
  >
  <div style="height:100vh"
    ><br /><br /><h1>**** Attribute_Selectors to go in here? **** </h1></div
  >
</div>

<div class="embed">
  <SKEmbed />
</div>

<!-- importing component differently-->
{#await import("$lib/components/MixBlendMode.svelte") then Module}
  <div class="mix-blend-mode">
    <Module.default />
  </div>
{/await}
<div class="wwr-mix-blend-mode">
  <WWRMixBlendMode />
</div>

<div class="scroll" use:scrollRef={"scroll"} />

<style>

.accordion {
display: grid;
height: 100vh;
place-content: center;
font-family: 'Manrope', sans-serif;
font-size: 1.5rem;
color: #fff;
background-color: hsl(220 10% 10%)
}

  .page {
    margin: 2em;
    font-size: 1rem;
  }

  .embed {
    max-width: 80%;
    max-height: 100vh;
    margin: 4em auto;
    background-color: rgba(57, 119, 119, 0.9);
  }

  .btn-container {
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 1vmin 0;
    min-width: 450px;
    font-size: clamp(0.5rem, 1cqmin + 0.5rem, 1rem);
  }
  h2 {
    margin: 0 1vmin;
  }

  .btns {
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
    overflow: auto;
    align-items: center;
    padding: 1em 0;
    border-top: 2px solid rgba(97, 108, 110, 0.7);
    border-bottom: 2px solid rgba(97, 108, 110, 0.7);
  }

  .scroll {
    height: 100vh;
    width: 100%;
  }

  .slideshows {
    margin: 0 auto;
    height: auto;
    padding: 1em 0;
    border-top: 2px solid rgba(97, 108, 110, 0.7);
    border-bottom: 2px solid rgba(97, 108, 110, 0.7);
  }

  .mix-blend-mode {
    background: #fff;
    margin: 0;
    padding: 0;
    border-top: solid 3px #777;
    border-bottom: solid 3px #777;
  }

  .wwr-mix-blend-mode {
    background: #fff;
    align-items: center;
    justify-content: center;
  }
</style>
