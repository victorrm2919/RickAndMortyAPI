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
			input: {
				main: resolve(__dirname, 'index.html')
			}
		}
	},
	server: {
		port: 3000,
		open: true
	}
});
