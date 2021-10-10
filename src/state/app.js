
import { types } from "../actions/types";

const initialState = {
  isDarkMode: false,
  sparqlResult: null,
};

const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
const SPARQL_RESULT = 'SPARQL_RESULT';

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE, isDarkMode
});

export const setSparqlResult = result => ({
  type: SPARQL_RESULT, result
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode };
    case SPARQL_RESULT:
      return { ...state, sparqlResult: action.result };
    default:
      return state;
  }
};