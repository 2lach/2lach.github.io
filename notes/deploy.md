since master's is gonnna be empty this is currently the best way:

do the build in `dev` or other branch.

push the dist as a single commit

save the sha and checkout master

from master do a cherrypick:
`git cherry-pick -x a561480a81b83f2b8e6dcb8dae2e2bbc021cc72d`

push from master -> deployed