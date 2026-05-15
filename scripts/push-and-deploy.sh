#!/usr/bin/env bash
# Run this once in Terminal.app (not Cursor sandbox):
#   cd /Users/lktyagi/Project/topspeech-daily-lesson && chmod +x scripts/push-and-deploy.sh && ./scripts/push-and-deploy.sh

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

GITHUB_USER="lktyagi07"
REPO="topspeech-daily-lesson"
GIT_DIR="$HOME/.topspeech-lesson-git"

export GIT_DIR="$GIT_DIR"
export GIT_WORK_TREE="$ROOT"

# Link local .git if missing (optional convenience)
if [[ ! -d "$ROOT/.git" ]]; then
  echo "→ Linking git dir to $GIT_DIR"
  echo "gitdir: $GIT_DIR" > "$ROOT/.git"
fi

if ! git rev-parse HEAD &>/dev/null; then
  git init -b main
  git add -A
  git -c user.email="${GITHUB_USER}@users.noreply.github.com" -c user.name="$GITHUB_USER" \
    commit -m "TopSpeech daily lesson PWA prototype"
fi

echo "→ Building…"
npm run build

GH_BIN=""
for p in /opt/homebrew/bin/gh /usr/local/bin/gh "$HOME/.local/bin/gh" /tmp/gh_2.67.0_macOS_arm64/bin/gh; do
  [[ -x "$p" ]] && GH_BIN="$p" && break
done

if [[ -n "$GH_BIN" ]] && $GH_BIN auth status &>/dev/null; then
  if ! git remote get-url origin &>/dev/null; then
    $GH_BIN repo create "$REPO" --public --description "TopSpeech Health daily lesson PWA" --source=. --remote=origin
  fi
  git push -u origin main
else
  if ! git remote get-url origin &>/dev/null; then
    git remote add origin "https://github.com/${GITHUB_USER}/${REPO}.git"
  fi
  echo "→ Create https://github.com/new?name=${REPO} if needed, then pushing…"
  git push -u origin main
fi

echo "✓ GitHub: https://github.com/${GITHUB_USER}/${REPO}"

echo "→ Deploying to Vercel…"
if command -v vercel &>/dev/null; then
  vercel --prod --yes
else
  npx vercel@latest --prod --yes
fi

echo ""
echo "Done. Submit:"
echo "  Repo:  https://github.com/${GITHUB_USER}/${REPO}"
echo "  Live:  (see Vercel output above)"
