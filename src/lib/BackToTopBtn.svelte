<script>
  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  }

  let pos;
</script>

<svelte:window bind:scrollY={pos} />

<div class="top" />
{#if pos >= window.innerHeight - 25}
  <div class="top-btn">
    <a class="myBtn" href=".top" on:click|preventDefault={scrollIntoView}
      >Back to top</a
    >
  </div>
{/if}

<style>
  /* this ensures that the scrollIntoView rturns to the top of the page */
  .top {
    position: absolute;
  }
  .myBtn {
    position: fixed;
    bottom: 80px;
    right: 30px;
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
    text-decoration: none;
    box-shadow: 6px 6px 6px 0 rgba(97, 108, 110, 0.8);
  }

  .top-btn a::before {
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

  .top-btn a:hover::before {
    transform: scaleX(1);
    transform-origin: top left;
  }

  .top-btn a:hover {
    font-weight: bold;
    color: #292727;
    z-index: 1;
    border-radius: 0.7rem;
  }

  .top-btn a:active::before,
  .top-btn a:active {
    background-color: #2e3431;
    color: #fff !important;
  }
</style>
