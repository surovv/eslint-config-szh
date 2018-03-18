module.exports = {
  'plugins': ['fp'],
  'extends': ['eslint-config-airbnb-base', 'plugin:fp/recommended'],
  'parser': 'babel-eslint',
  'env': {
    'es6': true,
    'browser': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'spread': true,
      'experimentalObjectRestSpread': true
    }
  },
  'rules': {
    'fp/no-unused-expression': 1,

    'import/prefer-default-export': 0,

    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore'
    }],
    'function-paren-newline': 0,
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': 0,
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'radix': ['error', 'as-needed'],
  },
};
