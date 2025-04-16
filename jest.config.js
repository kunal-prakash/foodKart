module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/fileTransformer.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // collectCoverage: true, // Enable coverage collection
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx}', // Include all JS/JSX files in the src folder
  //   '!src/**/*.test.{js,jsx}', // Exclude test files
  //   '!src/index.js', // Exclude entry point
  // ],
  // coverageDirectory: 'coverage', // Output directory for coverage reports
};
