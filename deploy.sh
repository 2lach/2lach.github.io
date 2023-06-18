#!/bin/bash

set -x # Enable debug mode
set -e # Exit on error

# Verify that yarn exists
if ! command -v yarn >/dev/null 2>&1; then
  echo >&2 "Yarn is not installed. Aborting."
  exit 1
fi

echo "Start from the development branch"
echo ""
git checkout development
echo ""
echo "Then we do a new build"
echo ""
yarn build
echo "The latest build was:"
# Build script will exit if there are no log entries named "build"
git log --grep="build" -n 2
echo ""
echo "Enter the current build number:"
read -r buildNR
echo "Removing previous build"
rm -rf build-*
mv build build-"$buildNR"
mv public build-"$buildNR"
git add .
git commit -m "Build $buildNR"
git push

echo "Get git SHA for the latest deployment"
gitSHA=$(git rev-parse HEAD)
git checkout master
# Remove old assets
rm -rfv *.jpg
rm -rfv static
# Get new stuff
git cherry-pick -x "$gitSHA"
# Add new stuff
mv build-"$buildNR"/* .

# Remove the directory only if it's empty
rmdir build-"$buildNR" 2>/dev/null || true

git add .
git status
sleep 3

echo "Does it look good? (y/n)"
read -r response

if [[ $response == "y" || $response == "yes" ]]; then
  echo "Continuing..."
  git commit -m "Deploying $buildNR"
  git push
else
  echo "Exiting."
  exit 0
fi
