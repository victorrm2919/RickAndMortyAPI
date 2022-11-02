import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: './index.js',
			formats: ['es'],
		},
		rollupOptions: {
			external: /^lit/,
		},
	},
	server: {
		port: 3000,
    open: true
	}
});
