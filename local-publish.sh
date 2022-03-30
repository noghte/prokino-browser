rm new-public.zip
echo "Old zip file removed"
cd public
zip -r ../new-public.zip * -x cif/\*
cd ..
echo "The new-public.zip, excluding the cif directory, has been created."