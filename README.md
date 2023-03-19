
# Protein Kinase Ontology (ProKinO)'s browser
This repo contains the `dev` version (untested and not stable) of the ProKinO browser's front-end source code ([view online](https://prokino.netlify.app)). The University of Georgia hosts the main version at [https://prokino.uga.edu](https://prokino.uga.edu).

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ed4e343-59b9-48c1-b04e-63fac84f8c57/deploy-status)](https://app.netlify.com/sites/prokino/deploys)

#### Ontology

The Protein Kinase Ontology (ProKinO), is a protein kinase-specific ontology, which provides a controlled vocabulary of terms, their hierarchy, and relationships unifying sequence, structure, function, mutation and pathway information on kinases. The conceptual representation of such diverse information in one place enables not only rapid discovery of significant information related to a specific protein kinase, but also enables large scale integrative analysis of the protein kinase family.

*Available to download from: https://prokino.uga.edu/downloads*

## Run & Publish

- Prerequisites:
    - node version `18.12.1`
    - `sudo npm install -g gatsby netlify-cli`
### Running on Local Machine

1. Go to the project directory and run: `npm install`
    1. To install legacy peer dependencies, run: `npm config set legacy-peer-deps true`
    1. `npm install react-html-parser @material-ui/core@4.12.4 --legacy-peer-deps`
1. `npm run develop`

NOTE: If there was an error, you can hard reset by deleting the `node_modules` directory and running the above commands again.
    - `rm -rf node_modules`.

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

## Development

### Maintaining the code

The code is written in React.js and Gatsby.js. It uses npm as a package manager. The version numbers of the packages are specified in the `package.json` file. Each package has its own version number as `x.y.z` where `x` is the major version, `y` is the minor version, and `z` is the patch version.

To update npm packages, it is suggested to follow the steps below:

1. Install the npm-check-update package:  `npm install -g npm-check-updates`
1. Run `ncu -u -t patch` to update the packages to the latest patch version.
1. If still needed, run `ncu -u -t minor` to update the packages to the latest minor version.
1. If still needed, run `ncu -u -t major` to update the packages to the latest major version.
1. If still needed, run `ncu -u` to update the packages to the latest version, then run `npm install`.

**NOTES:** 
1. Updating packages to the latest version may cause errors.
2. After each of the steps above, run `npm install` to install the updated packages.
3. If there is an error, you can hard reset by running:
    - `rm -rf node_modules`.
    - `npm install react-html-parser @material-ui/core@4.12.4 --legacy-peer-deps`

## Licence
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.