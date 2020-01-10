since master's is gonnna be empty this is currently the best way:

if there is a dist folder run `cleanup-before-deploy.sh` script

then:

do the build in `dev` or other branch. `yarn build`

(then git llg and do a new build with features:)

push the dist as a single commit

save the sha and checkout master

from master do a cherrypick:
`git cherry-pick -x d582c866404c7a94c19c09efe1e902e817928def`

push from master -> deployed
