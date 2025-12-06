import { defineConfig } from "vite";

export default defineConfig({
  // Serve static files from node_modules
  server: {
    port: 3000,
    open: true,
    fs: {
      // Allow serving files from node_modules
      allow: [".."],
    },
  },

  // Don't minify UBERON IDs
  build: {
    minify: "terser",
    terserOptions: {
      mangle: {
        // Don't mangle property names that could affect SVG IDs
        reserved: ["UBERON", "CL"],
      },
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    exclude: ["@ebi-gene-expression-group/anatomogram"],
  },
});
