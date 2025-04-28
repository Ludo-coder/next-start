import { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["app/**/*.{js,jsx,ts,tsx}", "src/**/*.{js,jsx,ts,tsx}"],

  // Add more setup options before each test is run
  // transformIgnorePatterns: ["node_modules/(?!(axios)/)"],
  //   moduleNameMapper: {
  //     "^@/(.*)$": "<rootDir>/$1",
  //   },
  //   modulePaths: ["<rootDir>"],
  //   transform: {
  //     "^.+\\.tsx?$": "ts-jest",
  //   },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
