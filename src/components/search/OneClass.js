
import OneClassSearchResult from './OneClassSearchResult';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CLASSIFICATION_ENDPOINT } from '../prokino/Endpoints'

export default function OneClass() {
  const [kinase, setKinase] = useState(null);


  useEffect(() => {
    const res = async () => {
      const url = `${CLASSIFICATION_ENDPOINT}/kinase`;
      const result = await axios.get(url);
      setKinase(result.data);

    }
    res();
  }
    , []);


  return (
    kinase ? <OneClassSearchResult data={kinase} /> : <span>Loading...</span>

  );
}