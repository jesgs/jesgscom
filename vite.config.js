import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/assets/styles/scss/screen.scss'],
            refresh: true,
        }),
    ],
});
