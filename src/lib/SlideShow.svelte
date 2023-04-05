<script>
  import img1 from "$lib/images/img1.jpg";
  import img2 from "$lib/images/img2.jpg";
  import img3 from "$lib/images/img3.jpeg";
  import img4 from "$lib/images/img4.jpg";
  
  let slideArr = [img1, img2, img3, img4];
 
</script>

<div class="slider">
  <figure>
    {#each slideArr as slide}
      <div class="slide">
        <a href={slide}  target="_blank" rel="noreferrer">
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
    width: 25%;
    margin: 0 auto;
  }

  .slider figure div {
    width: 25%;
    float: left;
  }
  .slider figure img {
    width: 100%;
    float: left;
    object-fit: cover;
  }

  .slider figure {
    position: relative;
    width: 400%;
    margin: 0;
    left: 0;
    animation: 25s slidify infinite ease-in-out;
  }

  @keyframes slidify {
    0% {
      left: 0%;
    }

    14% {
      left: 0%;
    }

    16% {
      left: -100%;
    }

    30% {
      left: -100%;
    }

    32% {
      left: -200%;
    }

    46% {
      left: -200%;
    }

    48% {
      left: -300%;
    }

    62% {
      left: -300%;
    }

    64% {
      left: -200%;
    }

    78% {
      left: -200%;
    }

    80% {
      left: -100%;
    }

    94% {
      left: -100%;
    }

    96% {
      left: 0%;
    }
  }
</style>
