import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProteinItem from '../components/prokino/ProteinItem';
import GenericItem from '../components/prokino/GenericItem';
import SequenceItem from '../components/prokino/SequenceItem';
import { BASE_ENDPOINT } from '../components/prokino/Endpoints';
import Layout from '../components/Layout'

export default function Browse() { //{protein}

    const urlParams = new URLSearchParams(document.location.search.substring(1));
    
    const [entityClass,setEntityClass] = useState(urlParams.get("c"));
    const [value,setValue] = useState(urlParams.get("v"));

    const [prokinoData,setProkinoData] = useState(null);
    //For now, any resource is an entity except prokino:Sequence, that is sequence. If more resource types added, this line should be converted to a switch-case statement.


    // const { data, error } = useSWR(url, fetcher);
    // if (error) 
    //     return <Layout>Failed to load</Layout>

    // if (!data) 
    //     return <Layout>Loading...</Layout>

    useEffect(() => {
        const res = async () => {
            // if (!value)
            //     return <></>

            const resourceType = entityClass === 'prokino:Sequence' ? 'sequence' : 'entity';
            let url = `${BASE_ENDPOINT}/${resourceType}/${value}`;

            const result = await axios.get(url);
            const data = result.data;
            console.log(data)
            setProkinoData(data);
        };
        res();
    }, []);

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

        switch (entityClass) {
            case "prokino:Protein":
                return <ProteinItem
                    localName={prokinoData.localName}
                    datatypeProperties={dataProps}
                    objectProperties={objProps}
                    incomingObjectProperties={incomingProps}
                />;

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
