
import { types } from "../actions/types";

const initialState = {
  isDarkMode: false,
  sparqlResult: null,
  chartProperties: null,
};

// const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
// const SPARQL_RESULT = 'SPARQL_RESULT';
// const CHART_SELECTED_LABEL_COLUMN = ''
// const CHART_SELECTED_VALUE_COLUMN =''

export const toggleDarkMode = isDarkMode => ({
  type: 'TOGGLE_DARKMODE', isDarkMode
});

export const setSparqlResult = val => ({
  type: 'SPARQL_RESULT', val
});

export const setChartProperties = val => ({
  type: 'CHART_PROPERTIES', val
});


export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return { ...state, isDarkMode: action.isDarkMode };
    case 'SPARQL_RESULT':
      return { ...state, sparqlResult: action.val };
    case 'CHART_PROPERTIES':
      return { ...state, chartProperties: action.val };
    default:
      return state;
  }
};