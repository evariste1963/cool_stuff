<script>
  import { onMount } from "svelte";
  import "./container.css";

  let post;
  let detailEl = [];

  let containers = [
   {
      title: 'Card 1 Title',
      subTitle: 'subTitle 1',
      details: `Donec accumsan ullamcorper diam nec finibus. Etiam et ante justo. Cras
                ac augue fringilla, hendrerit dolor ut, porta nisi. Donec vel maximus
                lectus. Proin consectetur condimentum metus, eget tincidunt diam
                molestie vel. Sed libero lorem, hendrerit ac orci vel, malesuada
                sagittis sem. Fusce tempor enim at commodo volutpat. Nullam vehicula,
                sapien quis eleifend vestibulum, neque nunc pharetra nisl, eget
                interdum sem felis vitae ex. Phasellus malesuada diam eu risus mattis,
                sed iaculis lacus vestibulum. Praesent sit amet dolor risus. Cras et
                congue risus. Proin a tortor eu erat tincidunt fringilla. Nulla
                facilisi. Nullam nec dolor in diam tempus tincidunt. Vivamus eget arcu
                tortor. Nunc mattis elit quis egestas mollis.`
    },
    {
      title: 'Card 2 Title',
      subTitle: 'subTitle 2',
      details: `Curabitur quis dictum nibh, mattis iaculis nibh. In hac habitasse
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
                eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit.`
    },
    {
      title: 'Card 3 Title',
      subTitle: 'subTitle 3',
      details: `Mauris non tellus vulputate, feugiat erat non, pharetra justo. Proin
                consequat felis diam, malesuada auctor mi convallis sed. Sed gravida
                faucibus vulputate. Ut id nunc imperdiet, accumsan lacus volutpat,
                volutpat lectus. Mauris mauris tortor, congue eu lobortis non,
                tristique in turpis. Praesent sit amet ipsum eu risus varius blandit.
                Donec blandit ac lorem et dignissim. Nam sem nisl, aliquam a ornare
                eu, luctus quis enim. Aenean ut felis in neque congue rutrum. Aliquam
                at velit.`
    }
  ]

  onMount(() => {
    detailEl = document.querySelectorAll(".cont p");
    detailEl.forEach(el => {
        el.innerText = el.innerText.substring(0, 300) + " ... read on ->";
        el.addEventListener("pointerout", () => {
          el.innerText = el.innerText.substring(0, 300) + " ... read on ->";
          el.classList.toggle("excerpt");
        });
      el.addEventListener("pointerover", e => {
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
        } 
      });
    });
  });
</script>

<h1>container queries</h1>
<!-- put ALL card contents in array of objects-->
<div class="post" bind:this={post}>
  <div class="cont">
    {#each containers as container}
    <div class="card">
      <div class="float-left">
        <h2>{container.title}</h2>
      </div>
      <div class="detail">
        <h3 class="subtitle">{container.subTitle}</h3>
        <p class="info excerpt">
          {container.details}
        </p>
      </div>
    </div>
    {/each}
  </div>
</div>

<style>
  /* css is seperate as container query workaround */
</style>
