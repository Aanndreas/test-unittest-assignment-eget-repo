// jest.config.js

module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"\\.(css)$": "<rootDir>/src/__mocks__/styleMock.ts",
	},
};
