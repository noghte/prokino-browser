import React from 'react';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import QueryResultTable from './QueryResultTable';
import QueryResultBarChart from './QueryResultBarChart';
import QueryResultPieChart from './QueryResultPieChart';
import axios from 'axios';
import { SPARQL_ENDPOINT } from '../prokino/Endpoints';
import { TABLE, BARCHART, PIECHART } from './Constants';
import { setSparqlResult, chartProperties, setChartProperties } from '../../state/app';
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';


function cleanQuery(query) {
  return query;
}

function QueryResult(props) {
  const query = cleanQuery(props.query);
  const chartType = props.chartType;
  const [error, setError] = useState(null);
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    let url = `${SPARQL_ENDPOINT}?query=${encodeURIComponent(query)}&output=json`;
    const res = async () => {
      try {
        axios.get(url)
          .then((result) => {

            // setData(result.data);
            props.dispatch(setSparqlResult(result.data));
            console.log("query results", result.data);
          });

      } catch (error) {
        setError("Failed to execute query...")
        console.error("error=", error)
        return <span>{error}</span>
      }
    };
    //  if (props.triggerSearch)
    res();
    console.log("setQuery called")
  }, [query]);


  useEffect(() => {
    if (!props.sparqlResult)
      setChartProperties(null)
    else {
      let valCols = [];
      let labelCols = [];
      // Getting data types for labels and columns from the first row
      if (props.sparqlResult.results.bindings.length > 0) {
        const firstRow = props.sparqlResult.results.bindings[0];
        Object.entries(firstRow).forEach(([key, value]) => {
          if (value.datatype === 'http://www.w3.org/2001/XMLSchema#integer'
            || value.datatype === 'http://www.w3.org/2001/XMLSchema#float')
            valCols.push(key);
          else if (value.type === 'literal')
            labelCols.push(key);
        });

      }
      console.log("valcols", valCols);
      console.log("labelcols", labelCols)

      if (valCols.length > 0 && labelCols.length > 0) {
        const chartProperties = {
          "labelColumns": labelCols,
          "valueColumns": valCols,
          "selectedLabel": labelCols[0], //initil value
          "selectedValue": valCols[0], //initil value
        }
        props.dispatch(setChartProperties(chartProperties));
        // props.dispatch(setLabelColumns(labelCols));
        // props.dispatch(setValueColumns(valCols));
        // props.dispatch(setSelectedLabelColumn(labelCols[0])); //initil value
        // props.dispatch(setSelectedValueColumn(valCols[0])); //initial value
      }
      else
        props.dispatch(setChartProperties(null));

      setShouldRender(true);
    }
  }, [props.sparqlResult, chartType])


  if (!props.sparqlResult || !shouldRender)
    return <Skeleton count={10} height={20} tyle={{ borderRadius: 5 }} />

  if (chartType !== 'Table') {
    if (!props.chartProperties || !props.chartProperties.selectedValue) {
      toast(`The query does not contain data compatible with a ${chartType}.`, { type: toast.TYPE.ERROR, position: toast.POSITION.TOP_CENTER, autoClose: 5000 });
      return <div>
        <ToastContainer newestOnTop closeOnClick />
      </div>
    }
  }

  let renderedChart = null;
  switch (chartType) {
    case TABLE:
      renderedChart = <QueryResultTable data={props.sparqlResult.results} />
      break;
    case BARCHART:
      renderedChart = <QueryResultBarChart
        data={props.sparqlResult.results}
        chartProperties={props.chartProperties} 
        maxItems={props.maxItems}
        />
      break;
    case PIECHART:
      renderedChart = <QueryResultPieChart
        data={props.sparqlResult.results}
        chartProperties={props.chartProperties}
        maxItems={props.maxItems}
      />
      break;
  }
  return (
    <>
      {
        // !renderedChart ? <b>No Result</b> :
          renderedChart ?? <b>No Result</b>
      }
    </>
  );

}

export default connect(state => ({
  sparqlResult: state.app.sparqlResult,
  chartProperties: state.app.chartProperties,
}), null)(QueryResult);