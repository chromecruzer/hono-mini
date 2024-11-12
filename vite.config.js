// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [],
//   build: {
//     target: 'esnext',
//   },
// });

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',          // Default entry (main page)
        page1: 'counter.html',         // Separate entry for page1
        page2: 'about.html',         // Separate entry for page2
      },
    },
  },
});
