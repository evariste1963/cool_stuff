<script>
  const imgsArr = Object.keys(import.meta.glob("$lib/images/**/*.*"));
  let cardsArr = [
    {
      id: 1,
      title: "Day Trips",
      subTitle: "Out amongst the Lions",
      details:
        "Donec accumsan <strong>ullamcorper</strong> diam nec finibus. Etiam et ante justo. Cras ac augue fringilla, <strong>hendrerit</strong> dolor ut, porta nisi.<br><br>Fusce <strong>tempor</strong> enim at commodo volutpat. Nullam vehicula, sapien quis eleifend vestibulum, <strong>neque</strong> nunc pharetra nisl, eget interdum sem felis vitae ex. ",
      image: imgsArr[0],
    },
    {
      id: 2,
      title: "Space Travel",
      subTitle: "Bathe amid the Stars",
      details:
        "Curabitur quis dictum nibh, <strong>mattis</strong> iaculis nibh. In hac habitasse platea dictumst. Nam <strong>accumsan</strong> libero non enim euismod, a <strong>tincidunt</strong> libero blandit. Mauris sit <strong>amet</strong> imperdiet tellus, vel fringilla <strong>lorem</strong>. Sed suscipit lacus et orci placerat blandit. <br><br>Integer pulvinar <strong>magna</strong> eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit. Curabitur quis dictum nibh, mattis iaculis nibh.",
      image: imgsArr[1],
    },
    {
      id: 3,
      title: "Run Wild",
      subTitle: "Beat the Retreat",
      details:
        "Mauris non <strong>tellus</strong> vulputate, feugiat erat non, pharetra justo. Proin consequat <strong>felis diam</strong>, malesuada auctor mi convallis sed. Sed <strong>gravida</strong> faucibus vulputate. Mauris mauris <strong>tortor</strong>,  Praesent sit amet <strong>ipsum</strong> eu risus varius blandit. <br><br>Donec blandit ac lorem et dignissim. Nam sem nisl, aliquam a ornare eu, luctus <strong>quis enim</strong>. Aenean ut felis in neque congue rutrum. Aliquam <strong>at</strong> velit.",
      image: imgsArr[2],
    },
    {
      id: 4,
      title: "Stay Home",
      subTitle: "Behind the fridge",
      details:
        "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit, <strong>sed</strong> do eiusmod tempor incididunt ut labore et <strong>dolore</strong> magna aliqua. Mauris rhoncus <strong>aenean</strong> vel elit. Nibh sed pulvinar proin gravida hendrerit lectus a. <strong>Semper risus</strong> in hendrerit gravida rutrum quisque non tellus.<br><br>Mi <strong>ipsum</strong> faucibus vitae aliquet nec ullamcorper sit amet. Habitant <strong>morbi</strong> tristique senectus et netus et.Faucibus turpis in eu  <strong>mi </strong> bibendum neque <strong>egestas</strong> congue quisque.",
      image: imgsArr[3],
    },
    {
      id: 5,
      title: "Reaserch",
      subTitle: "Taming the shrews",
      details:
        "Donec accumsan <strong>ullamcorper</strong> diam nec finibus. Etiam et ante justo. Cras ac augue fringilla, <strong>hendrerit</strong> dolor ut, porta nisi.<br><br>Fusce <strong>tempor</strong> enim at commodo volutpat. Nullam vehicula, sapien quis eleifend vestibulum, <strong>neque</strong> nunc pharetra nisl, eget interdum sem felis vitae ex. ",
      image: imgsArr[4],
    },
    {
      id: 6,
      title: "Space Travel",
      subTitle: "Bathe amid the Stars",
      details:
        "Curabitur quis dictum nibh, <strong>mattis</strong> iaculis nibh. In hac habitasse platea dictumst. Nam <strong>accumsan</strong> libero non enim euismod, a <strong>tincidunt</strong> libero blandit. Mauris sit <strong>amet</strong> imperdiet tellus, vel fringilla <strong>lorem</strong>. Sed suscipit lacus et orci placerat blandit. <br><br>Integer pulvinar <strong>magna</strong> eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit. Curabitur quis dictum nibh, mattis iaculis nibh.",
      image: imgsArr[0],
    },
    {
      id: 7,
      title: "Run Wild",
      subTitle: "Beat the Retreat",
      details:
        "Mauris non <strong>tellus</strong> vulputate, feugiat erat non, pharetra justo. Proin consequat <strong>felis diam</strong>, malesuada auctor mi convallis sed. Sed <strong>gravida</strong> faucibus vulputate. Mauris mauris <strong>tortor</strong>,  Praesent sit amet <strong>ipsum</strong> eu risus varius blandit. <br><br>Donec blandit ac lorem et dignissim. Nam sem nisl, aliquam a ornare eu, luctus <strong>quis enim</strong>. Aenean ut felis in neque congue rutrum. Aliquam <strong>at</strong> velit.",
      image: imgsArr[1],
    },
  ];

  function featureCard(i, e) {
    const cards = document.querySelectorAll(".gridCard");
    console.log(e);

    cards.forEach(card => {
      if (card != cards[i]) {
        card.classList.add("not_featured");
        card.classList.add("hidden");
      }
    });
    cards[i].classList.toggle("hidden");
    cards[i].classList.toggle("not_featured");
  }
</script>

<!-- this can also be done with FLIP -->
<section id="cardGrid">
  {#each cardsArr as card, i}
    <div
      class="gridCard not_featured hidden"
      on:click={e => featureCard(i, e)}
      on:keydown={e => featureCard(i, e)}
    >
      <div class="card_body">
        <div class="title-image">
          <h1>{card.title}</h1>
          <img src={card.image} alt={card.title} width="100" height="100" />
        </div>
        <div class="body_text">
          <h2>{card.subTitle}</h2>

          <p class="details">{@html card.details}</p>
        </div>
      </div>
    </div>
  {/each}
</section>

<style>
  #cardGrid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(100%, max(10rem, 100%/4)), 1fr)
    );
    gap: 0.5em;
    width: 60vw;
    margin: 1em auto;
    grid-row: 2;
  }


  .gridCard {
    position:relative;
    display: flex;
    flex-direction: column;
    height: auto;
    cursor: pointer;
    padding: 1em;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .gridCard:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: rgba(255,255,255,1);
    border:solid 1px #252;
    /* border-radius: 6px; */
    transition: all 0.2s ease;
  }
  
  h2 {
    font-size: 100%;
  }

  img {
    border-radius: 0.7em;
  }

  .gridCard.not_featured:hover:before {
    top:-1.5%;
    left:-1.5%;
    right:-1.5%;
    bottom:-1.5%;
  } 

  .gridCard:not(.not_featured) {
    order: -1;
    grid-column: 1 / -1;
    min-height: 18em;
    display: flex;
    padding-left: 1em;
    
  }
  

  .gridCard:not(.not_featured) .card_body {
    display: flex;
    align-items: center;
  }

  .gridCard:not(.not_featured) .body_text {
    padding: 0 1em;
  }

  .details {
    display: none;
  }

  .gridCard:not(.hidden) p {
    display: block;
    text-align: justify;
    font-size: 1rem;
  }

  .gridCard:not(.hidden) img {
    width: 12em;
    height: auto;
  }

  .gridCard:not(.hidden) h1 {
    font-size: 1.8rem;
    padding-bottom: 0.5em;
  }

  .gridCard:not(.hidden) h2 {
    text-align: left;
    font-size: 120%;
  }
</style>
