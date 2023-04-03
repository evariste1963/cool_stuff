<script>
  import { onMount } from "svelte";

  let sections
  let offsets = []
  let y
   
  onMount(() => {
sections = document.querySelectorAll('.section')
sections.forEach((section, i) =>{
     offsets.push(section.getBoundingClientRect().top)
} )
console.log(offsets);


 })

 //look in scrollDiv for more clues \\

</script>
<svelte:window bind:scrollY={y}/>
{console.log(y)}
<div  class="first section">first div</div>
<div class="second section">second div</div>
<div class="third section">third div</div>
<div class="forth section">forth div</div>

<style>
    .section {
        height:100vh;
        top:0;
        margin:0;
    }
</style>


