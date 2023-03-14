<script>
  let scroll;
  let speed = 3;
</script>

<svelte:window bind:scrollY={scroll} />

<h1>{scroll}</h1>
<section>
  <div
    class="box pin"
    style:transform={`translate3d(0, ${scroll * speed}px, 0)`}
    style:background="teal"
  />
  <div class="box" style:margin-left="20%" />
  <div class="box" style:margin-left="40%" />
  <div class="box" style:margin-left="30%" />
  <div class="box" style:margin-left="25%" />
  <div class="box" style:margin-left="60%" />
  <div
    class="box"
    style:transform={`translate3d(0, ${scroll * speed * -0.7}px, 0)`}
    style:background="red"
    style:margin-left="50%"
  />
  <div
    class="box pin"
    style:transform={`translate3d(0, ${scroll * speed * 1.1}px, 0)`}
    style:background="teal"
    style:margin-left="90%"
  />
  <div class="box" style:margin-left="90%" />
  <div class="box" style:margin-left="85%" />
  <div class="box" style:margin-left="45%" />
  <div class="box" style:margin-left="35%" />
  <div class="box" style:margin-left="75%" />
  <div class="box" style:margin-left="85%" />
  <div
    class="box"
    style:transform={`translate3d(0, ${scroll * speed * -0.3}px, 0)`}
    style:background="red"
    style:margin-left="65%"
  />
  <div class="box" style:margin-left="55%" />
</section>

<style>
  section {
    height: 1000em;
  }
  h1 {
    position: fixed;
    z-index: 10;
  }
  .box {
    --size: 50px;
    height: var(--size);
    width: var(--size);
    background: lightGrey;
    margin-bottom: 1rem;
  }

  /* 	.pin {
		position: fixed;
	} */
</style>
