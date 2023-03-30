<script>
  import { onMount } from "svelte";
  import "./container.css";
  import img1 from "../images/img1.jpg";
  import img2 from "../images/img2.jpg";
  import img3 from "../images/img3.jpeg";
  import img4 from "../images/img4.jpg";

  let post;
  let detailEl = [];
  let cardHeights = [];
  let cardHeight;
  let containers = [
    {
      title: "Day Trips",
      subTitle: "Out amongst the Lions",
      details:
        "Donec accumsan ullamcorper diam nec finibus. Etiam et ante justo. Cras ac augue fringilla, hendrerit dolor ut, porta nisi. Donec vel maximus lectus. Proin consectetur condimentum metus, eget tincidunt diam molestie vel. Sed libero lorem, hendrerit ac orci vel, malesuada sagittis sem. Fusce tempor enim at commodo volutpat. Nullam vehicula, sapien quis eleifend vestibulum, neque nunc pharetra nisl, eget interdum sem felis vitae ex. Phasellus malesuada diam eu risus mattis, sed iaculis lacus vestibulum. <br><br>Praesent sit amet dolor risus. Cras et congue risus. Proin a tortor eu erat tincidunt fringilla. Nulla facilisi. Nullam nec dolor in diam tempus tincidunt. Vivamus eget arcu tortor. Nunc mattis elit quis egestas mollis.",
      image: img1,
    },
    {
      title: "Space Travel",
      subTitle: "Bathe amid the Stars",
      details:
        "Curabitur quis dictum nibh, mattis iaculis nibh. In hac habitasse platea dictumst. Nam accumsan libero non enim euismod, a tincidunt libero blandit. Aliquam erat volutpat. Integer ut malesuada diam, non molestie diam. Mauris sit amet imperdiet tellus, vel fringilla lorem. Sed suscipit lacus et orci placerat blandit. <br><br>Integer pulvinar magna eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit. Curabitur quis dictum nibh, mattis iaculis nibh. In hac habitasse platea dictumst. Nam accumsan libero non enim euismod, a tincidunt libero blandit. Aliquam erat volutpat. Integer ut malesuada diam, non molestie diam. Mauris sit amet imperdiet tellus, vel fringilla lorem. Sed suscipit lacus et orci placerat blandit. Integer pulvinar magna eros, quis ullamcorper lectus aliquam vitae. Mauris id nulla blandit.",
      image: img2,
    },
    {
      title: "Run Wild",
      subTitle: "Beat the Retreat",
      details:
        "Mauris non tellus vulputate, feugiat erat non, pharetra justo. Proin consequat felis diam, malesuada auctor mi convallis sed. Sed gravida faucibus vulputate. Ut id nunc imperdiet, accumsan lacus volutpat, volutpat lectus. Mauris mauris tortor, congue eu lobortis non, tristique in turpis. Praesent sit amet ipsum eu risus varius blandit. <br><br>Donec blandit ac lorem et dignissim. Nam sem nisl, aliquam a ornare eu, luctus quis enim. Aenean ut felis in neque congue rutrum. Aliquam at velit. Curabitur quis dictum nibh, mattis iaculis nibh. In hac habitasse platea dictumst. Nam accumsan libero non enim euismod, a tincidunt libero blandit. Aliquam erat volutpat. Integer ut malesuada diam, non molestie diam. Mauris sit amet imperdiet tellus, vel fringilla lorem. Sed suscipit lacus et orci placerat blandit.",
      image: img3,
    },
    {
      title: "Stay Home",
      subTitle: "Behind the fridge",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit. Nibh sed pulvinar proin gravida hendrerit lectus a. Semper risus in hendrerit gravida rutrum quisque non tellus. Risus feugiat in ante metus dictum at. Erat nam at lectus urna duis. <br><br>Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Habitant morbi tristique senectus et netus et. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Donec enim diam vulputate ut pharetra sit. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Id ornare arcu odio ut sem nulla pharetra diam. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Imperdiet sed euismod nisi porta lorem. Ornare arcu dui vivamus arcu. Malesuada proin libero nunc consequat. <br><br>Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Pretium lectus quam id leo in vitae turpis massa. Donec pretium vulputate sapien nec sagittis aliquam. Magna etiam tempor orci eu lobortis elementum. Mi quis hendrerit dolor magna. Nam aliquam sem et tortor consequat id porta nibh venenatis. Nulla posuere sollicitudin aliquam ultrices sagittis. Curabitur gravida arcu ac tortor dignissim convallis.",
      image: img4,
    },
  ];

  onMount(() => {
    detailEl = document.querySelectorAll(".cont p");
    detailEl.forEach((el, i) => {
      el.innerText = containers[i].details.substring(0, 300);
      cardHeights.push(el.clientHeight);
      el.addEventListener("pointerout", () => {
        el.innerText = containers[i].details.substring(0, 300);
        el.classList.toggle("excerpt");
      });
      el.addEventListener("pointerover", e => {
        if (e.target.classList.contains("excerpt")) {
          e.target.innerHTML =
            containers[e.target.classList[0].slice(-1)].details;

          e.target.classList.toggle("excerpt");
        }
      });
    });
    cardHeight = cardHeights.reduce((acc, cur) => {
      return cur > acc ? cur : acc;
    });
  });
</script>

<h1>container queries</h1>
<div class="post" bind:this={post}>
  <div class="cont">
    {#each containers as container, i}
      <div class="card" style="min-height:{cardHeight * 1.7}px">
        <div class="float-left">
          <h2>{container.title}</h2>
        </div>
        <div class="detail">
          <h3 class="subtitle">{container.subTitle}</h3>
          <div class="float-right">
            <img src={container.image} alt="cat" class="contImg" />
          </div>
          <p class="index{i} excerpt">
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
