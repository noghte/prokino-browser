
import OneClassSearchResult from './OneClassSearchResult';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {CLASSIFICATION_ENDPOINT} from '../prokino/Endpoints'
const url = `${CLASSIFICATION_ENDPOINT}/kinase`;

export default function OneClass() {
  const [kinase, setKinase] = useState(null);
  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    axios.get(url)
      .then(function (response) {
        // handle success
        setKinase(response.data);

      })
      .catch(function (error) {
        // handle error
        return <span>Failed to load</span>
      });
  }

  return (
    kinase? <OneClassSearchResult data={kinase} />: <span>Loading...</span>
   
  );
}