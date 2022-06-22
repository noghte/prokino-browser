
# Protein Kinase Ontology (ProKinO)'s browser
This repo contains the `dev` version (untested and not stable) of the ProKinO browser's front-end source code ([view online](https://prokino.netlify.app)). The University of Georgia hosts the main version at [https://prokino.uga.edu](https://prokino.uga.edu).

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ed4e343-59b9-48c1-b04e-63fac84f8c57/deploy-status)](https://app.netlify.com/sites/prokino/deploys)

#### Ontology

The Protein Kinase Ontology (ProKinO), is a protein kinase-specific ontology, which provides a controlled vocabulary of terms, their hierarchy, and relationships unifying sequence, structure, function, mutation and pathway information on kinases. The conceptual representation of such diverse information in one place enables not only rapid discovery of significant information related to a specific protein kinase, but also enables large scale integrative analysis of the protein kinase family.

*Available to download from: https://prokino.uga.edu/downloads*

## Run & Publish

- Prerequisites:
    - node version `14.17.6`
    - `sudo npm install -g gatsby netlify-cli`

### Running on Local Machine

1. Go to the project directory and run: `npm install`
1. `npm run develop`

NOTE: If there was an error, you can hard reset by running `rm -rf node_modules`.

### Preparing a version to upload on prokino.uga.edu

Run `local-pulish.sh` to produce `new-public.zip`:
    - `./local-pulish.sh`

You can extract the zip file on the server's website directory.


### Publishing on Netlify

- Prerequisites:
    - On netlify.com, create a new website. 
    - When asked for GitHub address, set it to the https://github.com/prokino/nb-gatsby
    - Set Build command to: `gatsby build`
    - Set Publish directory to: `public/`
    - Set the following Environment variables:
        - HOST_NAME=netlify
        - NODE_ENV=production
        - NODE_OPTIONS=--max_old_space_size= 4096
    - Follow instructions to enable netlify cli from the [official documentation ](https://docs.netlify.com/cli/get-started/#authentication)

- Steps
    - `./local-pulish.sh`,
    - `./netlify-publish.sh`

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

### Licence
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.