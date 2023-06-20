# Deployment steps

do the build build (dev branch)
`yarn build`
then:
`git llg`
and include new features in commit message

push the `dist/` as a single commit

save the commit sha and checkout master

in master:
cherry-pick, cleanup and deploy

```SHELL
getLastestGitSha="git rev-parse HEAD"
git cherry-pick -x fea914cc6f66861af7ef04ae8aaa28793572be35

rm -rf *.jpg
rm -rf main*
mv dist/* .
rm -rf dist

acp 'build and features'
```

next build is nr 16
push from master -> deployed
