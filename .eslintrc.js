module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  plugins: ["react", "prettier", "cypress"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    "cypress/globals": true
  },
  rules: {
    "prettier/prettier": "error"
  },
  overrides: [{
    files: ["**/__tests__/**/*"],
    env: {
      jest: true
    }
  }, {
    files: ["createConfiguredStore.js", "src/index.js"],
    globals: {
      "process": true
    }
  }]
};
