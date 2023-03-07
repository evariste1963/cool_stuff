<script>
  import { scrollTop } from "svelte-scrolling";

  let pos;
</script>

<svelte:window bind:scrollY={pos} />

{#if pos >= window.innerHeight - 25}
  <div class="top-btn">
    <button class="myBtn" on:click={() => scrollTop()}
      >svelte-scroll to Top</button
    >
  </div>
{/if}

<style>
  .myBtn {
    position: fixed;
    bottom: 80px;
    right: 160px;
    z-index: 9999;
    font-size: 18px;
    border-top: solid 1px #fff;
    border-bottom: solid 1px #fff;
    border-left: none;
    border-right: none;
    outline: none;
    background-color: rgba(51, 83, 83, 0.9);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 0.7rem;
    box-shadow: 6px 6px 6px 0 rgba(97, 108, 110, 0.8);
  }

  .top-btn ::before {
    border-radius: 0.7rem;
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 2px;
    background: rgba(255, 255, 255, 0.6);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: top right;
    transition: transform 0.5s ease;
  }

  .top-btn :hover::before {
    transform: scaleX(1);
    transform-origin: top left;
  }

  .top-btn :hover {
    font-weight: bold;
    color: #292727;
    z-index: 1;
    border-radius: 0.7rem;
  }

  .top-btn :active::before,
  .top-btn :active {
    background-color: #2e3431;
    color: #fff !important;
  }
</style>
