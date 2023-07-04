<script>
	import { setAccordionOptions} from './context'

	export let colapse = false;
	
	setAccordionOptions( { colapse })
	
</script>

<div class="accordion">
	<slot />
</div>

<style>
	.accordion {
		width: var(--accordion-width, 100%);
		padding: var(--accordion-padding, 1rem);
		color: var(--accordion-color, hsl(220 10% 98%));
		background-color: var(--accordion-background, hsl(220 10% 16%));
		border-radius: var(--accordion-radius, 12px);
		box-shadow: var(--accordion-shadow, 0px 0px 25px rgb(255, 255, 255), 0px 0px 30px rgb(20, 25, 182));
	}
</style>
