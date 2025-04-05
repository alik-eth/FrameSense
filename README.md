# FrameSense Monorepo

This is a monorepo containing multiple packages for the FrameSense project.

# Authors
Alik Vovkotrub
Matvii Yermakov

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.15.0

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Build all packages:
```bash
pnpm build
```

## Project Structure

```
.
├── packages/           # All packages
│   ├── core/          # Core functionality
│   ├── api/           # API service
│   └── web/           # Web application
├── package.json       # Root package.json
└── pnpm-workspace.yaml # Workspace configuration
```

## Available Scripts

- `pnpm build` - Build all packages
- `pnpm test` - Run tests across all packages
- `pnpm lint` - Run linting across all packages

## Adding New Packages

To add a new package:

1. Create a new directory under `packages/`
2. Initialize it with `pnpm init`
3. Add the package to the workspace configuration

## Development

Each package can be developed independently while sharing common dependencies through the workspace. 