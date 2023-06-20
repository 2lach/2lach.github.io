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

 g cm 'update cache policy and serve images in defined size'

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