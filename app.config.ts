import { defineConfig } from "@solidjs/start/config";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import devtools from "solid-devtools/vite";

export default defineConfig({
  vite: {
    // @ts-expect-error Vite 7 plugin types
    plugins: [
      devtools({
        /* features options - all disabled by default */
        autoname: true, // e.g. enable autoname
      }),
      tanstackRouter({ target: "solid" }),
    ],

    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
