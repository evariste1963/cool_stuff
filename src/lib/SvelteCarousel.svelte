<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";

  const imgs = import.meta.glob("$lib/images/**/*.*");

  let carousel; // for calling methods of the carousel instance

  let carouselArr = Object.keys(imgs).concat(
    Object.keys(imgs),
    Object.keys(imgs)
  );

  const handleNextClick = () => {
    carousel.goToNext({ animated: true });
  };

  const handlePrevClick = () => {
    carousel.goToPrev({ animated: true });
  };

  export let imagesToShow;
  $: imagesToScroll = imagesToShow > 2 ? imagesToShow - 1 : 1;
</script>

{#if browser}
  <Carousel
    bind:this={carousel}
    arrows={true}
    autoplay
    autoplayDuration={3000}
    pauseOnFocus
    autoplayProgressVisible
    autoplayDirection={"next"}
    swiping
    dots={true}
    bind:particlesToShow={imagesToShow}
    bind:particlesToScroll={imagesToScroll}
  >
    {#each carouselArr as slide}
      <img src={slide} alt="catseyes" width="250" height="275" />
    {/each}
  </Carousel>

  <div style="text-align:center; padding:1em;  margin-bottom:1em">
    <button
      style="padding:0.35em 1.5em; border-radius:1em"
      on:click={handlePrevClick}>Prev</button
    >
    <button
      style="padding:0.35em 1.5em; border-radius:1em; "
      on:click={handleNextClick}>Next</button
    >
  </div>
{/if}

<style>
  button {
    cursor: pointer;
  }
</style>
