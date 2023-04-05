<script>
  //import "../app.css";
  import Button89 from "$lib/Button89.svelte";
  import SliderBtn from "$lib/SliderBtn.svelte";
  import BackToTopBtn from "../lib/BackToTopBtn.svelte";
  import SvelteScolling from "../lib/SvelteScolling.svelte";
  import ScrollToBtn from "$lib/ScrollToBtn.svelte";
  import ToggleHideBtn from "$lib/ToggleHideBtn.svelte";
  import SlideShow from "$lib/SlideShow.svelte";
  import { scrollRef } from "svelte-scrolling";
  //import SKEmbed from "$lib/SKEmbed.svelte";
  import Container from "$lib/Container/Container.svelte";
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
  <!-- 
  <div class="embed">
    <SKEmbed />
  </div> -->

  <div style="width:100%">
    <Container />
  </div>
  <div class="slideshow">
    <SlideShow />
  </div>
  <div style="height:100vh"
    ><br /><br /><h1>**** Attribute_Selectors to go in here? **** </h1></div
  >
</div>
<div class="scroll" use:scrollRef={"scroll"} />

<style>
  .page {
    margin: 2em;
    font-size: 1rem;
  }
  /*
  .embed {
    width: 100%;
    height: 800px;
    margin: 4em auto;
    background-color: rgba(57, 119, 119, 0.9);
  }
*/

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

  .slideshow {
    margin: 0.5em auto;
    height: auto;
    background: rgba(57, 119, 119, 0.9);
    border-top: 2px solid rgba(97, 108, 110, 0.7);
    border-bottom: 2px solid rgba(97, 108, 110, 0.7);
  }
</style>
