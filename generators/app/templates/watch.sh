#!/bin/sh
echo $1
if [ "$1" = "js" ]
then
    nodemon --exec "make js && node bin/program.js" -e "c h"
else
    nodemon --exec "make && ./bin/program" -e "c h"
fi
