import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { visualizer } from 'rollup-plugin-visualizer'
// import { analyzer } from 'vite-bundle-analyzer'
import analyzer from 'rollup-plugin-analyzer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // visualizer({
    //   open: true, // Automatically opens the report in the browser
    //   filename: "stats.html", // Output file name
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
    // analyzer({
    //   analyzerMode: 'server', // or 'static' for file output
    //   openAnalyzer: false, // set to true to auto-open
    // })
  ],
  build: {
    rollupOptions: {
      plugins: [
        analyzer({
          summaryOnly: true, // shows just the summary in terminal
          limit: 40 // show top 20 largest modules
        })
      ]
    }
  }
});
