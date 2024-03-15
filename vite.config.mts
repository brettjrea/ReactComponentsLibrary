import { defineConfig } from 'npm:vite@4.5.0';
import react from 'npm:@vitejs/plugin-react-swc';

import viteDeno from 'https://deno.land/x/vite_deno_plugin/mod.ts';
import { dirname } from 'https://deno.land/std/path/mod.ts';
import { join } from 'https://deno.land/std/path/mod.ts';

const path = new URL(import.meta.url).pathname;
const __dirname = dirname(Deno.build.os === 'windows' ? path.slice(1) : path);

export default defineConfig({
  plugins: [
    viteDeno({
      importMapFilename: join(__dirname, 'deno.json'),
    }),
    react({
      jsxImportSource: 'react',     
    }),
  ],
resolve: {
    alias: {
      // Attempt to alias react-native to react-native-web
      'react-native': 'react-native-web',
    },
  },
});