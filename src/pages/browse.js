import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProteinItem from '../components/prokino/ProteinItem';
import GenericItem from '../components/prokino/GenericItem';
import SequenceItem from '../components/prokino/SequenceItem';
import { BASE_ENDPOINT } from '../components/prokino/Endpoints';
import Layout from '../components/Layout'
import { graphql } from 'gatsby';

export default function Browse({ location, data }) { //{protein}
    let av = require(`../../static/av.json`);
    const urlParams = new URLSearchParams(location.search);
    const [cifFileNames, setCifFileNames] = useState(null);
    const [entityClass, setEntityClass] = useState(urlParams.get("c"));
    const [value, setValue] = useState(urlParams.get("v"));

    const [uniprotId, setUniprotId] = useState(null);
    const [uniprotIdRequired, setUniprotIdRequired] = useState(false);

    // const [annotationViewerData, setAnnotationViewerData] = useState(null);
    const [prokinoData, setProkinoData] = useState(null);

    //For now, any resource is an entity except prokino:Sequence, that is sequence. If more resource types added, this line should be converted to a switch-case statement.


    // const { data, error } = useSWR(url, fetcher);
    // if (error) 
    //     return <Layout>Failed to load</Layout>

    // if (!data) 
    //     return <Layout>Loading...</Layout>
    useEffect(() => {
        if (uniprotId && data.allFile && data.allFile.nodes.length > 0) {

            console.log("uniprotId", uniprotId)
            const filteredArray = Object.values(av.content).filter(function (itm) {
                return itm.UniProt_ID == uniprotId;
            });
            console.log(filteredArray)

            let cifFilesOnDisk = data["allFile"]["nodes"] //list of available cif files on disk
            let cifFileArr = []
            const currentProtein = filteredArray[0];
            const avSvwr = currentProtein.structureViewerData; //list of Pdbs from structure viewer data
            avSvwr.forEach(sv => {
                console.log("unpiprotId", sv.unpiprotId)
                sv.relevantPDBs && sv.relevantPDBs.forEach(pdb => {
                    let relatedFile = cifFilesOnDisk.filter(f => f.name.split("_")[f.name.split("_").length - 1] == pdb)
                    let fname = ""
                    if (relatedFile.length > 0) //file found
                        fname = relatedFile[0]["name"] + ".cif";
                    cifFileArr.push(
                        {
                            name: "pdb:" + pdb + ", uniprot: " + sv.unpiprotId + ", organism: " + sv.organism,
                            pdbId: pdb,
                            uniprotId: sv.unpiprotId,
                            organismName: sv.organism,
                            filename: fname
                        })

                });
                sv.relevantAlphaFoldPredicts && sv.relevantAlphaFoldPredicts.forEach(af => {
                    let relatedFile = cifFilesOnDisk.filter(f => f.name == af.split(".")[0])
                    let fname = ""
                    const uniprotId = currentProtein.UniProt_ID;
                    const organism = currentProtein.organism;
                    if (relatedFile.length > 0) //file found
                        fname = relatedFile[0]["name"] + ".cif";
                    cifFileArr.push({
                        name: "AlphaFold:" + af + ", uniprot: " + uniprotId + ", organism: " + organism,
                        pdbId: af,
                        uniprotId: uniprotId,
                        organismName: organism,
                        filename: fname
                    })
    
                })

            }
            );


            //let cifFileArr = data["allFile"]["nodes"].filter(f => f.name.split("_")[2] === uniprotId);
            //let cifFileArr = av.content.filter(f => f.name.split("_")[2] === uniprotId);
            //Read relevant PDBs to list CIF files

            if (cifFileArr.length > 0) //filename found successfully
            {
                cifFileArr.unshift({ name: "Select a molecule ..." })
                setCifFileNames(cifFileArr)
            }
        }

    }, [uniprotId])

    useEffect(() => {
        const getProkinoData = async () => {
            // if (!value)
            //     return <></>`

            const resourceType = entityClass === 'prokino:Sequence' ? 'sequence' : 'entity';
            let url = `${BASE_ENDPOINT}/${resourceType}/${value}`;

            const result = await axios.get(url);
            setProkinoData(result.data);
            console.log("Prokino API result", result.data)
            if (result.data.entityClass === "prokino:Protein")
                setUniprotIdRequired(true);
        };
        getProkinoData();
    }, []);

    // useEffect(() => {
    //     const getAnnotationViewerData = async () => {
    //         let url = `../../content/annotationviewerdata.json`;
    //         const result = await axios.get(url);
    //         setAnnotationViewerData(result.data);

    //     };
    //     getAnnotationViewerData();
    // }, []);

    // useEffect(() => {
    //     if (annotationViewerData)
    //         console.log(annotationViewerData)
    // }, [annotationViewerData]);


    useEffect(() => {
        const getUniprotId = async () => {

            let url = `${BASE_ENDPOINT}/protein/${value}/identifier`;
            const result = await axios.get(url);
            setUniprotId(result.data.identifier);
            console.log("uniprot from browse.js", uniprotId);
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
            // if (!cifFileNames)
            //     return "Loading CIF files..."

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