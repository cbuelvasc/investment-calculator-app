# Investment Calculator

A web application developed with React and Vite that allows users to calculate and visualize investment growth over time.

## Description

This investment calculator application allows users to input:

- Initial investment
- Annual investment
- Expected return (as a percentage)
- Duration (in years)

With this data, the application calculates and displays a table showing the investment growth year by year, including the interest generated and the total value at the end of each year.

## Technologies used

- React 19
- Vite 6
- JavaScript (ES6+)
- CSS3

## Project structure

```
.github/               # GitHub configuration
  └── workflows/       # GitHub Actions workflows
      └── deployment.yml  # CI/CD pipeline for linting, building, deploying and Docker image publishing

public/                # Public static assets

src/
├── assets/            # Static resources
├── components/        # React components
│   ├── Header.jsx     # Application header
│   ├── UserInput.jsx  # Component for capturing user data
│   ├── Results.jsx    # Component for displaying results
│   ├── TableHead.jsx  # Results table header
│   └── TableRow.jsx   # Results table rows
├── util/              # Utilities and helper functions
│   └── investment.js  # Investment calculation logic
├── App.jsx            # Main component
├── index.css          # Global styles
└── main.jsx           # Entry point

Dockerfile             # Docker container configuration
eslint.config.js       # ESLint configuration
index.html             # Main HTML template
package.json           # Project dependencies and scripts
vite.config.js         # Vite configuration
```

## Features

- Intuitive and easy-to-use user interface
- Real-time calculations
- Detailed visualization of results year by year
- Input validation to ensure correct data

## How to run the project

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone [REPOSITORY_URL]
   cd investment-calculator-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and access `http://localhost:3000` as configured in vite.config.js.

## Available scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run the linter to check code quality
- `npm run preview` - Preview the compiled version before deployment

## Building for production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

The generated files will be in the `dist` directory, ready to be deployed.

## Docker

### Building the Docker image

To build a Docker image of the application, run:

```bash
docker build . -t "investment-calculator-app:v1.0.0"
```

### Running the Docker container

To run the application in a Docker container, execute:

```bash
docker run -dp 3000:3000 investment-calculator-app:v1.0.0
```

This will map port 3000 from the container to port 3000 on your host machine, allowing you to access the application at `http://localhost:3000`.

### GitHub Container Registry

The Docker image is also available in GitHub Container Registry. You can pull it with:

```bash
docker pull ghcr.io/cbuelvasc/investment-calculator-app:latest
```

Or use a specific version by SHA:

```bash
docker pull ghcr.io/cbuelvasc/investment-calculator-app:ab97ef11e77274b8596ceab6f8b4d3ce817dd444
```

To run the application using the image from GitHub Container Registry:

```bash
docker run -dp 3000:3000 ghcr.io/cbuelvasc/investment-calculator-app:latest
```

The Docker image is automatically built and published to GitHub Container Registry through GitHub Actions whenever changes are pushed to the master branch.

## Development Workflow

### GitFlow with Git Emoji and Semantic Versioning

This project follows GitFlow branching model with emoji-based commits and automated semantic versioning.

#### Setup Instructions

1. Install required tools:

```bash
# Install GitFlow extension
npm install -g gitflow

# Install Commitizen for conventional commits
npm install -g commitizen

# Install git-cz with emoji support
npm install -g git-cz

# Install semantic-release for automated versioning
npm install -g semantic-release
```

2. Add the following to your project's `package.json`:

```json
{
  "scripts": {
    "commit": "git-cz",
    "release": "semantic-release"
  },
  "config": {
    "commitizen": {
      "path": "git-cz"
    }
  },
  "release": {
    "branches": ["master"],
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      "@semantic-release/npm",
      "@semantic-release/git",
      "@semantic-release/github"
    ]
  }
}
```

3. Initialize GitFlow in your repository:

```bash
git flow init
```

Use the following settings:
- Production branch: `master`
- Development branch: `develop`
- Feature prefix: `feature/`
- Release prefix: `release/`
- Hotfix prefix: `hotfix/`
- Support prefix: `support/`

#### Workflow Usage

1. **Starting a new feature**:
```bash
git flow feature start feature-name
# Work on your changes
npm run commit  # Use emoji-based commit
git flow feature finish feature-name
```

2. **Creating a release**:
```bash
git flow release start X.Y.Z
# Final adjustments if needed
npm run commit  # Use emoji-based commit
git flow release finish X.Y.Z
```

3. **Automatic version bumping**:
Semantic-release will analyze your commits and automatically determine the next version number based on the commit types:

- `✨ feat:` - Minor version bump (new feature)
- `🐛 fix:` - Patch version bump (bug fix)
- `💥 BREAKING CHANGE:` - Major version bump

4. **Publishing a release**:
```bash
npm run release
```

This will:
- Analyze commit messages since the last release
- Determine the next version number
- Generate/update CHANGELOG.md
- Create a new Git tag
- Push changes to GitHub
- Create a GitHub release

#### Commit Types and Emojis

| Commit Type | Emoji | Description | Version Bump |
|-------------|-------|-------------|--------------|
| feat        | ✨    | New feature | Minor        |
| fix         | 🐛    | Bug fix     | Patch        |
| docs        | 📝    | Documentation | None       |
| style       | 💄    | Formatting  | None         |
| refactor    | ♻️    | Code refactoring | None    |
| perf        | ⚡️    | Performance | Patch        |
| test        | ✅    | Tests       | None         |
| build       | 👷    | Build system | None        |
| ci          | 💚    | CI build    | None         |
| chore       | 🔧    | Chores/maintenance | None  |
| revert      | ⏪    | Revert changes | Varies    |

Use the `BREAKING CHANGE:` prefix in the commit body to trigger a major version bump.
