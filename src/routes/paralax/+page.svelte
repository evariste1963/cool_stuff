<script>
  const randomNum = (Math.random(2, 10) * 10).toFixed(2);
  let scroll;
  let speed = randomNum;
</script>

<svelte:window bind:scrollY={scroll} />

<h1>{scroll}</h1>
<h2>{speed}</h2>
<section>
  <div
    class="box pin"
    style:transform={`translate3d(0, ${scroll / speed}px, 0)`}
    style:background="teal"
    style:margin-left="10%"
  />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <br /><br /><br /><br /><br />

  <div
    class="box pin"
    style:transform={`translate3d(0, ${(scroll / speed) * 0.2}px, 0)`}
    style:background="teal"
    style:margin-left="90%"
  />
  <div class="box" style:margin-left="90%" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="45%" />
  <div class="box" style:margin-left="35%" />
  <div class="box" style:margin-left="75%" />
  <div class="box" style:margin-left="85%" />
  <br /><br /><br /><br /><br />
  <div
    class="box"
    style:transform={`translate3d(0, ${(scroll / speed) * 2}px, 0)`}
    style:background="red"
    style:margin-left="65%"
  />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div
    class="box"
    style:transform={`translate3d(0, ${(scroll / speed) * 3}px, 0)`}
    style:background="red"
    style:margin-left="50%"
  />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div class="box" style:margin-left="55%" />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
</section>

<style>
  section {
    height: 1000em;
  }
  h1,
  h2 {
    position: fixed;
    top: 50px;
    margin-left: 10px;
    z-index: 10;
  }

  h2 {
    left: 100px;
  }
  .box {
    --size: 50px;
    height: var(--size);
    width: var(--size);
    background: lightGrey;
    margin-bottom: 1rem;
  }

  .pin {
    position: fixed;
  }
</style>
