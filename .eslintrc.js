module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      'plugin:jest/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint', 'jest'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: 'module',
      project: './tsconfig.json',
      createDefaultProgram: true,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          tabWidth: 2,
          singleQuote: true,
          semi: false,
          arrowParens: 'always',
          endOfLine: 'auto',
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          'devDependencies': true,
          'optionalDependencies': true
        }
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-console': ['error'],
      'linebreak-style': 'off',
      'jsx-a11y/accessible-emoji': 0
    },
    overrides: [
      {
        files: ['**/*.tsx'],
        rules: {
          'react/prop-types': 'off',
        },
      },
    ],
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  }
  