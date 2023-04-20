<script>
  const imgs = import.meta.glob("$lib/images/**/*.*");

  let imageArr = Object.keys(imgs);

  function toggleCard(e) {
    const cardEl = document.querySelector(".card__inner");
    cardEl.classList.toggle("not-flipped");
  }
</script>

<section>
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
            <img src={imageArr[0]} alt="" class="pp" />
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
</section>

<style>
  :root {
    --primary: #a7d3fc;
    --secondary: #240736;
    --dark: #212121;
    --light: #f3f3f3;
    /*ensure botom scroll does is not instigated*/
    max-width: 100vw;
  }

  section {
    height: 100vh
  }

  .cards {
    margin: 100px auto 0;
    width: 400px;
    height: 600px;
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
    box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
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
    padding: 30px 30px 40px;
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
    width: 128px;
    height: 128px;
    margin: 0 auto 30px;
    border-radius: 50%;
    background-color: #fff;
    border: 5px solid #fff;
    object-fit: cover;
  }

  .card__header h2 {
    color: #fff;
    font-size: 32px;
    font-weight: 900;
    /* text-transform: uppercase;*/
    text-align: center;
  }

  .card__body {
    padding: 30px;
  }

  .card__body h3 {
    color: var(--dark);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .card__body p {
    color: var(--dark);
    font-size: 18px;
    line-height: 1.4;
  }
</style>
