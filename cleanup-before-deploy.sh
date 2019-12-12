#!/usr/bin/env bash
DIR="./dist"

echo 'when this runs be SURE that your in the root of project...'
echo 'u got 2 secs to abort'
sleep 2

if [ -d "$DIR" ]; then
    echo 'removing images'
    rm -rf *.jpg

    echo 'js scripts and runtime stuff'
    rm -rf runtime\~main.*
    rm -rf main.*

    echo 'moving on up, to the eastside this will overwrite manifest.json and index.html'
    mv dist/* .

    echo 'u all good'
else
    echo "Error: ${DIR} not found. Can not continue."
    exit 1
fi
