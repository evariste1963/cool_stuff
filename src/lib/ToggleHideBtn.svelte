<script>
  let toggled;

  function handleToggle() {
    toggled = !toggled;
  }
</script>

<div class="toggleBtn">
  <a
    class="myBtn"
    class:toggled
    href=".top"
    on:click|preventDefault={handleToggle}>toggle</a
  ></div
>

<style>
  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10em;
    border: solid 2px rgba(97, 108, 110, 0.8);
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    padding: 1rem 1rem;
    border-radius: 0.7rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(97, 108, 110, 0.8);
    cursor: pointer;
    transition: font-weight 1s, color 1s ease-in-out;
    box-shadow: 6px 6px 6px 0 rgba(97, 108, 110, 0.8);
    z-index: 1;
  }

  .toggled {
    background: rgba(255, 255, 255, 0.7);
    color: rgba(97, 108, 110, 0.8);
    font-weight: bold;
  }
</style>
