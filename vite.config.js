/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
}) */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
 plugins: [
 react(),
 VitePWA({
 registerType: 'autoUpdate',
 includeAssets: ['favicon.svg', 'abi.png'],
 manifest: {
 name: 'NextDevPath',
 short_name: 'NextDev',
 start_url: '/',
 display: 'standalone',
 background_color: '#000000',
 theme_color: '#1d4ed8',
 icons: [
 {
 src: 'loki.jpg',
 sizes: '192x192',
 type: 'image/png',
 },
 {
  src: 'loki.jpg',
  sizes: '512x512',
  type: 'image/png',
  },
  ],
  },
  }),
  ],
});
