import React from 'react';
//import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import LinkList from '../LinkList';

//const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function GenericList({protein,entityClass,apiClassName,seperator=<br />}) {
 
    let url = `http://gumbo.cs.uga.edu:8080/prokinosrv/rest/protein/${protein}/${apiClassName}`;
    axios.get(url)
  .then(function (data) {
    // handle success
    return (
        <LinkList values={data.hits} entityClass={entityClass} seperator={seperator} />
    );
  })
  .catch(function (error) {
    // handle error
    return <span>Failed to load</span>
  })
  .then(function () {
    // always executed
    return <span>Loading...</span>
  });

    // const { data, error } = useSWR(url, fetcher);
    // if (error) {
        
    // }
    // if (!data) {
        
    // }   
    
    // setResults(data);
    
    
  }