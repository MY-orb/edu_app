module.exports = {
  root: true,
  globals: {
    window: true,
  },
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-console': 2,
    eqeqeq: 2,
    'no-extra-label': 2,
  },
};
