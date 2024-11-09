import { resolve } from 'path';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const root = resolve(__dirname, 'src');

export default defineConfig({
  resolve: {
    alias: {
      '@src': root,
    },
  },
  plugins: [react()],
})
