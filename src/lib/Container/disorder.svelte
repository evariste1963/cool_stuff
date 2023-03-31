<script>
  // gsap.to()... infinity and beyond!
  // For more check out greensock.com
  // https://codepen.io/pen?editors=1111

  let smoother = ScrollSmoother.create({
    smooth: 1,
    smoothTouch: 0.1,
  });

  let panels = gsap.utils.toArray(".panel");

  let triggers = panels.map((panel, i) => {
    let tween = gsap.to(panel, {
      scale: 0.75,
      scrollTrigger: {
        trigger: panel,
        start: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });
    return tween.scrollTrigger;
  });

  function nextPanel() {
    gsap.to(smoother, {
      scrollTop: smoother.offset("#next", "top top"),
      duration: 2,
    });
  }
  function firstPanel() {
    gsap.to(smoother, {
      scrollTop: 0,
      duration: 2,
    });
  }

  let up = document.getElementById("button-up");
  let down = document.getElementById("button-down");

  up.addEventListener("click", firstPanel);
  down.addEventListener("click", nextPanel);
</script>

<div class="smooth-wrapper">
  <div class="smooth-content">
    <section id="first" class="panel blue"> ONE </section>

    <section class="panel orange" />

    <section id="next" class="panel purple">THREE</section>
    <section class="panel green">FOUR</section>
    <section id="next" class="panel red"> FIVE </section>
  </div>
</div>

<style>
  .panel {
    height: 100vh;
    position: sticky;
    top: 0;
    color: white;
  }

  .orange {
    background-color: orange;
  }
  .purple {
    background-color: purple;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }

  .blue {
    background-color: blue;
  }
</style>
