<script>
  import logo from "$lib/WWRlogo/logo.png";
</script>

<container>
  <img class="logo" src={logo} alt="WWRlogo" />
  <section />
  <section />
  <section />
  <section />
</container>

<style>
  container {
    background: #fff;
    height: 100%;
  }
  section {
    padding-block: 3rem;
  }

  section:nth-child(even) {
    color: #323232;
    background: #fff;
    height: 300px;
  }

  section:nth-child(odd) {
    color: #efefef;
    background: #000;
    height: 300px;
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
    margin: 2vh auto;
    width: calc(150px + 30vmin);
  }
</style>
