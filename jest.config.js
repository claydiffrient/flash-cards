module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>jestSetup.js",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.(js)$": "babel-jest",
    "^.+\\.(css)$": "<rootDir>/jest-themeable-styles"
  },
  collectCoverageFrom: ["src/**/*.js"],
};
