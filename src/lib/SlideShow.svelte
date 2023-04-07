<script>
  import img1 from "$lib/images/img1.jpg";
  import img2 from "$lib/images/img2.jpg";
  import img3 from "$lib/images/img3.jpeg";
  import img4 from "$lib/images/img4.jpg";
  import img5 from "$lib/images/img5.jpg";

  let slideArr = [img1, img2, img3, img4, img5];
  let width = 100 /slideArr.length
  let figureWidth = 100 *slideArr.length
  console.log(width,figureWidth);
  
</script>

<div class="slider" style="width:{width}%">
  <figure style = "width:{figureWidth}%">
    {#each slideArr as slide}
      <div class="slide" style="width:{width}%">
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
  }

  .slider figure div {
    /*width: 25%; done as js var in html*/
    margin: 0 auto;
    float: left;
  }
  .slider figure img {
    width: 100%;
    float: left;
    object-fit: cover;
  }

  .slider figure {
    position: relative;
    /* width: 500%; */
    margin: 0;
    left: 0;
    animation: 25s slidify infinite ease-in-out;
  }

  @keyframes slidify {
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
  }
</style>
