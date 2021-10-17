#!/bin/bash
USER_NAME=saber
SERVER_ADDRESS=vulcan.cs.uga.edu
rm nb-public.zip
rm -rf public
gatsby build --prefix-paths
zip -r nb-public.zip public/* -x public/cif/\*
scp nb-public.zip  $USER_NAME@$SERVER_ADDRESS:~/
echo Done! Now, SSH and run the update script.
ssh $USER_NAME@$SERVER_ADDRESS