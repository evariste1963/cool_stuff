<script>
  import { onDestroy } from "svelte";
  import { flip } from "svelte/animate";
  import { sineInOut } from "svelte/easing";

  const imgsArr = Object.keys(import.meta.glob("$lib/images/**/*.*"));

  let images = [
    { path: imgsArr[0], id: "img1" },
    { path: imgsArr[1], id: "img2" },
    { path: imgsArr[2], id: "img3" },
    { path: imgsArr[3], id: "img4" },
    { path: imgsArr[4], id: "img5" },
  ];

  let autoplay = true;
  let autoplaySpeed = 3000;
  let interval;
  //buttonOn is used to prevent button being repeatedly pressed too quickly -- i.e. must be slower than setTimeOut delay time
  let buttonOn = true;

  const directionLeft = e => {
    if (buttonOn) {
      buttonOn = false;
      //grab last image in Array and set opacity to 0
      const transitioningImage = images[images.length - 1];
      document.getElementById(transitioningImage.id).style.opacity = 0;
      //move last image in Array to front of Array
      images = [
        images[images.length - 1],
        ...images.slice(0, images.length - 1),
      ];
      //Delay resetting of opcacity to 1 so the image has time to move (flip) to front of Array
      setTimeout(() => {
        document.getElementById(transitioningImage.id).style.opacity = 1;
        buttonOn = true;
      }, 700);
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
      }, 700);
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
        animate:flip={{ duration: 900, easing: sineInOut }}
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
    margin-right: 0.5vw;
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
