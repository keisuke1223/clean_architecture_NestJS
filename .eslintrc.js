module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase'],
            },
            {
                selector: 'enum',
                format: ['PascalCase', 'UPPER_CASE'],
            },
            {
                // ジェネリック型の引数
                selector: 'typeParameter',
                format: ['PascalCase', 'UPPER_CASE'],
            },
            {
                // variables, function, parameter
                selector: 'variableLike',
                format: ['PascalCase', 'camelCase'],
            },
            {
                // class, interface, type, enum, typeParameter
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],
    },
}
