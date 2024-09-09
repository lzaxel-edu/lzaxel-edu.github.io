#!/usr/bin/env sh

set -e

pnpm i
pnpm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push git@github.com:lzaxel-edu/lzaxel-edu.github.io.git master
cd -