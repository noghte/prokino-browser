import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card, Button, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody,
  } from 'reactstrap';
import Layout from '../../Layout';


const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function QueryCards({categories,index,onSelect}) {
 

    const [error,setError] = useState(null);
    const [data,setData] = useState(null);
    useEffect(() => {
      let url = `example_queries.json`;
  
      const res = async () => {
        try {
          const result = await axios.get(url);
          setData(result.data);
        
        } catch (error) {
          setError("Failed to load example queries...")
          console.log("error=",error)
        }
      };
    //  if (props.triggerSearch)
        res();
    }, []);
      
    //index==0 means all categories
    let queryList = index ===0 ? data:data.filter(q=>q.category ===index);
    // setResults(data);
    const viewQuery = (q) => {
      console.log(q);
      onSelect(q);
    }
    if (error)
      return <Layout><p>{error}</p></Layout>;
    if (!data)
      return <Layout><p>Loading example queries ...</p></Layout>;

    return (
        <CardColumns>
        {
         queryList.map(function(q,index)
         {
         const card = <Card key={index} style={{ padding: 2, margin: 10, border: 0, borderRadius: '.25rem', boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)' }}>
             <CardBody>
         <CardTitle style={{ fontStretch: 'semi-expanded', fontWeight: 'bold' }}>{q.title}</CardTitle>
         <CardSubtitle style={{ fontStyle: 'italic' }}>{categories.filter(c=>c.id === q.category)[0].title}</CardSubtitle>
               <hr />
               <CardText style={{ borderTop: '1px' }}>
                   {q.description}
                   </CardText>
               <Button color="primary" size="sm" onClick={()=>viewQuery(q.query)}>View</Button>
             </CardBody>
           </Card>
           return card;
         })
        }
   
         </CardColumns>
    );
    
  }


  