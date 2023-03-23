<script>
  //import "../app.css";
  import Button89 from "$lib/Button89.svelte";
  import SliderBtn from "$lib/SliderBtn.svelte";
  import BackToTopBtn from "../lib/BackToTopBtn.svelte";
  import SvelteScolling from "../lib/SvelteScolling.svelte";
  import ScrollToBtn from "$lib/ScrollToBtn.svelte";
  import ToggleHideBtn from "$lib/ToggleHideBtn.svelte";
  import { scrollRef } from "svelte-scrolling";
  import SKEmbed from "$lib/SKEmbed.svelte";
  import Container from "$lib/Container.svelte"
</script>

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

    <h2>Toggle Button</h2>
    <ToggleHideBtn />
  </div>
  
  <div class="embed">
    <SKEmbed />
  </div>
   
</div>

<div style="width:100%">
<Container />
</div>
<div class="scroll" use:scrollRef={"scroll"} />

<style>
  .page {
    margin: 2em;
  }

  .embed {
    width: 100%;
    height: 800px;
    margin: 4em auto;
    background-color: rgba(57, 119, 119, 0.9);
  }

  h2 {
    margin: 0 1em 0 2em;
  }

  .btns {
    display: flex;
    align-items: center;
    padding: 1em 0;
    border-top: 2px solid rgba(97, 108, 110, 0.7);
    border-bottom: 2px solid rgba(97, 108, 110, 0.7);
  }

  .scroll {
    height: 100vh;
    width: 100%;
  }
</style>
