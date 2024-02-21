# ReactComponentLibrary with Deno and Vite

This guide details the setup and usage of the ReactComponentLibrary with Vite, leveraging the vite-deno-plugin for an enhanced development experience with Deno. It includes instructions for development, building, previewing, and optimizing your project, as well as explanations for specific library directories.

## Quick Start

To get started with this example, run the development server:

```bash
deno task dev
```

For comprehensive details on available tasks, refer to the [`./deno.json`](./deno.json) file.

## Available Tasks

- `deno task dev`: Starts the development server with hot module replacement for efficient development.
- `deno task build`: Builds the project for production, optimizing for performance.
- `deno task preview`: Serves the production build on a local server for previewing.
- `deno task optimize`: Analyzes and optimizes your project dependencies, improving load times.

## Directory Structure

- `/lib/r`: Contains components and utilities specific to React.
- `/lib/rnw`: Holds components and utilities tailored for React Native Web, allowing React Native components to be used in web projects.
- `/lib/rnwg`: Integrates React Native Web components with Git, enabling version control for shared components across platforms.

## Adding Dependencies

To add a new dependency, update the imports field in `deno.json`:

```json
{
  "imports": {
    "react": "https://esm.sh/react@17.0.2"
  }
}
```

You can then import it in your project:

```tsx
import React from "react";
```

Alternatively, import directly from the URL:

```tsx
import React from "https://esm.sh/react@17.0.2";
```

## Using ReactComponentLibrary

When developing with ReactComponentLibrary, ensure to reference the appropriate directory based on your target platform (`/lib/r` for React, `/lib/rnw` for React Native Web, and `/lib/rnwg` for React Native Web with Git enhancements). This modular structure simplifies cross-platform development and version control, streamlining the development process.
