<script>
	let scroll;
	let speed = 3
</script>

<svelte:window bind:scrollY={scroll} />

<h1>{scroll}</h1>
<section>
	<div class="box pin" style:transform={`translate3d(0, ${scroll * speed}px, 0)`} style:background="teal" />
	<div class="box" style:margin-left="20em"/>
	<div class="box" style:margin-left="100em"/>
	<div class="box" style:margin-left="40em"/>
	<div class="box" style:margin-left="80em"/>
	<div class="box" style:margin-left="60em"/>
	<div class="box" style:transform={`translate3d(0, ${scroll * speed * -0.2}px, 0)`} style:background="red" style:margin-left="30em"/>
	<div class="box" style:margin-left="120em"/>
</section>


<style>
    section {
        height: 1000em
    }
	h1 {
		position: fixed;
		z-index: 10;
	}
	.box {
		--size: 150px;
		height: var(--size);
		width: var(--size);
		background: lightGrey;
		margin-bottom: 1rem;
	}
	
/* 	.pin {
		position: fixed;
	} */
</style>