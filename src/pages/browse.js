import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProteinItem from '../components/prokino/ProteinItem';
import GenericItem from '../components/prokino/GenericItem';
import SequenceItem from '../components/prokino/SequenceItem';
import { BASE_ENDPOINT } from '../components/prokino/Endpoints';
import Layout from '../components/Layout'
import { graphql } from 'gatsby';

export default function Browse({location, data}) { //{protein}
const urlParams = new URLSearchParams(location.hash.substring(1));

const [cifFileNames,setCifFileNames] = useState(null);
const [entityClass,setEntityClass] = useState(urlParams.get("c"));
const [value,setValue] = useState(urlParams.get("v"));
console.log(entityClass);    
const [uniprotId,setUniprotId] = useState(null);
const [uniprotIdRequired,setUniprotIdRequired] = useState(false);

const [prokinoData,setProkinoData] = useState(null);

//For now, any resource is an entity except prokino:Sequence, that is sequence. If more resource types added, this line should be converted to a switch-case statement.


// const { data, error } = useSWR(url, fetcher);
// if (error) 
//     return <Layout>Failed to load</Layout>

// if (!data) 
//     return <Layout>Loading...</Layout>
useEffect(()=>{
    if (data.allFile && data.allFile.nodes.length > 0)
    {
        let cifFileArr = data["allFile"]["nodes"].filter(f=> f.name.split("_")[2] === uniprotId);
        if (cifFileArr.length > 0) //filename found successfully
        {
            cifFileArr.push({name:"clear",relativeDirectory:"clear"})
            setCifFileNames(cifFileArr)
        }
    }
},[uniprotId])

useEffect(() => {
    const getProkinoData = async () => {
        // if (!value)
        //     return <></>

        const resourceType = entityClass === 'prokino:Sequence' ? 'sequence' : 'entity';
        let url = `${BASE_ENDPOINT}/${resourceType}/${value}`;

        const result = await axios.get(url);
        console.log("prokino",result.data)
        setProkinoData(result.data);
        
        if (result.data.entityClass === "prokino:Protein")
            setUniprotIdRequired(true);
    };
    getProkinoData();
}, [entityClass]);



useEffect(() => {
    const getUniprotId = async () => {

        let url = `${BASE_ENDPOINT}/protein/${value}/identifier`;
        const result = await axios.get(url);
        setUniprotId(result.data.identifier);
        console.log("uniprot from browse.js",uniprotId);
    };
    if (uniprotIdRequired)
        getUniprotId();
}, [uniprotIdRequired]);



    
    if (!prokinoData)
        return <Layout>Loading ...</Layout>;

    // handle success
    let dataProps = {};
    if (prokinoData.datatypeProperties)
        prokinoData.datatypeProperties.forEach(prop =>
            dataProps[prop["p"]] = prop["v"]
        );

    let objProps = {};
    if (prokinoData.objectProperties)
        prokinoData.objectProperties.forEach(prop =>
            objProps[prop["p"]] = prop["v"]
        );

    let incomingProps = {}
    if (prokinoData.incomingObjectProperties)
        prokinoData.incomingObjectProperties.forEach(prop =>
            incomingProps[prop["p"]] = prop["v"]
        );

    // if (!entityClass)
    //     return <p>Loading..</p>

    switch (entityClass) {
        case "prokino:Protein":
            if (!cifFileNames)
                return "Loading CIF files..."
            return <ProteinItem
                uniprotId={uniprotId}
                localName={prokinoData.localName}
                datatypeProperties={dataProps}
                objectProperties={objProps}
                incomingObjectProperties={incomingProps}
                cifFileNames={cifFileNames} />;

        case "prokino:Sequence":
            return <SequenceItem data={prokinoData} localName={value} />;

        default:
            return <GenericItem
                entityClass={prokinoData.entityClass}
                localName={prokinoData.localName}
                datatypeProperties={dataProps}
                objectProperties={objProps}
                incomingObjectProperties={incomingProps}
            />;
    }



}
// export const query = graphql`
// query cifFileNameByGlob($prot: String = "*Q9UBF8*") {
//     allFile(filter: {name: {glob: $prot}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `
 
export const query = graphql`
query cifFileNames {
    allFile(sort: {fields: name}) {
      nodes {
        name
        relativeDirectory
      }
    }
  }
  `