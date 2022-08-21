#!/bin/bash

# IMPORTANT: Make sure you are using the latest version of nodejs 14 which is v14.17.6.
## Constants
USER_NAME= #username on vul...
SERVER_ADDRESS= #vul...
OUT_ZIP_FILE=nb-public.zip
INCLUDE_CIF_FILES=false

rm $OUT_ZIP_FILE # old publish zip file

gatsby build --log-pages # If in a subdirectory, then add --prefix-paths

if [ "$INCLUDE_CIF_FILES" = true ] ; then
    echo 'With CIF files'
    zip -r $OUT_ZIP_FILE public/*
else
    echo 'No CIF files'
    zip -r $OUT_ZIP_FILE public/* -x public/cif/\*
fi

scp $OUT_ZIP_FILE $USER_NAME@$SERVER_ADDRESS:~/
echo Done! Now, SSH and run the update script.
ssh $USER_NAME@$SERVER_ADDRESS