#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Building…"
npm run build

if ! command -v git &>/dev/null; then
  echo "Install git first."
  exit 1
fi

if [[ ! -d .git ]]; then
  echo "→ Initializing git…"
  git init
  git branch -M main
fi

if ! git rev-parse HEAD &>/dev/null 2>&1 || [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "TopSpeech daily lesson PWA prototype" || true
fi

GITHUB_USER="${GITHUB_USER:-lktyagi07}"
REPO_NAME="${1:-topspeech-daily-lesson}"

if command -v gh &>/dev/null && gh auth status &>/dev/null; then
  echo "→ Creating GitHub repo and pushing…"
  if ! git remote get-url origin &>/dev/null; then
    gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
  else
    git push -u origin main
  fi
  echo "GitHub: $(gh repo view --json url -q .url)"
else
  echo ""
  echo "GitHub CLI not logged in. Create a repo manually, then:"
  echo "  git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git"
  echo "  git push -u origin main"
  echo ""
fi

echo "→ Deploying to Vercel…"
if command -v vercel &>/dev/null; then
  vercel --prod
else
  npx vercel@latest --prod
fi

echo ""
echo "Done. Paste your Vercel URL + GitHub repo in your submission."
