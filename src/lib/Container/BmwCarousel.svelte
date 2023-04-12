<script>
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
    { path: img1, id: "img6" },
    { path: img2, id: "img7" },
    { path: img3, id: "img8" },
    { path: img4, id: "img9" },
    { path: img5, id: "img10" },
  ];
  /*let width = 100 / images.length + "%";*/
  let width = 100;
  let figureWidth = 100 * images.length + "%";

  const directionLeft = e => {
    const transitioningImage = images[images.length - 1];
    document.getElementById(transitioningImage.id).style.opacity = 0;
    images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
    setTimeout(
      () => (document.getElementById(transitioningImage.id).style.opacity = 1),
      500
    );
  };
  const directionRight = e => {
    const transitioningImage = images[0];
    document.getElementById(transitioningImage.id).style.opacity = 0;
    images = [...images.slice(1, images.length), images[0]];
    setTimeout(
      () => (document.getElementById(transitioningImage.id).style.opacity = 1),
      500
    );
  };
</script>

<!-- non-svelte carousel  -->
<div class="slider" style="width:{width}">
  <figure style="width:{figureWidth}">
    {#each images as image (image.id)}
      <div
        class="image-box"
        style="width:{width}"
        animate:flip={{ duration: 500 }}
      >
        <a href={image.path} target="_blank" rel="noreferrer">
          <img
            id={image.id}
            src={image.path}
            alt="catseyes"
            width="100"
            height="250"
          />
        </a>
      </div>
    {/each}
  </figure>
  <div
    style="text-align:center; padding:1em; border-bottom: 2px solid rgba(97, 108, 110, 0.7); margin-bottom:1em"
  >
    <button
      style="padding:0.35em 1.5em; border-radius:1em"
      on:click={directionLeft}>Prev</button
    >
    <button
      style="padding:0.35em 1.5em; border-radius:1em; "
      on:click={directionRight}>Next</button
    >
  </div>
</div>

<style>
  .slider {
    overflow: hidden;
    height: auto;
    /*width: 25%; done as js var in html*/
    margin: 0 auto;
  }

  .image-box {
    /*width: 25%; done as js var in html*/
    margin: 0 auto;
    float: left;
    border-radius: 2em;
  }
  .slider figure img {
    width: 100%;
    float: left;
    object-fit: cover;
  }

  .slider figure {
    position: relative;

    margin: 0;
    left: 0;
    /*animation: 25s slidify infinite ease-in-out;*/
  }

  /* number of % points = num of imgs * 3 + n+1 --> n=1 for 4, 2 for 5, 3 for 6 etc*/

  @keyframes slidify {
    0% {
      left: 0%;
    }

    10% {
      left: 0%;
    }

    12% {
      left: -100%;
    }

    22% {
      left: -100%;
    }

    24% {
      left: -200%;
    }

    34% {
      left: -200%;
    }

    36% {
      left: -300%;
    }

    46% {
      left: -300%;
    }

    48% {
      left: -400%;
    }

    58% {
      left: -400%;
    }

    60% {
      left: -300%;
    }

    70% {
      left: -300%;
    }

    72% {
      left: -200%;
    }
    82% {
      left: -200%;
    }
    84% {
      left: -100%;
    }
    94% {
      left: -100%;
    }
    96% {
      left: 0%;
    }
  }

  /* @keyframes slidify {
      0% {
        left: 0%;
      }
  
      15% {
        left: 0%;
      }
  
      17% {
        left: -100%;
      }
  
      32% {
        left: -100%;
      }
  
      34% {
        left: -200%;
      }
  
      49% {
        left: -200%;
      }
  
      51% {
        left: -300%;
      }
  
      66% {
        left: -300%;
      }
  
      68% {
        left: -200%;
      }
  
      83% {
        left: -200%;
      }
  
      85% {
        left: -100%;
      }
  
      98% {
        left: -100%;
      }
  
      100% {
        left: 0%;
      }
    } */
</style>
