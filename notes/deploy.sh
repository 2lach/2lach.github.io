#!/bin/bash

getLastestGitSha="git rev-parse HEAD"
git cherry-pick -x $getLastestGitSha

<<<<<<< HEAD
=======
# verify that bun exists
command -v bun >/dev/null 2>&1 || { echo >&2 "bun is not installed. Aborting."; exit 1; }

echo "Start from the development branch"
echo ""
git checkout development
echo ""
echo "then we do a new build"
echo ""
bun build
echo "the latest build was:"
# build script will exit if there are no log entries named " build"
git log | grep "build" | head -n 2
echo ""
echo "enter the current build nr:"
read -r buildNR
echo "removing previous build"
rm -rf build-*
mv build build-"$buildNR"
mv public build-"$buildNR"
git add .
git commit -m "build $buildNR"
git push

echo "get git sha for latest deployment"
gitSHA=$(git rev-parse HEAD)
git checkout master
git cherry-pick -x "$gitSHA"

# remove old assets
>>>>>>> 411393423b1d (Build 43)
rm -rf *.jpg
rm -rf main*
mv dist/* .
rm -rf dist

acp 'build "${getLastestGitSha}"'

git rev-parse HEAD development

g cherry-pick -x ea89fa247ac3aa26908a36bb7247f33b64cea5a3

git cherry-pick --continue

rm -rf *.jpg

rm -rf main*

mv dist/* .

l build-10

mv build-10/* .

ls

cd build-10

l static

mv static/* ../static

..

trash static

mv build-10/static .
