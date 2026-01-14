## Testing Requirements

**Front-end tests:** `src/tests/` (Vitest)
- Run specific test: `yarn test <filename>`
- Run all tests: `yarn test-all`

**Back-end tests:** `server/tests/` (Mocha + Chai + Supertest)
- Run specific test: `cd server && yarn test <filename>`
- Run all tests: `cd server && yarn test-all`

**Always add tests when creating new components or features.**

## Code Style

**Curly braces:** Must be on their own line.
**Single-line if statements:** No curly braces.
**Blank lines:** No whitespace on blank lines.

```javascript
function example()
{
    const data =
    {
        key: "value"
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
