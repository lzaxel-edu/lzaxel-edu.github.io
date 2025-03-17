#!/usr/bin/env sh

set -e

pnpm i
rm -rf dist/
pnpm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lzaxel-edu/lzaxel-edu.github.io.git master
cd -