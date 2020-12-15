import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ProteinItem from '../components/prokino/ProteinItem';
import GenericItem from '../components/prokino/GenericItem';
import SequenceItem from '../components/prokino/SequenceItem';

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Browse() { //{protein}
    const router = useRouter();
    const entityClass = router.query["c"];
    
    //For now, any resource is an entity except prokino:Sequence, that is sequence. If more resource types added, this line should be converted to a switch-case statement.
    const resourceType = entityClass === 'prokino:Sequence' ? 'sequence':'entity';

    const value = router.query["v"];
    if (!value)
        return <></>;
    let url = `http://gumbo.cs.uga.edu:8080/prokinosrv/rest/${resourceType}/${value}`
    const { data, error } = useSWR(url, fetcher);
    if (error) 
        return <Layout>Failed to load</Layout>

    if (!data) 
        return <Layout>Loading...</Layout>

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
}

