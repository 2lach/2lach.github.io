#
g co development

 g co .

 g co development

 yarn build

 yarn start

 yarn build

 yarn start

 g s

 g a
<<<<<<< HEAD
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
||||||| parent of 106cc94 (38)
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
 mv deployment-35/build/android-chrome-192x192.png
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
=======

 g cm 'update cache policy and serve images in defined size'

>>>>>>> 106cc94 (38)
 gp

 yarn build

 ls

 ls -la public

 mkdir deployment-37

 cp -rv public build deployment-37

 g s

 g a

 echo 'LATEST BUILDNR: 37' > version.txt

 g a

 g cm 'deployment 37'

 gp

 g ll

 g llg

 g s

 g co master

 g s

 g a

 g cm 'add build'

 g cherry-pick -x 48ecea2533b2ea31185f39c2f8a30f4a8f869dda

 g s

 mv deployment-36/build/* .

 mv deployment-37/build/* .

 mv static _static

 mv deployment-37/build/* .

 rd deployment-37/build

 mv deployment-37/public/* .

 g s

 g a

 g cm 'deployment 37'

 gp
 g s