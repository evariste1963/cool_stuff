<script>
    const imgsArr = Object.keys(import.meta.glob("$lib/images/**/*.*"));
    
   
    function toggleCard(e) {
    const cardEl = document.querySelectorAll(".card__inner");
    cardEl.forEach((el,i)=>{
        el.classList.toggle("not-flipped");
    })
   
  }

</script>

<div class="flippers">
{#each imgsArr as img, i}
<div class="cards">
    <div
      class="card__inner not-flipped"
      on:click={toggleCard}
      on:keydown={toggleCard}
    >
      <div class="card__face card__face--front">
        <h2>this.me</h2>
      </div>
      <div class="card__face card__face--back">
        <div class="card__content">
          <div class="card__header">
            <img src={img} alt="" class="pp" />
            <h2 style="font-style:italic">this.me</h2>
          </div>
          <div class="card__body">
            <h3>JavaScript Wizard</h3>
            <p
              >Lorem ipsum <strong>dolor</strong> sit amet, consectetur
              <strong>adipiscing</strong>
              elit. Sed id erat a magna lobortis dictum. Nunc est arcu,
              <strong>lacinia</strong>
              quis sapien placerat, <strong>laoreet</strong> tincidunt nulla.</p
            >
          </div>
        </div>
      </div>
    </div>
  </div>
{/each}

</div>

<style>
    :root {
      --primary: #ffce00;
      --secondary: #fe4880;
      --dark: #212121;
      --light: #f3f3f3;
    }

    .flippers {
        display: flex;
        align-items: center;
        justify-content: center;
        width:85vw;
        margin:0 auto
    }
  
    .cards {
      margin: 4em auto 0;
      width: 12em;
      height: 20em;
      perspective: 1000px;
    }
  
    .card__inner {
      width: 100%;
      height: 100%;
      transition: transform 1s;
      transform-style: preserve-3d;
      cursor: pointer;
      position: relative;
    }
  
    .card__inner:not(.not-flipped) {
      transform: rotateY(180deg);
    }
  
    /* the following 2 rules are to prevent the outlie when using keyboard to flip card */
    .card__inner:focus {
      outline: none !important;
    }
  
    .card__inner:focus-within {
      outline: none !important;
    }
  
    .card__face {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      overflow: hidden;
      border-radius: 16px;
      box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.4);
    }
  
    .card__face--front {
      background-image: linear-gradient(
        to bottom right,
        var(--primary),
        var(--secondary)
      );
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .card__face--front h2 {
      color: #fff;
      font-size: 32px;
    }
  
    .card__face--back {
      background-color: var(--light);
      transform: rotateY(180deg);
    }
  
    .card__content {
      width: 100%;
      height: 100%;
    }
  
    .card__header {
      position: relative;
      padding: 10px 10px 20px;
    }
  
    .card__header:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        to bottom left,
        var(--primary) 10%,
        var(--secondary) 115%
      );
      z-index: -1;
      border-radius: 0px 0px 50% 0px;
    }
  
    .pp {
      display: block;
      width: 6em;
      height: 6em;
      margin: 0 auto 0.5em;
      border-radius: 50%;
      background-color: #fff;
      border: 5px solid #fff;
      object-fit: cover;
    }
  
    .card__header h2 {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 900;
      /* text-transform: uppercase;*/
      text-align: center;
    }
  
    .card__body {
      padding: 1em;
    }
  
    .card__body h3 {
      color: var(--dark);
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5em;
    }
  
    .card__body p {
      color: var(--dark);
      font-size: 0.8rem;
      line-height: 1.1;
    }
  </style>
  