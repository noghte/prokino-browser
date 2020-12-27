import React, { useEffect,useState } from 'react';
//import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import LinkList from '../LinkList';
import {PROTEIN_ENDPOINT} from '../prokino/Endpoints';


//const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function GenericList({protein,entityClass,apiClassName,seperator=<br />}) {
 const [prokinoData, setProkinoData] = useState(null);

  useEffect(()=>
  {
    const res = async () => {
      let url = `${PROTEIN_ENDPOINT}/${protein}/${apiClassName}`;
      const result = await axios.get(url);
      setProkinoData(result.data);

        }
    res();
  }
  ,[]);
   
    if (!prokinoData)
      return <p>Loading ...</p>
    
    return <LinkList values={prokinoData.hits} entityClass={entityClass} seperator={seperator} />;
    
  }


    
