import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgx from "@svgx/vite-plugin-qwik";
import Icons from "unplugin-icons-x/vite";

export default defineConfig(() => {
  return {
    plugins: [
      svgx(),
      Icons({ autoInstall: true, compiler: "qwik"}),
      qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
