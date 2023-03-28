<script>
  import { onMount } from "svelte";
  import "./container.css";

  let post;
  let detailEl = [];

  onMount(() => {
    detailEl = document.querySelectorAll(".detail p");

    detailEl.forEach(el => {
      el.classList.add("excerpt");
      el.innerText = el.innerText.substring(0, 300) + " ... read on ->";
      console.log(el.innerText);
    });
    document.querySelector(".cont").addEventListener(
      "click",
      e => {
        console.log(e);

        if (e.target.classList.contains("excerpt")) {
          e.target.innerHTML = `Donec accumsan ullamcorper diam nec finibus. Etiam et ante justo. Cras
                                  ac augue fringilla, hendrerit dolor ut, porta nisi. Donec vel maximus
                                  lectus. Proin consectetur condimentum metus, eget tincidunt diam
                                  molestie vel. Sed libero lorem, hendrerit ac orci vel, malesuada
                                  sagittis sem. Fusce tempor enim at commodo volutpat. Nullam vehicula,
                                  sapien quis eleifend vestibulum, neque nunc pharetra nisl, eget
                                  interdum sem felis vitae ex. Phasellus malesuada diam eu risus mattis,
                                  sed iaculis lacus vestibulum. Praesent sit amet dolor risus. Cras et
                                  congue risus. Proin a tortor eu erat tincidunt fringilla. Nulla
                                  facilisi. Nullam nec dolor in diam tempus tincidunt. Vivamus eget arcu
                                  tortor. Nunc mattis elit quis egestas mollis.`;

          e.target.classList.toggle("excerpt");
        } else {
          if (e.target.classList.contains("info"))
            e.target.innerText =
              e.target.innerText.substring(0, 300) + " ... read on ->";
          e.target.classList.toggle("excerpt");
        }
      },
      false
    );
  });
</script>

<h1>container queries</h1>
<!-- put ALL card contents in array of objects-->
<div class="post" bind:this={post}>
  <div class="cont">
    <div class="card">
      <div class="float-left">
        <h2>Card title</h2>
      </div>
      <div class="detail">
        <h3 class="subtitle">The Subtitle</h3>
        <p class="info">
          <!-- use event delegation on POST class tcjsc lesson 192 17:20 (bankist)-->
          Donec accumsan ullamcorper diam nec finibus. Etiam et ante justo. Cras
          ac augue fringilla, hendrerit dolor ut, porta nisi. Donec vel maximus lectus.
          Proin consectetur condimentum metus, eget tincidunt diam molestie vel.
          Sed libero lorem, hendrerit ac orci vel, malesuada sagittis sem. Fusce
          tempor enim at commodo volutpat. Nullam vehicula, sapien quis eleifend
          vestibulum, neque nunc pharetra nisl, eget interdum sem felis vitae ex.
          Phasellus malesuada diam eu risus mattis, sed iaculis lacus vestibulum.
          Praesent sit amet dolor risus. Cras et congue risus. Proin a tortor eu
          erat tincidunt fringilla. Nulla facilisi. Nullam nec dolor in diam tempus
          tincidunt. Vivamus eget arcu tortor. Nunc mattis elit quis egestas mollis.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="float-left">
        <h2>Card title</h2>
      </div>
      <div class="detail">
        <h3 class="subtitle">The Subtitle</h3>
        <p class="info">
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
        <p class="info">
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
