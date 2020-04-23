#!/bin/bash

getLastestGitSha="git rev-parse HEAD"
git cherry-pick -x $getLastestGitSha

rm -rf *.jpg
rm -rf main*
mv dist/* .
rm -rf dist

acp 'build "${getLastestGitSha}"'
