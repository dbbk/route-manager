module.exports = {
  parser: 'babel-eslint',
  extends: '@festicket',
  plugins: ['babel', 'react', 'jsx-a11y', 'import', 'jest'],
  env: {
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: './jest.config.js',
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['off'],
  },
};
