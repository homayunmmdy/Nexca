export default [
    {
        rules: {
            // Enforce consistent use of semicolons
            semi: "error",
            // Disallow unused variables
            "no-unused-vars": ["error", {args: "none"}],
            // Disallow use of `var`
            "no-var": "error",
            // Prefer `const` for variables that are not reassigned
            "prefer-const": "error",
        },
    },
];
  