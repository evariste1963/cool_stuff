<script>
  // https://www.youtube.com/watch?v=6QE8dXq9SOE&t=1s

  //thanks to CODINGNEPAL for the original vanilla JS version

  // npm install --save @fortawesome/fontawesome-free

  // import '@fortawesome/fontawesome-free/css/all.css';
  // import '@fortawesome/fontawesome-free/js/all.js';

  import { onMount } from "svelte";

  let slideShow,
    wrapper,
    firstagentWidth,
    timeoutId,
    reStartAutoPlay,
    overlay,
    modal,
    extendedslideShowagents,
    html = "",
    pauseScroll = false;

  //onMount used to pick out DOM elements
  onMount(() => {
    const isAutoPlay = true;
    wrapper = document.querySelector(".wrapper");
    slideShow = document.querySelector(".slideShow");
    modal = document.querySelector(".modal");
    firstagentWidth = slideShow.querySelector(".agent").offsetWidth;
    const slideShowChildren = [...slideShow.children];
    //get number of agents that can fit in the slideShow at once
    let agentsPerView = Math.round(slideShow.offsetWidth / firstagentWidth);
    //insert copies of the last few agents to start of slideShow for infinite scrolling
    slideShowChildren
      .slice(-agentsPerView)
      .reverse()
      .forEach(agent => {
        slideShow.insertAdjacentHTML("afterbegin", agent.outerHTML);
      });
    //insert copies of the first few agents to end of slideShow for infinite scrolling
    slideShowChildren.slice(0, agentsPerView).forEach(agent => {
      slideShow.insertAdjacentHTML("beforeend", agent.outerHTML);
    });

    //have to use EventListener instead of svelte on:dblclick to capture all agents including extras on both ends of slideShow
    extendedslideShowagents = document.querySelectorAll(".agent");
    extendedslideShowagents.forEach(agent =>
      agent.addEventListener("dblclick", openModal)
    );

    // Scroll the slideShow at appropriate postition to hide first few duplicate agents on Firefox/chrome etc
    slideShow.scrollLeft =
      slideShow.offsetWidth + (1.75 * slideShow.offsetWidth) / firstagentWidth;

    const autoPlay = () => {
      slideShow.classList.remove("dragging");
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
      // Autoplay the slideShow after every 2500 ms
      timeoutId = setInterval(() => {
        slideShow.scrollLeft += firstagentWidth;
      }, 2500);
    };
    autoPlay();

    reStartAutoPlay = () => {
      if (pauseScroll) return;
      autoPlay();
    };
    clearInterval(timeoutId);
    if (!wrapper.matches(":hover")) {
      autoPlay();
    }
  });

  let isDragging = false,
    startX,
    startScrollLeft;

  const dragStart = e => {
    isDragging = true;
    slideShow.classList.add("dragging");
    slideShow.style = "cursor:grab; user-select: none;";
    //records the initial cursor and scroll position of the slideShow
    startX = e.pageX;
    startScrollLeft = slideShow.scrollLeft;
  };

  const dragging = e => {
    if (!isDragging) return;
    //updates the scroll position of the slideShow based on the cursor movement/direction
    slideShow.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    isDragging = false;
    slideShow.classList.remove("dragging");
    document.querySelector(".slideShow .agent").style =
      "scroll-snap-align: start";
  };

  const btnScroll = e => {
    const btnId = e.srcElement.attributes.id.value;
    slideShow.scrollLeft +=
      btnId === "left" ? -firstagentWidth : firstagentWidth;
    slideShow.style = "scroll-behavior: smooth";
  };

  const infiniteScroll = () => {
    //if slideShow is at beginning, scroll to end
    if (slideShow.scrollLeft === 0) {
      //instead of fiddling about with classes, this method is far easier
      slideShow.style = "scroll-behavior: auto";
      slideShow.scrollLeft = slideShow.scrollWidth - 2 * slideShow.offsetWidth;
      slideShow.style = "scroll-behavior: smooth";
    } //if slideShow is at end, scroll to beginning
    else if (
      Math.ceil(slideShow.scrollLeft) ===
      slideShow.scrollWidth - slideShow.offsetWidth
    ) {
      slideShow.style = "scroll-behavior: auto;";
      slideShow.scrollLeft = slideShow.offsetWidth;
      slideShow.style = "scroll-behavior: smooth;";
    }
  };

  const toggleHidden = () => {
    //modal = document.querySelector(".modal");
    overlay = document.querySelector(".overlay");
    overlay.addEventListener("mouseleave", reStartAutoPlay);
    overlay.classList.toggle("hidden");
  };

  const closeModal = () => {
    toggleHidden();
    pauseScroll = false;
  };

  const openModal = e => {
    //modal = document.querySelector(".modal");
    modal.innerHTML = "";
    // use closest to find the clicked agent
    let modalagentId = e.target.closest(".agent").id;
    const modalagent = agentsArray.filter(agent => +agent.id == +modalagentId);
    toggleHidden();
    html = `
    <div class="overlay"
      <div style="display:flex">
        <div class="img" style="display: flex; align-items: center;
            justify-content: center;
            margin:auto 2em auto 1em;
            background: linear-gradient(
              to bottom right,
              var(--primary),
              50%,
              var(--secondary)
            );
            width: fit-content;
            padding: 1em 2.5em;
            height: fit-content;        
            border-radius: 25% 10%;
            box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.7);"

          ><img src= ${modalagent[0].image} alt= ${modalagent[0].title} draggable="false" style="  width: 12vw;
              height: 12vw;
              border-radius: 50%;
              object-fit: cover;
              border: 0.3em solid #fff;" />
        </div>

        <div style="text-align:left; padding-right:2em;">
          <h2 style="font-size: 2.1vw; margin-bottom: 0.5em"> ${modalagent[0].title} </h2>
          <p style="font-size: 1.2vw"> ${modalagent[0].details} </p>
        </div>
      
      </div>
    </div>
    `;

    modal.insertAdjacentHTML("afterbegin", html);
    pauseScroll = true;
  };

  const imgsArr = Object.keys(import.meta.glob("$lib/images/*.*"));

  let agentsArray = [
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
      title: "Research",
      subTitle: "Taming the shrews",
      details:
        "Donec accumsan <strong>ullamcorper</strong> diam nec finibus. Etiam et ante justo. Cras ac augue fringilla, <strong>hendrerit</strong> dolor ut, porta nisi.<br><br>Fusce <strong>tempor</strong> enim at commodo volutpat. Nullam vehicula, sapien quis eleifend vestibulum, <strong>neque</strong> nunc pharetra nisl, eget interdum sem felis vitae ex. ",
      image: imgsArr[4],
    },
    {
      id: 6,
      title: "Time Men",
      subTitle: "Bathe amid the Stars",
      details:
        "Curabitur quis dictum nibh, <strong>mattis</strong> iaculis nibh. In hac habitasse platea dictumst. Nam <strong>accumsan</strong> libero non enim euismod, a <strong>tincidunt</strong> libero blandit. Mauris sit <strong>amet</strong> imperdiet tellus, vel fringilla <strong>lorem</strong>. Sed suscipit lacus et orci placerat blandit. <br><br>Integer pulvinar <strong>magna</strong> eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit. Curabitur quis dictum nibh, mattis iaculis nibh.",
      image: imgsArr[5],
    },
    {
      id: 7,
      title: "Inca Roads",
      subTitle: "Beat the Retreat",
      details:
        "Mauris non <strong>tellus</strong> vulputate, feugiat erat non, pharetra justo. Proin consequat <strong>felis diam</strong>, malesuada auctor mi convallis sed. Sed <strong>gravida</strong> faucibus vulputate. Mauris mauris <strong>tortor</strong>,  Praesent sit amet <strong>ipsum</strong> eu risus varius blandit. <br><br>Donec blandit ac lorem et dignissim. Nam sem nisl, aliquam a ornare eu, luctus <strong>quis enim</strong>. Aenean ut felis in neque congue rutrum. Aliquam <strong>at</strong> velit.",
      image: imgsArr[6],
    },
  ];
