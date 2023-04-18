<script>
  //import all image files from directory
  const imgsArr = Object.keys(import.meta.glob("$lib/images/**/*.*"));

  let cardsArr = [
    {
      title: "Day Trips",
      subTitle: "Out amongst the Lions",
      details:
        "Donec accumsan <strong>ullamcorper</strong> diam nec finibus. Etiam et ante justo. Cras ac augue fringilla, <strong>hendrerit</strong> dolor ut, porta nisi.<br><br>Fusce <strong>tempor</strong> enim at commodo volutpat. Nullam vehicula, sapien quis eleifend vestibulum, <strong>neque</strong> nunc pharetra nisl, eget interdum sem felis vitae ex. ",
      image: imgsArr[0],
    },
    {
      title: "Space Travel",
      subTitle: "Bathe amid the Stars",
      details:
        "Curabitur quis dictum nibh, <strong>mattis</strong> iaculis nibh. In hac habitasse platea dictumst. Nam <strong>accumsan</strong> libero non enim euismod, a <strong>tincidunt</strong> libero blandit. Mauris sit <strong>amet</strong> imperdiet tellus, vel fringilla <strong>lorem</strong>. Sed suscipit lacus et orci placerat blandit. <br><br>Integer pulvinar <strong>magna</strong> eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit. Curabitur quis dictum nibh, mattis iaculis nibh.",
      image: imgsArr[1],
    },
    {
      title: "Run Wild",
      subTitle: "Beat the Retreat",
      details:
        "Mauris non <strong>tellus</strong> vulputate, feugiat erat non, pharetra justo. Proin consequat <strong>felis diam</strong>, malesuada auctor mi convallis sed. Sed <strong>gravida</strong> faucibus vulputate. Mauris mauris <strong>tortor</strong>,  Praesent sit amet <strong>ipsum</strong> eu risus varius blandit. <br><br>Donec blandit ac lorem et dignissim. Nam sem nisl, aliquam a ornare eu, luctus <strong>quis enim</strong>. Aenean ut felis in neque congue rutrum. Aliquam <strong>at</strong> velit.",
      image: imgsArr[2],
    },
    {
      title: "Stay Home",
      subTitle: "Behind the fridge",
      details:
        "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit, <strong>sed</strong> do eiusmod tempor incididunt ut labore et <strong>dolore</strong> magna aliqua. Mauris rhoncus <strong>aenean</strong> vel elit. Nibh sed pulvinar proin gravida hendrerit lectus a. <strong>Semper risus</strong> in hendrerit gravida rutrum quisque non tellus.<br><br>Mi <strong>ipsum</strong> faucibus vitae aliquet nec ullamcorper sit amet. Habitant <strong>morbi</strong> tristique senectus et netus et.Faucibus turpis in eu  <strong>mi </strong> bibendum neque <strong>egestas</strong> congue quisque.",
      image: imgsArr[3],
    },
  ];
  //Pass in currently selected card index
  function toggleCard(i) {
    const cards = document.querySelectorAll(".card__inner");
    //untoggle the currrently toggled cards that are not currently selected card -- i
    cards.forEach(card => {
      if (card != cards[i]) card.classList.add("not-flipped");
    });
    //toggle selected card
    cards[i].classList.toggle("not-flipped");
  }
</script>

<div class="flippers">
  {#each cardsArr as card, i}
    <div class="cards">
      <div
        class="card__inner not-flipped"
        on:click={() => toggleCard(i)}
        on:keydown={() => toggleCard(i)}
      >
        <!-- front of card-->
        <div class="card__face card__face--front">
          <img src={card.image} alt="" class="pp front-img" />
          <h2>{card.title}</h2>
        </div>
        <!-- back of card-->
        <div class="card__face card__face--back">
          <div class="card__content">
            <div class="card__header">
              <img src={card.image} alt="" class="pp" />
              <h2>{card.title}</h2>
            </div>
            <div class="card__body">
              <h3>{card.subTitle}</h3>
              <!-- ensure text is displayed with inline html styling -->
              <p>{@html card.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  :root {
    --primary: #a7d3fc;
    --secondary: #240736;
    --dark: #212121;
    --light: #f3f3f3;
  }

  /*row of cards*/
  .flippers {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85vw;
    height: 100%;
    margin: 0 auto;
  }

  /*place CSS for each card -- external*/
  .cards {
    margin: auto 1vw;
    width: 18em;
    height: 25em;
    perspective: 1000px;
  }

  /*for each card -- internal % transitioning*/
  .card__inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
  }

  /*rotate card that does not have the .not-flipped class -- i.e. selected card*/
  .card__inner:not(.not-flipped) {
    transform: rotateY(180deg);
  }

  /* the following 2 rules are to prevent the outlie when using keyboard to flip card */
  .card__inner:focus {
    outline: none !important;
  }

  /*ensure that no outline is present on focus*/
  .card__inner:focus-within {
    outline: none !important;
  }

  .card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    /*hide otherside of card*/
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.4);
  }

  .card__face--front {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3em;
    background-image: linear-gradient(
      to bottom right,
      var(--primary),
      40%,
      var(--secondary)
    );
    transition: transform 0.3s ease-in-out;
  }

  .card__face--front:hover {
    transform: scale(1.03);
  }

  .card__face--front h2 {
    color: #fff;
    font-size: 32px;
  }

  .card__face--back {
    background-color: var(--light);
    /*rotate back of card to initially*/
    transform: rotateY(180deg) /*scale(1.08)*/;
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
    /* neither display property seems to make any difference
    /*display: block;*/
    /*display: flex;*/
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

  .front-img {
    width: 8em;
    height: 8em;
    margin: 2em auto;
  }

  .card__header h2 {
    color: #fff;
    font-size: 1.6rem;
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
