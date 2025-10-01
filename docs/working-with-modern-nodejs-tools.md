# 1. Working with Modern Node.js Tools

This chapter covers the essential tools and practices for modern Node.js development.

## Learning Objectives

By the end of this chapter, you will be able to:
- Set up a modern Node.js development environment
- Use package managers effectively (npm, yarn, pnpm)
- Configure development tools and linters
- Understand Node.js version management

## Node.js Version Management

### Using Node Version Manager (nvm)

Node Version Manager helps you install and switch between different Node.js versions.

```bash
# Install nvm (on macOS/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install latest LTS version
nvm install --lts

# Use specific version
nvm use 20.10.0

# List installed versions
nvm list
```

### Using fnm (Fast Node Manager)

fnm is a faster alternative to nvm, written in Rust.

```bash
# Install fnm
curl -fsSL https://fnm.vercel.app/install | bash

# Install Node.js LTS
fnm install --lts

# Use specific version
fnm use 20.10.0
```

## Package Managers

### npm (Node Package Manager)

npm comes bundled with Node.js and is the default package manager.

```bash
# Initialize a new project
npm init -y

# Install dependencies
npm install express

# Install dev dependencies
npm install --save-dev typescript @types/node

# Run scripts
npm run build
npm start
```

### pnpm (Performance npm)

pnpm is faster and more efficient than npm, using hard links and symlinks.

```bash
# Install pnpm globally
npm install -g pnpm

# Initialize project
pnpm init

# Install dependencies
pnpm add express

# Install dev dependencies
pnpm add -D typescript @types/node
```

### Yarn

Yarn is another popular package manager with focus on performance and security.

```bash
# Install yarn
npm install -g yarn

# Initialize project
yarn init -y

# Add dependencies
yarn add express

# Add dev dependencies
yarn add --dev typescript @types/node
```

## Development Tools

### ESLint Configuration

Set up ESLint for code quality and consistency.

```javascript
// .eslintrc.js
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'prefer-const': 'error',
  },
};
```

### Prettier Configuration

Configure Prettier for consistent code formatting.

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### TypeScript Configuration

Set up TypeScript for type safety.

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Project Structure

### Modern Node.js Project Layout

```
my-project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── app.ts
├── tests/
├── dist/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── .eslintrc.js
└── README.md
```

### package.json Scripts

Configure useful npm scripts for development workflow.

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/app.js",
    "dev": "tsx watch src/app.ts",
    "test": "node --test",
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix",
    "format": "prettier --write src/**/*.ts"
  }
}
```

## Environment Configuration

### Using dotenv

Manage environment variables with dotenv.

```bash
# Install dotenv
pnpm add dotenv
pnpm add -D @types/dotenv
```

```javascript
// src/config.ts
import 'dotenv/config';

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  dbUrl: process.env.DATABASE_URL,
};
```

### Environment File Example

```bash
# .env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
JWT_SECRET=your-secret-key
```

## Development Workflow

### Using tsx for Development

tsx is a modern TypeScript runner that's faster than ts-node.

```bash
# Install tsx
pnpm add -D tsx

# Run TypeScript files directly
npx tsx src/app.ts

# Watch mode for development
npx tsx watch src/app.ts
```

### Using nodemon

Alternative development server with auto-restart.

```bash
# Install nodemon
pnpm add -D nodemon

# Configure nodemon.json
{
  "watch": ["src"],
  "ext": "ts,js",
  "exec": "tsx src/app.ts"
}
```

## Debugging Tools

### Node.js Inspector

Debug Node.js applications using the built-in inspector.

```bash
# Start with inspector
node --inspect src/app.js

# Start with inspector and break
node --inspect-brk src/app.js
```

### VS Code Configuration

Configure VS Code for Node.js debugging.

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug TypeScript",
  "program": "${workspaceFolder}/src/app.ts",
  "outFiles": ["${workspaceFolder}/dist/**/*.js"],
  "runtimeArgs": ["-r", "tsx/cjs"]
}
```

## Best Practices

1. **Use the latest LTS version** of Node.js for production
2. **Lock dependency versions** using package-lock.json or pnpm-lock.yaml
3. **Separate dev and production dependencies** using --save-dev flag
4. **Use TypeScript** for better development experience and fewer bugs
5. **Configure linting and formatting** tools for consistent code style
6. **Use environment variables** for configuration
7. **Set up proper project structure** from the beginning

## Summary

Modern Node.js development requires understanding various tools and configurations. Setting up your development environment properly from the start will save you time and help you write better code. The tools covered in this chapter form the foundation for all subsequent development work.

## Next Steps

In the next chapter, we'll dive deeper into JavaScript and TypeScript fundamentals that are essential for Node.js development.