</script>

<svelte:window on:mouseup={dragStop} />
<body>
  <div
    class="wrapper"
    on:mouseenter={() => clearInterval(timeoutId)}
    on:mouseleave={reStartAutoPlay}
  >
    <i id="left" on:click={btnScroll} on:keydown={btnScroll}>prev</i>

    <!-- dragging class required below to prevent errors as it doesn't exist until it's injected in by the dragStart function -->
    <div
      bind:this={slideShow}
      class="slideShow dragging"
      on:mousemove={dragging}
      on:mousedown={dragStart}
      on:scroll={infiniteScroll}
    >
      {#each agentsArray as agent}
        <div class="agent" id={agent.id}>
          <div class="img"
            ><img src={agent.image} alt={agent.title} draggable="false" /></div
          >
          <h2>{agent.title}</h2>
          <span>{agent.subTitle}</span>
        </div>
      {/each}
    </div>
    <i id="right" on:click={btnScroll} on:keydown={btnScroll}>next</i>
  </div>
  <div class="overlay hidden" on:click={closeModal} on:keydown={closeModal}>
    <div class="modal" />
  </div>
</body>

<!-- <div class="hidden"> modal window code goes here, position is absolute and is hidden in css until doubleclicked agent - agent details will have to be injected in using js </div>-->

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ink free, cursive, "Poppins", sans-serif;
    padding: 0;
  }
  body {
    display: flex;
    padding: 0 35px;
    align-items: center;
    /* justify-content: center; */
    min-height: 100vh;
    background: linear-gradient(
      to bottom right,
      var(--primary),
      25%,
      var(--secondary)
    );
    background-image: url("../../lib/images/img6.jpg");
    background-size: cover;
  }

  :root {
    --primary: #a7d3fc;
    --secondary: #240736;
  }

  .overlay {
    position: fixed;
    top: 0;
    /*left:0;*/
    width: 100%;
    height: 100%;
    margin: auto;
    /*background-color: rgba(158, 151, 151, 0.1);*/ /*darkens page behind */
    backdrop-filter: blur(8px); /*blurs page behind */
    /*border-radius: 20em 6em;*/
    z-index: 99;
    transform: scale(1);
    transition: all 0.3s;
    cursor: pointer;
  }

  .modal {
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    user-select: none;
    border-radius: 8em 2em;
    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.4);
    height: auto;
    min-height: 30vh;
    width: 70%;
    padding: 3em 2em;
    background: #fff;
    text-align: center;
    align-items: center;
    z-index: 999;
    transform: scale(1);
    transition: all 0.3s;
  }
  .modal {
    transform: translate(-50%, -50%);
  }

  .hidden {
    visibility: hidden;
    transform: scale(0%);
  }

  .wrapper {
    max-width: 60vw;
    width: 100%;
    position: relative;
    margin-top: 15%;
  }

  .wrapper i {
    height: 2.5em;
    width: 2.5em;
    background: #fff;
    text-align: center;
    line-height: 2.5em;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    user-select: none;
    top: 50%;
    font-size: 1.25rem;
    font-weight: BOLD;
    transform: translateY(-50%);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    transition: transform 0.1s linear;
  }
  .wrapper i:active {
    transform: translateY(-50%) scale(0.85);
  }

  .wrapper i:first-child {
    left: -22px;
  }

  .wrapper i:last-child {
    right: -22px;
  }
  .wrapper .slideShow {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% / 3) - 9px);
    gap: 12px;
    overflow-x: auto;
    height: 300px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    align-items: center;
  }

  .slideShow::-webkit-scrollbar {
    display: none;
  }

  .slideShow :where(.agent, .img) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2.7em 0.7em;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.7);
  }

  .slideShow .agent {
    scroll-snap-align: start;
    height: 16em;
    padding-bottom: 0.2em;
    background: #fff;
    cursor: pointer;
  }

  .slideShow.dragging {
    scroll-snap-type: none;
    scroll-behavior: auto;
  }

  .agent .img {
    background: linear-gradient(
      to bottom right,
      var(--primary),
      50%,
      var(--secondary)
    );
    height: 8em;
    width: 10em;
  }

  .agent .img:hover {
    transform: scale(1.04);
  }

  .agent .img img {
    width: 7em;
    height: 7em;
    border-radius: 50%;
    object-fit: cover;
    border: 0.3em solid #fff;
  }

  .agent h2 {
    font-weight: 800;
    font-size: 1.3rem;
    margin: 0.6em 0 0.3em;
  }

  .agent span {
    color: #4f5157;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 950px) {
    .wrapper .slideShow {
      grid-auto-columns: calc((100% / 2) - 7px);
    }
  }

  @media screen and (max-width: 650px) {
    .wrapper .slideShow {
      grid-auto-columns: 100%;
    }
  }
</style>
