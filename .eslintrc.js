module.exports = {
  env: {
    browser: true,
    webextensions: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["alloy", "prettier"],
  overrides: [
    {
      files: [".eslintrc.js"],
      env: {
        node: true,
      },
      parserOptions: {
        ecmaVersion: 6,
      },
      extends: [],
      rules: {},
    },
  ],
};
