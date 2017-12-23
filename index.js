const globalsRestricted = require('eslint-restricted-globals')

const globalsAllowed = ['history']
// Allow history due to React Router props

module.exports = {
  'extends': ['adequate'].concat(['eslint-config-airbnb/rules/react'].map(require.resolve)),
  rules: {
    'no-restricted-globals': ['error'].concat(globalsRestricted.filter(x => !~globalsAllowed.indexOf(x)), ['isFinite', 'isNaN']),
    // disallow specific globals
    // http://eslint.org/docs/rules/no-restricted-globals

    'jsx-quotes': ['error', 'prefer-single'],
    // Specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes

    'react/prefer-es6-class': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md

    'react/prefer-stateless-function': ['error', { 'ignorePureComponents': true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md

    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    // Forbid certain propTypes (any, array, object)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md

    'react/no-unused-prop-types': [
      'warn',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    // Prevent unused propType definitions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md

    'react/no-array-index-key': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md

    'react/require-default-props': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md

    'react/jsx-filename-extension': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  },
}
