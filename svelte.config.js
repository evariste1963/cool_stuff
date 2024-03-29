import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		// vite: {
		// 	optimizeDeps: {
		// 	  include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
		// 	}
		// 	// plugins: []
		//   }
		// this is to get disable: 'visible, non-interactive elements with an on:click event must be accompanied by an on:keydown, on:keyup, or on:keypress event' warnings
		
	},
	onwarn: (warning, handler) => {
		if (warning.code === 'a11y:visible, non-interactive elements with an on:click ') return
		handler(warning)}
};

export default config;
