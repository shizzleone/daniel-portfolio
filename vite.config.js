import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';
import { readdirSync, cpSync } from 'node:fs';
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), {name:'portfolio-assets',closeBundle(){cpSync('assets','dist/assets',{recursive:true});}}],
  resolve: { alias: {'@':resolve(import.meta.dirname,'src')} },
  build: { rollupOptions: {input: Object.fromEntries(readdirSync('.').filter(f=>f.endsWith('.html')).map(f=>[f.replace('.html',''),resolve(f)]))} },
  server: {host:'127.0.0.1',port:5173,strictPort:true}
});
