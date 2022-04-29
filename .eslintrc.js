module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    globals: {
        React: true,
        expect: true,
        jsdom: true,
        JSX: true,
    },
    extends: [
        'google',
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint', 'jsx-a11y', 'import'],
    rules: {
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'spaced-comment': [
            'error',
            'always',
            {
                exceptions: ['-', '+'],
            },
        ],
        'import/order': [
            'warn',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                groups: ['builtin', 'external', ['internal', 'parent'], 'sibling', 'index', 'object'],
                'newlines-between': 'always',
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                enableDangerousAutofixThisMayCauseInfiniteLoops: true,
            },
        ],
        'padding-line-between-statements': ['warn'],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-types': 'warn',
        'no-empty-function': 'error',
        'require-jsdoc': 'off',
        'guard-for-in': 'error',
        'new-cap': 'error',
        camelcase: 'warn',
        '@typescript-eslint/no-empty-function': ['error'],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { vars: 'local', varsIgnorePattern: '^_', argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
        '@typescript-eslint/no-var-requires': 'error',
        'no-case-declarations': 'error',
        'no-prototype-builtins': 'warn',
        'no-undef': 'error',
        'no-unsafe-optional-chaining': 'error',
        'prefer-const': 'error',
        'prefer-spread': 'warn',
        'react/display-name': 'error',
        'react/jsx-key': 'error',
        'react/no-children-prop': 'error',
        'react/prop-types': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-alert': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['src'],
            },
        },
    },
}
