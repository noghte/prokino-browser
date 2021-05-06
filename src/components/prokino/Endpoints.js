// const BASE_ENDPOINT = `http://vulcan.cs.uga.edu:8080/prokinosrv/rest`;
const BASE_ENDPOINT = `https://vulcan.cs.uga.edu/prokinosrv`; //If cors error, a workaround is to add this prefix to the url: https://cors-anywhere.herokuapp.com/
const PROTEIN_ENDPOINT = `${BASE_ENDPOINT}/protein`;
const ENTITY_ENDPOINT = `${BASE_ENDPOINT}/entity`;
const CLASSIFICATION_ENDPOINT = `${BASE_ENDPOINT}/classification`;
const SPROXY_ENDPOINT = `${BASE_ENDPOINT}/sproxy`
const PDB_BESTSTRUCTURE_ENDPOINT="https://www.ebi.ac.uk/pdbe/graph-api/mappings/best_structures"
//for annotation viewer:
//const PDB_STRUCTURE = `https://www${this.appUrlEnv}.ebi.ac.uk/pdbe/graph-api/uniprot/protvista/unipdb/${this.accession}`


// NOTE: to make sure there is a tailing slash at the end of the url,
//       you may use url.replace(/\/?$/, '/') when consuming endpoint
export {
        BASE_ENDPOINT, 
        PROTEIN_ENDPOINT, 
        ENTITY_ENDPOINT, 
        CLASSIFICATION_ENDPOINT,
        SPROXY_ENDPOINT,
        PDB_BESTSTRUCTURE_ENDPOINT
}

