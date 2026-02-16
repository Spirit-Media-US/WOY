#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────
# Work On Yourself — Deploy to Cloudways
# Builds the site and pushes static files
# to the deploy branch for Cloudways to pull.
# ─────────────────────────────────────────────

DEPLOY_BRANCH="deploy"
SOURCE_BRANCH="main"

# Ensure we're on the source branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "$SOURCE_BRANCH" ]; then
	echo "Error: Must be on '$SOURCE_BRANCH' branch. Currently on '$CURRENT_BRANCH'."
	exit 1
fi

# Ensure working directory is clean
if ! git diff --quiet HEAD 2>/dev/null; then
	echo "Error: Working directory has uncommitted changes. Commit or stash first."
	exit 1
fi

# Add Homebrew to PATH (macOS ARM)
export PATH="/opt/homebrew/bin:$PATH"

echo "Building site..."
bun run build

echo "Preparing deploy..."
DEPLOY_DIR=$(mktemp -d)
cp -r dist/. "$DEPLOY_DIR/"

# Backup node_modules so branch switch doesn't destroy them
NODE_MODULES_BACKUP=""
if [ -d "node_modules" ]; then
	NODE_MODULES_BACKUP=$(mktemp -d)
	mv node_modules "$NODE_MODULES_BACKUP/"
fi

# Switch to deploy branch (create as orphan if it doesn't exist)
if git show-ref --verify --quiet "refs/heads/$DEPLOY_BRANCH"; then
	git checkout "$DEPLOY_BRANCH"
else
	git checkout --orphan "$DEPLOY_BRANCH"
	git rm -rf . 2>/dev/null || true
fi

# Replace all files with build output
git rm -rf . 2>/dev/null || true
cp -r "$DEPLOY_DIR/." .
rm -rf "$DEPLOY_DIR"

# Commit and push
git add -A
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: $TIMESTAMP" --allow-empty
git push origin "$DEPLOY_BRANCH" --force

echo "Pushed to '$DEPLOY_BRANCH' branch."

# Switch back to source branch and restore node_modules
git checkout "$SOURCE_BRANCH"
if [ -n "$NODE_MODULES_BACKUP" ]; then
	mv "$NODE_MODULES_BACKUP/node_modules" .
	rmdir "$NODE_MODULES_BACKUP"
fi

echo ""
echo "Deploy complete. Go to Cloudways → Deployment via Git → Pull"
echo "to pull the latest files onto the server."
