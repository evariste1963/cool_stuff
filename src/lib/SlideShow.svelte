<script>
  let slideArr = Object.keys(import.meta.glob("$lib/images/**/*.*"));
  let width = 100 / slideArr.length + "%";
  let figureWidth = 100 * slideArr.length + "%";
</script>

<!-- non-svelte carousel  -->
<div class="slider" style="width:{width}">
  <figure style="width:{figureWidth}">
    {#each slideArr as slide}
      <div class="slide" style="width:{width}">
        <a href={slide} target="_blank" rel="noreferrer">
          <img src={slide} alt="catseyes" width="100" height="250" />
        </a>
      </div>
    {/each}
  </figure>
</div>

<style>
  .slider {
    overflow: hidden;
    height: auto;
    /*width: 25%; done as js var in html*/
    margin: 0 auto;
    padding-bottom: 2em;
  }

  .slider figure div {
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
    animation: 25s slidify infinite ease-in-out;
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
