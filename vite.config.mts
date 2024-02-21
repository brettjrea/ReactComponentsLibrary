import { defineConfig } from 'npm:vite@4.5.0';
import react from 'npm:@vitejs/plugin-react-swc';

import viteDeno from 'https://deno.land/x/vite_deno_plugin/mod.ts';
import { dirname } from 'https://deno.land/std/path/mod.ts';

const __dirname = dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [
    viteDeno({
      importMapFilename: __dirname + '/deno.json',
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
