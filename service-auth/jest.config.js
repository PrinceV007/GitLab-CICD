module.exports = {
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: './coverage',
  rootDir: './'  // Ensures file paths in lcov are relative
};