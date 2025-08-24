import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm"], // Vite uses ESM
  dts: true, // generate .d.ts files
  sourcemap: true,
  clean: true,
  external: ["./generated/client"], // <- important!
});
