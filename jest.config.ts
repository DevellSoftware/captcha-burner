import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: "ts-jest/presets/js-with-ts-esm",
  moduleNameMapper: {
    "^@web-extractor/(.*)$": ["<rootDir>/src/web-extractor/$1"],
  },
};

export default jestConfig;
