// const BASE_ENDPOINT = `http://vulcan.cs.uga.edu:8080/prokinosrv/rest`;
//If cors error, a workaround is to add this prefix to the url: https://cors-anywhere.herokuapp.com/
const BASE_ENDPOINT = `http://vulcan.cs.uga.edu/prokinosrv`; //`http://vulcan.cs.uga.edu:8080/prokinosrv/rest` 
const PROTEIN_ENDPOINT = `${BASE_ENDPOINT}/protein`;
const ENTITY_ENDPOINT = `${BASE_ENDPOINT}/entity`;
const CLASSIFICATION_ENDPOINT = `${BASE_ENDPOINT}/classification`;
const SPARQL_ENDPOINT = `${BASE_ENDPOINT}/sparql`
const SPARQL_CATEGORIES =`${BASE_ENDPOINT}/squerycategory`
const SPARQL_SAMPLEQUERIES =`${BASE_ENDPOINT}/squery`
const ORGANISM_ENDPOINT =`${BASE_ENDPOINT}/entity?rdfs:type=prokino:Organism`
const FUNCDOMAINS_ENDPOINT =`${BASE_ENDPOINT}/entity?rdfs:type=prokino:FunctionalDomain`
const DISEASES_ENDPOINT =`${BASE_ENDPOINT}/entity?rdfs:type=prokino:Cancer`

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
        SPARQL_ENDPOINT,
        PDB_BESTSTRUCTURE_ENDPOINT,
        SPARQL_CATEGORIES,
        SPARQL_SAMPLEQUERIES,
        ORGANISM_ENDPOINT,
        FUNCDOMAINS_ENDPOINT,
        DISEASES_ENDPOINT
}

