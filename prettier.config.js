// prettier.config.js or .prettierrc.js

/** @type {import('prettier').Options} */
module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  useTabs: false,
  quoteProps: 'preserve',
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      options: {
        singleQuote: false,
        tabWidth: 2,
      },
    },
  ],
};
