<script>
  // https://github.com/doomd
  import { onMount } from "svelte";
  import { disableScrollHandling } from "$app/navigation";

  let box;

  let yTop = 0;
  let yScroll = 0;
  let yHeight = 0;

  // const lorem = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`
  // const loremArray = Array(20).fill(lorem)

  function scrollPos() {
    yTop = box.scrollTop.toFixed(0);
    yHeight = box.clientHeight;
    yScroll = box.scrollHeight;
  }

  onMount(async () => {
    /*disableScrollHandling();*/
    scrollPos();
  });
</script>

<h2
  >Binding scrollTop (vertical) of scrollable elements to variables in Svelte</h2
>
<div class="firstDiv" />
<div style="width:100%; margin:2em auto;">
  <div
    class="box"
    bind:this={box}
    on:scroll={scrollPos}
    on:mousemove={scrollPos}
  >
    <div class="sect sect1" />
    <div class="sect sect2" />
    <div class="sect sect3" />
    <div class="sect sect4" />
    <!-- {#each loremArray as paragraph}
    <div>
	{@html paragraph}
</div>
	{/each} -->
  </div>

  <div class="report" style="width: 60%; margin: 0 auto">
    <div
      >vertical: {yTop} from top, box is {yHeight}px high, ({yScroll} total scroll
      height)</div
    >
  </div>
</div>
<div style="height:100vh; background:#757" />

<style>
  .sect {
    height: auto;
  }

  .sect1 {
    background-color: rgb(190, 128, 226);
    min-height: 800px;
  }

  .sect2 {
    background-color: rgb(226, 151, 128);
    min-height: 700px;
  }

  .sect3 {
    background-color: rgb(128, 226, 177);
    min-height: 600px;
  }

  .sect4 {
    background-color: rgb(128, 181, 226);
    min-height: 800px;
  }

  .firstDiv {
    height: 100px;
    background: rgb(172, 130, 130);
  }

  .box {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 600px;
    overflow: scroll; /*shows scroll bars*/
    resize: both;
    margin: 10px auto;
    white-space: nowrap;
  }
</style>
