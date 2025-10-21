#!/bin/bash

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg needed and it was not found, execution aborted";
  exit 1;
fi

for i in `seq 1 2`;
do
  if [ $i = 1 ]; then
    cd static/sounds/bass;
  else
    cd ../guitar;
  fi

  currentfolder=${PWD##*/};
  echo "converting $currentfolder samples...";

  for filename in *.mp3;
  do
      if test -f "$filename"
      then
        newfilename="${filename%.*}.ogg";
        echo "$filename -> $newfilename";
        ffmpeg -y -i $filename -c:a libopus -b:a 64k -ac 2 $newfilename -hide_banner -loglevel error;
      fi
  done
done