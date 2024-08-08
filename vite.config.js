import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/assets/styles/scss/screen.scss', 'public/assets/scripts/dist/index.bundle.js'],
            refresh: true,
        }),
    ],
});
