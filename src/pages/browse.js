import React from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import ProteinItem from '../components/prokino/ProteinItem';
import GenericItem from '../components/prokino/GenericItem';
import SequenceItem from '../components/prokino/SequenceItem';

export default function Browse() { //{protein}
    let params = new URLSearchParams(url.search);
    const entityClass = params.get("c");
    
    //For now, any resource is an entity except prokino:Sequence, that is sequence. If more resource types added, this line should be converted to a switch-case statement.
    const resourceType = entityClass === 'prokino:Sequence' ? 'sequence':'entity';

    const value = params.get("v");
    if (!value)
        return <></>;
    let url = `http://gumbo.cs.uga.edu:8080/prokinosrv/rest/${resourceType}/${value}`
    // const { data, error } = useSWR(url, fetcher);
    // if (error) 
    //     return <Layout>Failed to load</Layout>

    // if (!data) 
    //     return <Layout>Loading...</Layout>
    axios.get(url)
    .then(function (data) {
      // handle success
      let dataProps = {};
      if (data.datatypeProperties)
          data.datatypeProperties.forEach(prop=>
              dataProps[prop["p"]] = prop["v"]
              );
  
      let objProps = {};
      if (data.objectProperties)
          data.objectProperties.forEach(prop=>
              objProps[prop["p"]] = prop["v"]
              );
  
      let incomingProps={}
      if (data.incomingObjectProperties)
          data.incomingObjectProperties.forEach(prop=>
              incomingProps[prop["p"]] = prop["v"]
              );
  
      switch (entityClass) {
          case "prokino:Protein":
              return <ProteinItem
                          localName={data.localName} 
                          datatypeProperties={dataProps} 
                          objectProperties={objProps}
                          incomingObjectProperties={incomingProps}
                      />;
  
          case "prokino:Sequence":
              return <SequenceItem data={data} localName={value} />;
  
          default:
              return <GenericItem 
                          entityClass={data.entityClass}
                          localName={data.localName} 
                          datatypeProperties={dataProps} 
                          objectProperties={objProps}
                          incomingObjectProperties={incomingProps}
                      />;
      }

    })
    .catch(function (error) {
      // handle error
      return <span>Failed to load</span>
    })
    .then(function () {
      // always executed
      return <span>Loading...</span>
    });


}

