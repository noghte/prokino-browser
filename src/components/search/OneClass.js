
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

  // const instance = axios.create({
  //   baseURL: `http://vulcan.cs.uga.edu/prokinosrv/classification`,
  //   withCredentials: false,

  //   headers: {
  //     'Access-Control-Allow-Origin' : '*',
  //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //     }
  // });



  // axios.get(`${CLASSIFICATION_ENDPOINT}/kinase`)
  // // axios.get('http://vulcan.cs.uga.edu/prokinosrv/sequence/prokino:Human_EGFR')
  //      .then(function (result) {
  //        console.log("oook")
  //        // handle success
  //        setKinase(result.data);
     
  //      })
  //      .catch(function (error) {
  //        // handle error
  //        console.error("error",error);
  //      });

  return (
    kinase ? <OneClassSearchResult data={kinase} /> : <span>Loading...</span>

  );
}