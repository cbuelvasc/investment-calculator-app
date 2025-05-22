# Step-by-Step Guide: GitFlow with Git Emojis and Semantic Versioning

## 1. Initial Setup

```bash
# Install GitFlow
npm install -g gitflow

# Install Commitizen for conventional commits
npm install -g commitizen

# Install git-cz with emoji support
npm install -g git-cz

# Install semantic-release for automated versioning
npm install -g semantic-release
```

## 2. Initialize GitFlow in the Repository

```bash
# Clone the repository if you haven't done it yet
git clone [REPOSITORY_URL]
cd investment-calculator-app

# Initialize GitFlow
git flow init
```

Use the following configuration:
- Production branch: `master`
- Development branch: `develop`
- Feature prefix: `feature/`
- Release prefix: `release/`
- Hotfix prefix: `hotfix/`
- Support prefix: `support/`

## 3. Complete Workflow

### Developing a New Feature

```bash
# 1. Update develop branch
git checkout develop
git pull origin develop

# 2. Create new feature branch
git flow feature start feature-name

# 3. Develop the feature
# ... write code ...

# 4. Make commits with emojis
npm run commit
# Select type (feat, fix, etc.)
# Add description
# Follow the assistant prompts

# 5. Finish the feature
git flow feature finish feature-name
```

### Creating a Release

```bash
# 1. Start a release
git flow release start X.Y.Z

# 2. Make final adjustments if necessary
# ... last-minute adjustments ...

# 3. Commit final adjustments
npm run commit

# 4. Finish the release
git flow release finish X.Y.Z
# This will merge the release into master and develop
# It will also create a tag with the version

# 5. Publish changes
git push origin develop
git push origin master
git push --tags
```

### Publishing a Release with Semantic Release

```bash
# Run semantic-release to automate versioning
npm run release
```

This will perform:
- Analysis of commit messages since the last release
- Determination of the next version number
- Generation/update of CHANGELOG.md
- Creation of a new Git tag
- Push changes to GitHub
- Creation of a GitHub release

### Critical Error Correction (Hotfix)

```bash
# 1. Create a hotfix
git flow hotfix start X.Y.Z+1

# 2. Fix the error
# ... fix code ...

# 3. Commit the correction
npm run commit
# Select type "fix" 🐛

# 4. Finish the hotfix
git flow hotfix finish X.Y.Z+1
# This will merge into master and develop and create a tag

# 5. Publish changes
git push origin develop
git push origin master
git push --tags

# 6. Run semantic-release
npm run release
```

## 4. Commit Types and Emojis Guide

| Commit Type | Emoji | Description | Version Bump |
|-------------|-------|-------------|--------------|
| feat        | ✨    | New feature | Minor |
| fix         | 🐛    | Bug fix | Patch |
| docs        | 📝    | Documentation | None |
| style       | 💄    | Code formatting | None |
| refactor    | ♻️    | Refactoring | None |
| perf        | ⚡️    | Performance | Patch |
| test        | ✅    | Tests | None |
| build       | 👷    | Build system | None |
| ci          | 💚    | CI build | None |
| chore       | 🔧    | Maintenance | None |
| revert      | ⏪    | Revert changes | Varies |

For an important change that breaks compatibility, use `BREAKING CHANGE:` in the commit body to force a major version increment.

## 5. When to Release

### After a New Feature

A release should be made when:

1. **A significant set of features has been completed** planned for a specific version.
2. **A development milestone has been reached** planned in the product roadmap.
3. **An important feature needs to be delivered** to the end user as soon as possible.
4. **Enough value has accumulated** to justify a new version.

Procedure:
1. Finish all feature branches to be included in the release (`git flow feature finish`)
2. Start a release branch (`git flow release start X.Y.Z`)
3. Perform final testing and adjustments on the release branch
4. Finish the release (`git flow release finish X.Y.Z`)
5. Execute the publication process (`npm run release`)

### After a Bugfix

A release should be made when:

