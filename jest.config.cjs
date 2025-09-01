module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  // If your tests import CSS (directly or via components)
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // Some libraries ship ESM that Jest won't transpile by default.
  // Allowlist ESM deps here so babel-jest transforms them:
  transformIgnorePatterns: [
    "node_modules/(?!(react-grid-system|lodash-es|nanoid)/)"
  ],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
