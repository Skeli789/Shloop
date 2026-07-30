# Project Guidelines

## Scope and Dependencies

- Use Yarn for dependency management and scripts.
- Keep changes focused on the requested behavior. Do not refactor unrelated code.
- Reuse existing components and utilities before adding new abstractions.
- Use Material UI v9+ APIs. Do not introduce deprecated Material UI props.

## Verification

- Add or update tests for every new feature or component, including its expected user-visible behavior.
- Front-end tests live in `src/tests/` and use Vitest.
  - Run one test file: `yarn test <filename>`
  - Run all front-end tests: `yarn test-all`
- Back-end tests live in `server/tests/` and use Mocha, Chai, and Supertest.
  - Run one test file: `cd server && yarn test <filename>`
  - Run all back-end tests: `cd server && yarn test-all`
- Run the narrowest relevant test command after a change. Report any unrelated failures without changing unrelated code.

## JavaScript and JSX Style

- Use four spaces for indentation and leave blank lines empty.
- Put opening curly braces on their own line. Omit braces for single-statement `if` and `else` bodies.
- Do not use em dashes in prose, comments, or UI copy.
- Define named constants near the top of the file for repeated values and non-obvious strings. Avoid magic strings and numbers.
- Add JSDoc to components, functions, methods, and effects. Document parameters with `@param` and return values with `@returns` when applicable.
- For CommonJS modules, export each public value next to its implementation rather than gathering exports at the end of the file.

## Code Examples

```javascript
/**
 * Example function demonstrating code style.
 */
function example()
{
    const data =
    {
        key: "value",
    };

    if (condition)
        doSomething();
    else
    {
        doMultiple();
        thingsHere();
    }
}
```

```javascript
const STATUS_READY = "ready";

/**
 * Returns whether a status is ready for processing.
 *
 * @param {string} status The status to evaluate.
 * @returns {boolean} Whether the status is ready.
 */
function isReady(status)
{
    return status === STATUS_READY;
}
module.exports.isReady = isReady;
```
