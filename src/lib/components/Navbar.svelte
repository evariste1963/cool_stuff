<!-- this creates the navbar items based on the navItems array-->
<script>
  import { page } from "$app/stores";

  let navItems = [
    { page: "Home", path: "/" },
    { page: "disorder", path: "disorder" },
    { page: "paralax", path: "paralax" },
    { page: "scrollDiv", path: "scrollDiv" },
    { page: "coolSlider", path: "coolSlider" },
  ];
</script>

<nav>
  {#each navItems as navItem}
    {#if navItem.page !== "Home"}
      <a
        href={navItem.path}
        class:selected={$page.route.id.includes(navItem.path)}
        data-sveltekit-preload-data
        >{navItem.page}
      </a>
    {:else}
      <a
        href={navItem.path}
        class:selected={$page.route.id.split("/")[1] === ""}
        data-sveltekit-preload-data
        >{navItem.page}
      </a>
    {/if}
  {/each}
</nav>

<style>
  nav {
    position: sticky;
    max-width: 100vw;
    display: flex;
    top: 0;
    z-index: 999;
    margin: 0;
    text-align: center;
    justify-content: center;
    background: rgba(97, 108, 110, 0.99);
    box-shadow: 0 0 10px 0 rgb(0 0 0);
  }

  nav a {
    margin: 0.4% 1em;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: calc(12px + 0.5vw);
    padding: calc(0.1em + 0.3vw) 0;
    transition: all 0.3s ease-in-out;
  }

  nav a:not(.selected):hover {
    transform: translateY(-10%);
    color: rgb(240, 219, 163);
  }

  .selected {
    font-weight: bold;
    border-bottom: 1px solid rgb(231, 209, 111);
    color: rgb(231, 209, 111);
  }
</style>
