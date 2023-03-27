<script>
  import { onMount } from "svelte";
  import "./container.css";

  let post;
  let detailEl = [];
  onMount(() => {
    detailEl = post.querySelectorAll(".detail p");
    detailEl.forEach(el => {
      if (el.innerHTML.length > 20) {
        el.classList.add("excerpt");
        console.log(el.innerHTML.substring(0, 110) + "...");
      }
    });
  });
</script>

<h1>container queries</h1>
<div class="post" bind:this={post}>
  <div class="cont">
    <div class="card">
      <div class="float-left">
        <h2>Card title</h2>
      </div>
      <div class="detail">
        <h3 class="subtitle">The Subtitle</h3>
        <p>
          Donec accumsan ullamcorper diam nec finibus. Etiam et ante justo. Cras
          ac augue fringilla, hendrerit dolor ut, porta nisi. Donec vel maximus
          lectus. Proin consectetur condimentum metus, eget tincidunt diam
          molestie vel. Sed libero lorem, hendrerit ac orci vel, malesuada
          sagittis sem. Fusce tempor enim at commodo volutpat. Nullam vehicula,
          sapien quis eleifend vestibulum, neque nunc pharetra nisl, eget
          interdum sem felis vitae ex. Phasellus malesuada diam eu risus mattis,
          sed iaculis lacus vestibulum. Praesent sit amet dolor risus. Cras et
          congue risus. Proin a tortor eu erat tincidunt fringilla. Nulla
          facilisi. Nullam nec dolor in diam tempus tincidunt. Vivamus eget arcu
          tortor. Nunc mattis elit quis egestas mollis.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="float-left">
        <h2>Card title</h2>
      </div>
      <div class="detail">
        <h3 class="subtitle">The Subtitle</h3>
        <p>
          Curabitur quis dictum nibh, mattis iaculis nibh. In hac habitasse
          platea dictumst. Nam accumsan libero non enim euismod, a tincidunt
          libero blandit. Aliquam erat volutpat. Integer ut malesuada diam, non
          molestie diam. Mauris sit amet imperdiet tellus, vel fringilla lorem.
          Sed suscipit lacus et orci placerat blandit. Integer pulvinar magna
          eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit.
          Curabitur quis dictum nibh, mattis iaculis nibh. In hac habitasse
          platea dictumst. Nam accumsan libero non enim euismod, a tincidunt
          libero blandit. Aliquam erat volutpat. Integer ut malesuada diam, non
          molestie diam. Mauris sit amet imperdiet tellus, vel fringilla lorem.
          Sed suscipit lacus et orci placerat blandit. Integer pulvinar magna
          eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="float-left">
        <h2>Card title</h2>
      </div>
      <div class="detail">
        <h3 class="subtitle">The Subtitle</h3>
        <p>
          Mauris non tellus vulputate, feugiat erat non, pharetra justo. Proin
          consequat felis diam, malesuada auctor mi convallis sed. Sed gravida
          faucibus vulputate. Ut id nunc imperdiet, accumsan lacus volutpat,
          volutpat lectus. Mauris mauris tortor, congue eu lobortis non,
          tristique in turpis. Praesent sit amet ipsum eu risus varius blandit.
          Donec blandit ac lorem et dignissim. Nam sem nisl, aliquam a ornare
          eu, luctus quis enim. Aenean ut felis in neque congue rutrum. Aliquam
          at velit.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  /* css is seperate as container query workaround */
</style>
