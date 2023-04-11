<script>
  import img1 from "$lib/images/img1.jpg";
  import img2 from "$lib/images/img2.jpg";
  import img3 from "$lib/images/img3.jpeg";
  import img4 from "$lib/images/img4.jpg";
  import img5 from "$lib/images/img5.jpg";

  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";

  let carousel; // for calling methods of the carousel instance

  let carouselArr = [img1, img2, img3, img4, img5];

  const handleNextClick = () => {
    carousel.goToNext({ animated: true });
  };

  const handlePrevClick = () => {
    carousel.goToPrev({ animated: true });
  };

  export let imagesToShow=1
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
    particlesToScroll={1}
  >
  
    {#each carouselArr as slide}
      <img src={slide} alt="catseyes" width="300" height="250" />
    {/each}
  </Carousel>

  <div
    style="text-align:center; padding:1em; border-bottom: 2px solid rgba(97, 108, 110, 0.7); margin-bottom:1em"
  >
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
