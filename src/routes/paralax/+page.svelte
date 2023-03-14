<script>
  let scroll;
  let speed = 4;
</script>

<svelte:window bind:scrollY={scroll} />

<h1>{scroll}</h1>

<section>
  <div
    class="box pin"
    style:transform={`translate3d(${scroll / speed}px, ${scroll / speed}px, 0) rotate(${scroll / speed}deg)`} 
    style:background="teal"
    style:margin-left="10%"
    style:top="10%"
    
  />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <br /><br /><br /><br /><br />

  <div
    class="box pin"
    style:transform={`translate3d(${scroll / speed * -1}px, ${(scroll / speed) * 0.01}px, 0) rotate(${scroll / speed *-3}deg)`}
    style:background="purple"
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
    style:transform={`translate3d(0, ${(scroll / speed) * 3}px, 0)`}
    style:background="orangered"
    style:margin-left="50%"
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
    style:transform={`translate3d(0, ${(scroll / speed) * 1.2}px, 0)`}
    style:background="green"
    style:margin-left="65%"
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
    height: auto;
  }
  h1 {
    position: fixed;
    top: 50px;
    margin-left: 10px;
    z-index: 10;
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
    margin-bottom: 100px;
  
  }
</style>
