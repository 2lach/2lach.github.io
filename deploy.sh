#!/bin/bash


# set -x # debug script
set -e # exit on error

# verify that yarn exists
command -v yarn >/dev/null 2>&1 || { echo >&2 "Yarn is not installed. Aborting."; exit 1; }

echo "Start from the development branch"
echo ""
git checkout development
echo ""
echo "then we do a new build"
echo ""
yarn build
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
rm -rfv *.jpg
rm -rfv static
mv build-"$buildNR"/* .

git add .
git status
sleep 3

echo "Does it look good? (y/n)"
read -r response

if [[ $response == "y" || $response == "yes" ]]; then
  echo "Continuing..."
  git commit -m "deploying $buildNR"
  git push
else
  echo "Exiting."
  exit 0
fi
