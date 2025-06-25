# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Supergeneric is a JavaScript/TypeScript utility library providing helper functions for mathematical operations, array manipulation, sorting, and general utility functions. The library is designed for tree-shaking with individual function exports.

## Key Development Commands

- `bun test --watch --coverage` - Run tests in watch mode with coverage
- `bun run lint` - Lint the source code using ESLint
- `bun run verify` - Full verification (build + test)
- `bun run build` - Build the library using Rollup
- `bun run dev` - Alias for test watch mode

## Architecture

### Module Structure
- **Individual Function Files**: Each utility function is in its own file (e.g., `sum.ts`, `average.ts`)
- **Dual Module Support**: Each function builds to both ESM (.mjs) and CommonJS (.js) formats
- **Type Definitions**: TypeScript definitions (.d.ts) generated for all functions
- **Tree-Shakable Exports**: Functions can be imported individually or from the main module

### Build System
- **Rollup Configuration**: `rollup.config.mjs` dynamically scans source files and builds individual modules
- **Package.json Updates**: Build process automatically updates package.json exports based on source files
- **Dual Format Output**: Each function outputs ESM, CommonJS, and TypeScript definitions
- **Minification**: All outputs are minified using Terser

### Code Organization
- `src/index.js` - Main export file that re-exports all functions
- `src/*.ts` - Individual function implementations in TypeScript
- `src/*.spec.ts` - Test files using Bun's test runner
- `dist/` - Built output directory (ESM, CommonJS, and types)

### Testing
- **Test Runner**: Uses Bun for testing (not Jest despite package.json config)
- **Test Pattern**: Each function has a corresponding `.spec.ts` file
- **Coverage**: Built-in coverage reporting via Bun

### Linting and Code Style
- **ESLint Configuration**: TypeScript-aware ESLint setup with custom rules
- **Code Style**: Single quotes, no semicolons, Unix line endings
- **TypeScript**: Strict mode enabled with specific overrides for library development

## Development Workflow

1. Create new functions as individual `.ts` files in `src/`
2. Add corresponding `.spec.ts` test files
3. Run `bun run verify` to ensure build and tests pass
4. The build process automatically updates package.json exports
5. Functions are available as both named exports from main module and individual imports