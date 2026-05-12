import path from "node:path";
import { fileURLToPath } from "node:url";

import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Custom worker entry (SSR error wrapper). wrangler.jsonc `main` must match this build output.
export default defineConfig({
  envPrefix: ["VITE_", "RESEND_", "CONTACT_"],
  resolve: {
    // tsconfig paths are not always applied in the Cloudflare worker SSR bundle; alias ensures @docs resolves everywhere.
    alias: {
      "@docs": path.resolve(__dirname, "docs"),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    ...tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
  ],
});
