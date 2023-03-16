<script>
  let scroll;
  let speed = 4;
</script>

<!-- can also use scrollTop as per scrollDiv example" -->
<svelte:window bind:scrollY={scroll} />

<h1>{scroll}</h1>

<section>
  <div
    class="pin outer-cube-down"
    style:transform={`translate3d(${(scroll / speed) * 2}px, ${
      scroll / speed
    }px, 0) rotateY(${scroll / speed}deg) rotateZ(${scroll / speed}deg)`}
    style:left="50%"
    style:top="50%"
  >
    <div class="front" />
    <div class="back" />
    <div class="top" />
    <div class="bottom" />
    <div class="left" />
    <div class="right" />
  </div>
  <div
    class="outer-cube"
    style:transform={`translate3d(${(scroll / speed) * -3}px, ${
      (scroll / speed) * 2.5
    }px,  ${scroll / speed}px) rotateY(${scroll / speed}deg) rotateZ(${
      scroll / speed
    }deg)`}
    style:left="50%"
    style:top="50%"
  >
    <div class="front" />
    <div class="back" />
    <div class="top" />
    <div class="bottom" />
    <div class="left" />
    <div class="right" />
  </div>

  <div
    class="outer-cube"
    style:left="50%"
    style:top="50%"
    style:transform={`translate3d(${scroll / speed}px, ${
      (scroll / speed) * 3
    }px, ${scroll / speed}px) rotateY(${(scroll / speed) * 2}deg) rotateZ(${
      (scroll / speed) * -2
    }deg)`}
  >
    <div class="front" />
    <div class="back" />
    <div class="top" />
    <div class="bottom" />
    <div class="left" />
    <div class="right" />
  </div>
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" style:background="fuscia" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <br /><br /><br /><br /><br />

  <div
    class="pin outer-cube-down"
    style:transform={`translate3d(${(scroll / speed) * -1}px, 0, ${
      scroll / speed
    }px) rotate(${(scroll / speed) * -1}deg) rotateX(${
      (scroll / speed) * 2
    }deg) rotateY(${(scroll / speed) * -1}deg)`}
    style:left="50%"
    style:top="50%"
  >
    <div class="front" />
    <div class="back" />
    <div class="top" />
    <div class="bottom" />
    <div class="left" />
    <div class="right" /></div
  >

  <div class="box" style:margin-left="90%" />
  <div class="box" style:margin-left="85%" />
  <div
    class="box"
    style:margin-left="45%"
    style:border-radius="50%"
    style:background="blueviolet"
  />
  <div class="box" style:margin-left="35%" />
  <div class="box" style:margin-left="75%" style:background="aqua" />
  <div class="box" style:margin-left="85%" style:border-radius="50%" />
  <br /><br /><br /><br /><br />
  <div
    class="box"
    style:transform={`translate3d(0, ${(scroll / speed) * 3}px, 0) rotateZ(${
      (scroll / speed) * 2
    }deg)`}
    style:background="orangered"
    style:margin-left="50%"
  />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" style:background="brown" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" style:border-radius="50%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="55%" style:border-radius="50%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" style:border-radius="50%" />
  <div
    class="box"
    style:margin-left="30%"
    style:border-radius="50%"
    style:background="black"
  />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div
    class="box"
    style:transform={`translate3d(0, ${(scroll / speed) * 2.1}px, 0) rotateY(${
      (scroll / speed) * 2
    }deg)`}
    style:background="green"
    style:margin-left="65%"
    style:border-radius="50%"
  />
  <div class="box" style:margin-left="90%" style:border-radius="50%" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="45%" style:background="blueviolet" />
  <div class="box" style:margin-left="35%" />
  <div class="box" style:margin-left="75%" style:background="aqua" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" style:background="gold" />
  <div class="box" style:margin-left="60%" style:border-radius="50%" />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" style:background="gray" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" style:border-radius="50%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div
    class="box"
    style:margin-left="60%"
    style:border-radius="50%"
    style:background="olive"
  />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="90%" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="45%" style:background="blueviolet" />
  <div class="box" style:margin-left="35%" style:border-radius="50%" />
  <div class="box" style:margin-left="75%" style:background="aqua" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" style:background="tomato" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" style:border-radius="50%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="90%" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="45%" style:background="blueviolet" />
  <div class="box" style:margin-left="35%" style:border-radius="50%" />
  <div
    class="box"
    style:margin-left="75%"
    style:border-radius="50%"
    style:background="aqua"
  />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" style:background="plum" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" style:border-radius="50%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="20%" />
  <div
    class="box"
    style:margin-left="40%"
    style:border-radius="50%"
    style:background="purple"
  />
  <div class="box" style:margin-left="30%" />

  <div class="box" style:margin-left="90%" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="45%" style:background="blueviolet" />
  <div class="box" style:margin-left="35%" style:border-radius="50%" />
  <div class="box" style:margin-left="75%" style:background="aqua" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="25%" style:border-radius="50%" />
  <div class="box" style:margin-left="60%" style:background="maroon" />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" style:border-radius="50%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" style:background="navy" />
</section>

<style>
  :root {
    --size: 4em;
    --halfsize: 2em;
    --halfsizen: -2em;
    --ballTopColor: #a8e44f;
    --borderColour: rgb(255, 255, 67);
  }
  section {
    height: auto;
    background-color: rgb(27, 26, 26);
  }
  h1 {
    position: fixed;
    top: 50px;
    margin-left: 10px;
    color: #fff;
    z-index: 10;
  }

  .box {
    --size: 4em;
    height: var(--size);
    width: var(--size);
    background-color: rgb(149, 143, 143); /*todo: create a random colour*/
    margin-bottom: 1rem;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.8);
  }

  .outer-cube,
  .outer-cube-down {
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .outer-cube {
    position: absolute;
  }
  .outer-cube div,
  .outer-cube-down div {
    position: fixed;
    width: var(--size);
    height: var(--size);
    background: linear-gradient(
        217deg,
        rgba(255, 0, 0, 0.5),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(0, 255, 0, 0.5), rgba(0, 255, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0) 70.71%);
    box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.4);
    border: solid 2px var(--borderColour);
  }

  .back {
    transform: translateZ(var(--halfsizen)) rotateY(180deg);
  }
  .right {
    transform: rotateY(-270deg) translateX(var(--halfsize));
    transform-origin: top right;
  }

  .left {
    transform: rotateY(270deg) translateX(var(--halfsizen));
    transform-origin: center left;
  }
  .top {
    opacity: 1;
    transform: rotateX(-90deg) translateY(var(--halfsizen));
    transform-origin: top center;
  }
  .bottom {
    transform: rotateX(90deg) translateY(var(--halfsize));
    transform-origin: bottom center;
  }
  .front {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateZ(var(--halfsize));
    transform-style: preserve-3d;
  }

  .pin {
    position: fixed;
    margin-bottom: 100px;
    box-shadow: 0 0 8px 2px rgba(100, 32, 24, 0.8);
  }
</style>
