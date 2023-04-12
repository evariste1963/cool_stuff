<script>
  import { onDestroy } from "svelte";

  import { flip } from "svelte/animate";
  import img1 from "$lib/images/img1.jpg";
  import img2 from "$lib/images/img2.jpg";
  import img3 from "$lib/images/img3.jpeg";
  import img4 from "$lib/images/img4.jpg";
  import img5 from "$lib/images/img5.jpg";

  let images = [
    { path: img1, id: "img1" },
    { path: img2, id: "img2" },
    { path: img3, id: "img3" },
    { path: img4, id: "img4" },
    { path: img5, id: "img5" },
  ];

  let autoplay = true;
  let autoplaySpeed = 2000;
  let interval;
  let buttonOn = true;

  const directionLeft = e => {
    if (buttonOn) {
      buttonOn = false;
      const transitioningImage = images[images.length - 1];
      document.getElementById(transitioningImage.id).style.opacity = 0;
      images = [
        images[images.length - 1],
        ...images.slice(0, images.length - 1),
      ];
      setTimeout(() => {
        document.getElementById(transitioningImage.id).style.opacity = 1;
        buttonOn = true;
      }, 500);
    }
  };
  const directionRight = e => {
    if (buttonOn) {
      buttonOn = false;
      const transitioningImage = images[0];
      document.getElementById(transitioningImage.id).style.opacity = 0;
      images = [...images.slice(1, images.length), images[0]];
      setTimeout(() => {
        document.getElementById(transitioningImage.id).style.opacity = 1;
        buttonOn = true;
      }, 500);
    }
  };

  const startAutoPlay = () => {
    if (autoplay) {
      interval = setInterval(directionLeft, autoplaySpeed);
    }
  };
  const stopAutoPlay = () => {
    clearInterval(interval);
  };
  if (autoplay) {
    startAutoPlay();
  }
  onDestroy(() => {
    stopAutoPlay();
  });
</script>

<!-- non-svelte bmw carousel  -->
<div class="bmwSlider">
  <figure>
    {#each images as image (image.id)}
      <img
        id={image.id}
        src={image.path}
        alt="catseyes"
        width="100"
        height="250"
        on:pointerover={stopAutoPlay}
        on:pointerout={startAutoPlay}
        animate:flip={{ duration: 500 }}
      />
    {/each}
  </figure>
  <div style="text-align:center; padding:1em; margin-bottom:1em">
    <button
      style="padding:0.35em 1.5em; border-radius:1em"
      on:click={directionLeft}
      on:pointerover={stopAutoPlay}
      on:pointerout={startAutoPlay}>Prev</button
    >
    <button
      style="padding:0.35em 1.5em; border-radius:1em; "
      on:click={directionRight}
      on:pointerover={stopAutoPlay}
      on:pointerout={startAutoPlay}>Next</button
    >
  </div>
</div>

<style>
  .bmwSlider {
    display: flex;
    position: relative;
    flex-direction: column;
    overflow-x: hidden;
    width: 50%;
    margin: 0 auto;
  }

  figure {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    -webkit-mask: linear-gradient(
      to right,
      transparent,
      black 30%,
      black 70%,
      transparent
    );
    mask: linear-gradient(
      to right,
      transparent,
      black 30%,
      black 70%,
      transparent
    );
  }

  .bmwSlider figure img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .bmwSlider figure {
    position: relative;
    margin: 0;
    left: 0;
  }

  button {
    cursor: pointer;
  }
</style>
