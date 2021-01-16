const BASE_ENDPOINT = `http://vulcan.cs.uga.edu:8080/prokinosrv/rest`; //TODO: fix cors / workaround prefix: https://cors-anywhere.herokuapp.com/
//const BASE_ENDPOINT = ` http://vulcan.cs.uga.edu/prokinosrv`; //TODO: fix cors / workaround prefix: https://cors-anywhere.herokuapp.com/
const PROTEIN_ENDPOINT = `${BASE_ENDPOINT}/protein`;
const ENTITY_ENDPOINT = `${BASE_ENDPOINT}/entity`;
const CLASSIFICATION_ENDPOINT = `${BASE_ENDPOINT}/classification`;
const SPROXY_ENDPOINT = `${BASE_ENDPOINT}/sproxy`

// NOTE: to make sure there is a tailing slash at the end of the url,
//       you may use url.replace(/\/?$/, '/') when consuming endpoint
export {
        BASE_ENDPOINT, 
        PROTEIN_ENDPOINT, 
        ENTITY_ENDPOINT, 
        CLASSIFICATION_ENDPOINT,
        SPROXY_ENDPOINT
}

