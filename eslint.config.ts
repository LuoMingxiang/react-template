// eslint.config.ts
import antfu from "@antfu/eslint-config";
export default antfu(
  {
    react: true,
    formatters: true,
    typescript: {
      tsconfigPath: "tsconfig.json",
    },
  },
  {
    files: ["src/**/*.ts"],
    rules: {
      "perfectionist/sort-objects": "error",
    },
  }
);
