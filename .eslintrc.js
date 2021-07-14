module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
