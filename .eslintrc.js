module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': 0,
        indent: ['error', 4],
        eqeqeq: ['error', 'always'],
        semi: ['error', 'never'],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-unused-expressions': ['error', { allowTernary: true }],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-param-reassign': ['error', { props: false }],
    },
}
