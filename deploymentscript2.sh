#!/bin/bash

 # step (y/n)
 yarn build
 # step (y/n)
 ls -la public
 # step (y/n)
 rm -rf deployment-33
 # step (y/n)
 rm -rf dist
 # step (y/n)
 ls
 # step (y/n)
 mkdir deployment-35
 # step (y/n)
 cp -rv public build deployment-35 
 # step (y/n)
 g s
 # step (y/n)
 g a
 # step (y/n)
 g s
 # step (y/n)
 g cm 'deployment 35'
 # step (y/n)
 gp
 # step (y/n)
 g llg
 # step (y/n)
 g co master
 # step (y/n)
 g co .
 # step (y/n)
 g reset HEAD
 # step (y/n)
 g a
 # step (y/n)
 g cm 'old build'
 # step (y/n)
 g s
 # step (y/n)
 g cherry-pick -x c9884c91424b0ddc307d4d6b64b05e55238c1d60
 # step (y/n)
 g a
 # step (y/n)
 mv deployment-35/public/* .
 # step (y/n)
 mv static _static
 # step (y/n)
# mv deployment-35/build/android-chrome-192x192.png
 # step (y/n)
 mv deployment-35/build/* .
 # step (y/n)
 rm deployment-35
 # step (y/n)
 g s
 # step (y/n)
 g a
 # step (y/n)
 g reset _static
 # step (y/n)
 g s
 # step (y/n)
 echo 'LATEST BUILDNR: 35' > version.txt
 # step (y/n)
 g s
 # step (y/n)
 git cherry-pick --continue 
 # step (y/n)
 g s
 # step (y/n)
 g a
 # step (y/n)
 g reset _static
 # step (y/n)
 g s
 # step (y/n)
 g cm 'version update'
 # step (y/n)
 g log
 # step (y/n)
 gs
 # step (y/n)
 gp
 # step (y/n)
 g s
 
 g co master
