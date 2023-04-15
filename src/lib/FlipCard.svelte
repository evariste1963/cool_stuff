<script>
  const imgsArr = Object.keys(import.meta.glob("$lib/images/**/*.*"));
   
  let cardsArr = [
    {
      title: "Day Trips",
      subTitle: "Out amongst the Lions",
      details:
        "Donec accumsan ullamcorper diam nec finibus. Etiam et ante justo. Cras ac augue fringilla, hendrerit dolor ut, porta nisi. Donec vel maximus lectus. Proin consectetur condimentum metus, eget tincidunt diam molestie vel. Sed libero lorem, hendrerit ac orci vel, malesuada sagittis sem. Fusce tempor enim at commodo volutpat. Nullam vehicula, sapien quis eleifend vestibulum, neque nunc pharetra nisl, eget interdum sem felis vitae ex. ",
      image: imgsArr[0],
    },
    {
      title: "Space Travel",
      subTitle: "Bathe amid the Stars",
      details:
        "Curabitur quis dictum nibh, mattis iaculis nibh. In hac habitasse platea dictumst. Nam accumsan libero non enim euismod, a tincidunt libero blandit. Aliquam erat volutpat. Integer ut malesuada diam, non molestie diam. Mauris sit amet imperdiet tellus, vel fringilla lorem. Sed suscipit lacus et orci placerat blandit. <br><br>Integer pulvinar magna eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit. Curabitur quis dictum nibh, mattis iaculis nibh.",
      image: imgsArr[1],
    },
    {
      title: "Run Wild",
      subTitle: "Beat the Retreat",
      details:
        "Mauris non tellus vulputate, feugiat erat non, pharetra justo. Proin consequat felis diam, malesuada auctor mi convallis sed. Sed gravida faucibus vulputate. Ut id nunc imperdiet, accumsan lacus volutpat, volutpat lectus. Mauris mauris tortor, congue eu lobortis non, tristique in turpis. Praesent sit amet ipsum eu risus varius blandit. <br><br>Donec blandit ac lorem et dignissim. Nam sem nisl, aliquam a ornare eu, luctus quis enim. Aenean ut felis in neque congue rutrum. Aliquam at velit.",
      image: imgsArr[2],
    },
    {
      title: "Stay Home",
      subTitle: "Behind the fridge",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit. Nibh sed pulvinar proin gravida hendrerit lectus a. Semper risus in hendrerit gravida rutrum quisque non tellus. Risus feugiat in ante metus dictum at. Erat nam at lectus urna duis. <br><br>Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Habitant morbi tristique senectus et netus et.Faucibus turpis in eu mi bibendum neque egestas congue quisque.",
      image: imgsArr[3],
    },
  ];
  
  function toggleCard(i) {
    const cards = document.querySelectorAll(".card__inner");
        cards.forEach(card => {
            if(card != cards[i]) card.classList.add("not-flipped")
            })
            cards[i].classList.toggle("not-flipped");
  }
   
</script>

<div class="flippers">
{#each cardsArr as card, i}
<div class="cards">
    <div
      class="card__inner not-flipped"
      on:click={() =>toggleCard(i)}
      on:keydown={() =>toggleCard(i)}
    >
      <div class="card__face card__face--front">
        <h2>{card.title}</h2>
      </div>
      <div class="card__face card__face--back">
        <div class="card__content">
          <div class="card__header">
            <img src={card.image} alt="" class="pp" />
            <h2>{card.title}</h2>
          </div>
          <div class="card__body">
            <h3>{card.subTitle}</h3>
            <p
              >{card.details}</p
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
      width: 18em;
      height: 25em;
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
  