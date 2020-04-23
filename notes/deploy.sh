#!/bin/bash

getLastestGitSha="git rev-parse HEAD"
git cherry-pick -x $getLastestGitSha

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
