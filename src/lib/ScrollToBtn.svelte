<script>
	import { scrollTo } from 'svelte-scrolling';
	import { sineInOut } from 'svelte/easing';
</script>

<div class="btn-bg">
    <a href="/" use:scrollTo={{ ref: 'scroll', duration: 2000, easing: sineInOut }}>scroll to somewhere</a>
</div>

<style>

a {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10em;
		
		border-top: solid 2px #fff;
		border-bottom: solid 2px #fff;
		border-left: none;
		border-right: none;
		font-size: 1.5rem;
		font-weight: 500;
		text-decoration: none;
		padding: 1rem 1rem;
		border-radius: 0.7rem;
		margin: 0;
		color: rgba(255, 255, 255, 0.7);
		background-color: rgba(97, 108, 110, 0.7);
		cursor: pointer;
		transition: color 1s ease;
		transition: font-weight 1s ease;
		z-index: 1;
	}
</style>