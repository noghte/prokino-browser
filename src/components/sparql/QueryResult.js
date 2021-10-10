import React from 'react';
import { useState, useEffect } from 'react';
import QueryResultTable from './QueryResultTable';
import QueryResultBarChart from './QueryResultBarChart';
import QueryResultPieChart from './QueryResultPieChart';
import axios from 'axios';
import { SPARQL_ENDPOINT } from '../prokino/Endpoints';
import { TABLE, BARCHART, PIECHART } from './Constants';
import { connect } from "react-redux"
import { setSparqlResult, sparqlResult } from '../../state/app';

function cleanQuery(query) {
  return query;
}

function QueryResult(props) {

  const query = cleanQuery(props.query);
  const chartType = props.chartType;
  const [error, setError] = useState(null);
  //const [data,setData] = useState(null);
  //props.dispatch(setSparqlResult(null)); //clearing the current redux state (to not show the old query execution result)
  console.log("cleared")
  // useEffect(() => {
  //   let url = `${SPARQL_ENDPOINT}?query=${encodeURIComponent(query)}&output=json`;

  //   const res = async () => {
  //     try {
  //       const result = await axios.get(url);
  //       // setData(result.data);
  //       props.dispatch(setSparqlResult(result.data));
  //       console.log("search results", result.data);
  //     } catch (error) {
  //       setError("Failed to execute query...")
  //       console.error("error=",error)
  //     }
  //   };
  // //  if (props.triggerSearch)
  //     res();
  // }, []);

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
      }
    };
    //  if (props.triggerSearch)
    res();
    console.log("setQuery called")
  }, [query]);
  if (error) {
    return <span>{error}</span>
  }

  if (!props.sparqlResult)
    return <span>Loading...</span>

  let data = props.sparqlResult; //from redux
  let renderedChart = null;
  switch (chartType) {
    case TABLE:
      renderedChart = <QueryResultTable data={data} />
      break;
    case BARCHART:
      renderedChart = <QueryResultBarChart data={data} />
      break;
    case PIECHART:
      renderedChart = <QueryResultPieChart data={data} />
      break;
  }
  return (
    <>
      {
        !renderedChart ? <b>No Result</b> :
          renderedChart
      }
    </>
  );

}

export default connect(state => ({
  sparqlResult: state.app.sparqlResult
}), null)(QueryResult);