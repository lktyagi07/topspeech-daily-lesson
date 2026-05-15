#!/usr/bin/env bash
# Build, push to GitHub, and deploy to Vercel (same as deploy.sh).
exec "$(cd "$(dirname "$0")" && pwd)/deploy.sh" "$@"
