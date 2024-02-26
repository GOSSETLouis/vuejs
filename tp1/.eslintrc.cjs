module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    extraFileExtensions: [".vue", ".ts"]
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    // "hardcore/ts",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    //"plugin:vue/recommended",
    "prettier",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "vue/no-dupe-keys": "off",
  },
  ignorePatterns: ["dist"],
};
