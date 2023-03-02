<script>
	
    import '../app.css';
    import Button89 from '$lib/Button89.svelte'
    import SliderBtn from '$lib/SliderBtn.svelte'
   
    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth' });
	}
   
    let pos;
  
</script>

<div class="top" />
<h1>this is my cool stuff library</h1>
<h2>Button-89</h2>
<Button89 />

<h2>Slider Button</h2>
<SliderBtn />

<div style="height:100vh"></div>
<div style="height:100vh"></div>


{#if pos >= window.innerHeight - 25}
	<div class="top-btn">
		<a class="myBtn" href=".top" on:click|preventDefault={scrollIntoView}>Back to top</a>
	</div>
{/if}
<svelte:window bind:scrollY={pos} />

<style>
    .myBtn {
		position: fixed;
		bottom: 20px;
		right: 30px;
		z-index: 9999;
		font-size: 18px;
		border-top: solid 1px #fff;
		border-bottom: solid 1px #fff;
		border-left: none;
		border-right: none;
		outline: none;
		background-color: rgba(51, 83, 83, 0.9);
		color: white;
		cursor: pointer;
		padding: 15px;
		border-radius: 0.7rem;
	}

	.top-btn a::before {
		border-radius: 0.7rem;
		content: ' ';
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		inset: 2px;
		background: rgba(255, 255, 255, 0.6);
		z-index: -1;
		transform: scaleX(0);
		transform-origin: top right;
		transition: transform 0.5s ease;
	}

	.top-btn a:hover::before {
		transform: scaleX(1);
		transform-origin: top left;
	}

	.top-btn a:hover {
		font-weight: bold;
		color: #292727;
		z-index: 1;
		border-radius: 0.7rem;
	}

	.top-btn a:active::before,
	.top-btn a:active {
		background-color: #2e3431;
		color: #fff !important;
	}
</style>