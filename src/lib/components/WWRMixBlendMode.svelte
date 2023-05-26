<script>
  import logo from "$lib/WWRlogo/logo.png";
</script>

<container>
  <img class="logo" src={logo} alt="WWRlogo" />
  <div>
    <section />
    <section />
    <section />
    <section />
    <section />
    <section />
    <section />
  </div>
</container>

<style>
  container {
    background: #fff;
    height: 100%;
  }
  section {
    height: 400px;
    align-items: center;
    transform: skewY(-2deg);
  }

  section:nth-child(odd) {
    background: #000;
  }

  section:nth-child(even) {
    background: #fff;
  }

  section:nth-child(7) {
    background: #6b0505;
  }

  /*
  .wrapper {
    width: min(100% - 36rem);
    margin-inline: auto;
  }

  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
*/
  .logo {
    position: sticky;
    display: flex;
    justify-content: center;
    top: 30rem;
    mix-blend-mode: difference;
    height: 25em;
    width: auto;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: calc(150px + 30vmin);
    z-index: 99;
  }
</style>
