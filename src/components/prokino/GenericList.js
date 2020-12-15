import React from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import LinkList from '../LinkList';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function GenericList({protein,entityClass,apiClassName,seperator=<br />}) {
 
    let url = `http://gumbo.cs.uga.edu:8080/prokinosrv/rest/protein/${protein}/${apiClassName}`;
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <span>Failed to load</span>
    }
    if (!data) {
        return <span>Loading...</span>
    }   
    
    // setResults(data);
    return (
        <LinkList values={data.hits} entityClass={entityClass} seperator={seperator} />
    );
    
  }