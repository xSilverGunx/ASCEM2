module.exports = {
    extends: ['airbnb', 'plugin:prettier/recommended'],
    plugins: ['react','jsx-a11y', 'import','prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 0,
        "import/no-unresolved": ["error", { "ignore": ["^meteor/", "^/"] }],
        "import/extensions": ["off", "never"]
    },
    globals: {
        document: 1,
    }
};