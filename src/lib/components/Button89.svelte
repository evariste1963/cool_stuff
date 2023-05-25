<script>
  // your script goes here
</script>

<a href="/" class="button-89" data-sveltekit-preload-data>Button-89</a>

<style>
  .button-89 {
    --b: 3px;
    --s: 0.45em;
    --color: #242529;
    width: 10em;
    margin: 0;
    text-decoration: none;
    padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
    color: var(--color);
    --_p: var(--s);
    background: conic-gradient(
        from 90deg at var(--b) var(--b),
        #0000 90deg,
        var(--color) 0
      )
      var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
      calc(100% - var(--b) - 2 * var(--_p));
    transition: 0.3s linear, color 0s, background-color 0s;
    outline: var(--b) solid rgba(0, 0, 0, 0);
    outline-offset: 0.6em;
    font-size: 16px;
    cursor: pointer;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    box-shadow: 6px 6px 6px 0 rgba(97, 108, 110, 0.8);
  }

  .button-89:hover,
  .button-89:focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: 0.05em;
  }

  .button-89:active {
    background: var(--color);
    color: #fff !important;
  }
</style>
