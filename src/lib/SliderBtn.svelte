<script>
    // your script goes here
</script>



   
    <a href="/" >Slider Button</a>


<style>

	 a {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10em;
		height: 80%;
		border-top: solid 2px #fff;
		border-bottom: solid 2px #fff;
		border-left: none;
		border-right: none;
		font-size: 1.5rem;
		font-weight: 500;
		text-decoration: none;
		padding: 1rem 1rem;
		border-radius: 0.7rem;
		margin: 0 2rem 0 0;;
		color: rgba(255, 255, 255, 0.7);
		background-color: rgba(97, 108, 110, 0.7);
		cursor: pointer;
		transition: color 1s ease;
		transition: font-weight 1s ease;
		z-index: 1;
	}

	/*slide work by changing the origin from left to right*/
 a::before {
		border-radius: 0.7rem;
		content: ' '; /*attr(id)*/
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		inset: 2px;
		background: rgba(255, 255, 255, 0.9);
		z-index: -1;
		transform: scaleX(0);
		transform-origin: top right;
		transition: transform 0.5s ease;
	}

	 a:hover::before {
		transform: scaleX(1);
		transform-origin: top left;
		/*content: attr(id);*/
	}

	 a:hover {
		font-weight: bold;
		color: #292727;
		z-index: 1;
		border-radius: 0.7rem;
	}


</style>