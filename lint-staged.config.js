/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

export default {
  "*": ["pnpm format:write", "pnpm lint"],
};
