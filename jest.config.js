// @flow
const { SEMAPHORE_SERVER_NAME } = process.env;

module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleNameMapper: {
    '@festicket/react-ui-components': `<rootDir>/${
      SEMAPHORE_SERVER_NAME ? 'dist' : 'src'
    }/index.js`,
  },
};