1. **A critical error has been fixed** that affects the normal operation of the application.
2. **Several bugfixes have accumulated** that significantly improve stability.
3. **A client or user urgently needs** the correction.

Procedure for production errors (hotfix):
1. Create a hotfix branch directly from master (`git flow hotfix start X.Y.Z+1`)
2. Fix the error
3. Finish the hotfix (`git flow hotfix finish X.Y.Z+1`)
4. Execute the publication process (`npm run release`)

Procedure for development errors:
1. Create a feature branch or work directly on develop
2. Fix the error
3. Decide if the bugfix deserves an immediate release or will be included in the next planned release
4. If an immediate release is necessary, follow the normal release process

### Release Best Practices

- **Maintain a predictable schedule** of releases whenever possible.
- **Clearly document** all changes in the CHANGELOG.
- **Perform thorough testing** before each release.
- **Communicate in advance** to users about new versions.
- **Use prereleases** (alpha, beta, RC) for experimental features.
- **Balance between frequency and stability**: very frequent releases can generate fatigue, while very spaced releases can delay value for users.

## 6. Integration with .releaserc.json

The `.releaserc.json` file is a crucial configuration file that integrates semantic-release with the GitFlow workflow. It defines how commit messages are analyzed and translated into version numbers.

### Purpose of .releaserc.json

This file serves several key purposes:
- Specifies which branches can trigger releases
- Configures how commit messages are analyzed to determine version bumps
- Sets up the changelog generation
- Defines the release process and artifacts

### Structure and Configuration

Below is an explanation of the key elements in the `.releaserc.json` file:

```json
{
  "branches": ["main", "master", {"name": "develop", "prerelease": "beta"}],
  "plugins": [
    [
      "@semantic-release/commit-analyzer", 
      {
        "preset": "emoji",
        "releaseRules": [
          {"type": "✨", "release": "minor"},
          {"type": "🐛", "release": "patch"},
          {"type": "📝", "release": "patch"},
          // Additional rules...
        ]
      }
    ],
    // Additional plugins...
  ]
}
```

1. **Branches Configuration**:
   - `"branches": ["main", "master", {"name": "develop", "prerelease": "beta"}]`
   - Defines which branches can trigger a release
   - Configures `develop` branch to create beta prereleases
   - Aligns with GitFlow's branch structure

2. **Commit Analyzer**:
   - Uses the `emoji` preset to interpret emoji-based commits
   - Maps specific emojis to semantic version increments:
     - ✨ (sparkles) = minor version bump (new feature)
     - 🐛 (bug) = patch version bump (bug fix)
     - 💥 (boom) = major version bump (breaking change)

3. **Release Notes Generator**:
   - Configures how release notes are generated from commits
   - Uses the emoji preset to format notes based on commit types

4. **Changelog Management**:
   - Automatically updates the CHANGELOG.md file
   - Organizes changes by version and type

5. **Git Integration**:
   - Updates version in package.json
   - Commits changes with a standardized message format
   - Creates tags for the new version

### How It Works with GitFlow

When using GitFlow with semantic-release and the `.releaserc.json` configuration:

1. **During Development**:
   - Feature branches use emoji commits (`npm run commit`)
   - The emoji and message structure is critical as it determines version impact

2. **During Release**:
   - After completing GitFlow's release process and pushing to master
   - The `npm run release` command triggers semantic-release
   - semantic-release reads `.releaserc.json` to:
     - Analyze all commits since last release
     - Determine the appropriate version increment
     - Generate changelog entries
     - Create the new release

3. **For Hotfixes**:
   - After merging a hotfix to master with GitFlow
   - semantic-release uses the 🐛 (bug) emoji to determine it's a patch update

### CI/CD Integration

The `.releaserc.json` file also enables CI/CD integration:

- GitHub Actions workflow uses the semantic-release configuration
- Automated builds and deployments can be triggered based on version changes
- Docker images can be automatically tagged with the semantic version

By combining GitFlow's branch management, emoji-based commits, and semantic-release with the `.releaserc.json` configuration, you achieve a fully automated versioning and release workflow that maintains a clear history and documentation of all changes. 