import { defineConfig } from 'vite';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.js',
			formats: ['es'],
		},
		rollupOptions: {
			external: /^lit/,
			input: {
				main: resolve(__dirname, 'index.html')
			}
		}
	}
});
