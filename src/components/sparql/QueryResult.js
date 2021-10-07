import React from 'react';
import { useState,useEffect } from 'react';
import QueryResultTable from './QueryResultTable';
import QueryResultBarChart from './QueryResultBarChart';
import QueryResultPieChart from './QueryResultPieChart';
import axios from 'axios';
import { SPARQL_ENDPOINT } from '../prokino/Endpoints';
import {TABLE, BARCHART, PIECHART} from './Constants';

function cleanQuery(query)
{
  return query;
}

export default function QueryResult(props) {
    
    const query = cleanQuery(props.query);
    console.log(query);
    const chartType = props.chartType;
    const [error,setError] = useState(null);
    const [data,setData] = useState(null);
    
    useEffect(() => {
      let url = `${SPARQL_ENDPOINT}?query=${encodeURIComponent(query)}&output=json`;
  
      const res = async () => {
        try {
          const result = await axios.get(url);
          setData(result.data);
          console.log("search results", result.data);
        } catch (error) {
          setError("Failed to execute query...")
          console.log("error=",error)
        }
      };
    //  if (props.triggerSearch)
        res();
    }, []);


    if (error) {
        return <span>{error}</span>
    }
    if (!data) {
        return <span>Loading...</span>
    }
    let renderedChart = null;
    switch (chartType)
    {
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
          !renderedChart? <b>No Result</b>:
          renderedChart
        }
      </>
    );
    
  }