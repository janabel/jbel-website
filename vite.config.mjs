import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import react from "@vitejs/plugin-react";
// import mdx from "@mdx-js/esbuild";
import mdx from "vite-plugin-mdx";

export default defineConfig({
  plugins: [react()],
  root: "src/apps/",
  build: {
    outDir: "../../dist",
  },
  server: {
    open: true,
  },
  publicDir: "../../public",
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        mdx(),
        NodeGlobalsPolyfillPlugin({
          buffers: true,
        }),
      ],
    },
  },
});
