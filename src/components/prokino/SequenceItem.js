import Layout from '../Layout';
import SequenceViewer from './SequenceViewer'
import React, { useState, useEffect } from 'react';
// import FeatureViewer from './FeatureViewer';
import {showList,getValues} from '../StringHelper';

export default function SequenceItem({data,localName})
{
    console.log(data);
    const sequence= data.residues;
    
    //domain sample
    // {
    //     "localName": "prokino:Human_EGFR-Domain",
    //     "entityClass": "prokino:EGFRfamily",
    //     "name": "Human_EGFR",
    //     "startLocation": "712",
    //     "endLocation": "970",
    //     "startPKALocation": null,
    //     "endPKALocation": null
    // }

    const functionalFeatures = data.functionalfeatures;
    //functionalFeature sample
    // {
    //     "localName": "prokino:Human_EGFR-signalpeptide",
    //     "entityClass": "prokino:SignalPeptide",
    //     "name": "EGFR signalpeptide",
    //     "startLocation": "1",
    //     "endLocation": "24",
    //     "startPKALocation": null,
    //     "endPKALocation": null
    //   },

    const motifs = data.motifs;
    //motif sample:
    // {
    //     "localName": "prokino:Human_EGFR-UniProt_APEMotif",
    //     "entityClass": "prokino:SequenceMotif",
    //     "name": "APE Motif",
    //     "startLocation": "882",
    //     "endLocation": "884",
    //     "startPKALocation": "207",
    //     "endPKALocation": "209"
    //   }
    // let sequenceMotif = "";
    // if (objectProperties["prokino:hasMotif"]) 
    //     sequenceMotif =objectProperties["prokino:hasMotif"].filter(key=> key["c"] == "prokino:SequenceMotif")[0];

    // let structuralMotif = "";
    // if (objectProperties["prokino:hasMotif"])
    //     structuralMotif = objectProperties["prokino:hasMotif"].filter(key=> key["c"] == "prokino:StructuralMotif")[0];

    // let domains = "";
    // if (incomingObjectProperties["prokino:inSequence"])
    //     domains = getValues(incomingObjectProperties["prokino:inSequence"][0]["v"]);
    
    function getStructuralMotifs()
    {
        const structuralMotifs = data.motifs.filter(m=>m.entityClass == "prokino:StructuralMotif");
        //returning an array grouped by localName
        const results = structuralMotifs.reduce(function (r, a) {
            const key = a.localName || 'unknown';
            r[key] = r[key] || [];
            r[key] = a;

            a['motifData'] = a['motifData'] || [];
            a.motifs.forEach(sm => 
            {
                a['motifData'].push(data.motifs.filter(item => item.localName === sm)[0]);
            });

            return r;
        },{});
        return Object.values(results);

                // .forEach( motif=>
        //     {
        //     }
        //);
    }
    function extractLocations(items,entityClass="")
    {
        let locations = [];
        items.forEach(item=>
            {
                if (item.hasOwnProperty('startLocation') && item.hasOwnProperty('endLocation'))
                    //if (item.startLocation!=item.endLocation)
                    if (entityClass === "" || item.entityClass === entityClass)
                        locations.push({x:item.startLocation,y:item.endLocation});
            });
        return locations;
    }

    let motifLocations =data.motifs? extractLocations(data.motifs,"prokino:SequenceMotif"):[];
    let functionalFeatureLocations = data.functionalfeatures ? extractLocations(data.functionalfeatures):[];
    let domainLocations =data.domains? extractLocations(data.domains):[];
    
    
    

    let features = [];
    features.push({
        name: "Domains",
        //data: [{x:20,y:32},{x:46,y:100},{x:123,y:167}],
        data: domainLocations,
        type: "rect",
        color: "#16825d",
        className: "positions",
        filter: "type1"
    });
    features.push({
        name: "Func. Features",
        data: functionalFeatureLocations,
        type: "rect",
        color: "#0f2572",
        className: "positions",
        filter: "type1"
    });

    features.push({
        name: "Sequence Motifs",
        data: motifLocations,
        type: "rect",
        color: "#B0381E",
        className: "positions",
        filter: "type1"
    });
    
    let structuralMotifs = getStructuralMotifs();
    //structuralMotifLocations =[]
    structuralMotifs.forEach(smType =>
        {
            features.push(
                {
                    name: smType.name,
                    data: extractLocations(smType.motifData),
                    type: "path",
                    color: "#A00FF0",
                    className: "positions",
                    filter: "type1"
                }
                );
        });

    

    // const features = [
    //     {
    //         data: [{x:20,y:32},{x:46,y:100},{x:123,y:167}],
    //         name: "test feature 1",
    //         type: "rect",
    //         color: "#0f2572",
    //         className: "test1",
    //         filter: "type1"
    //     },
    //     {
    //         data: [{x:20,y:32},{x:46,y:100},{x:123,y:167}],
    //         name: "test feature 1",
    //         className: "test1",
    //         color: "#005572",
    //         type: "rect",
    //         filter: "type1"
    //     },
    //     {
    //         data: [{x:52,y:52},{x:92,y:92}],
    //         name: "test feature 2",
    //         className: "test2",
    //         color: "#006588",
    //         type: "rect",
    //         filter: "type2"
    //     },
    //     {
    //         data: [{x:130,y:184},{x:40,y:142},{x:80,y:110}],
    //         name: "test feature 3",
    //         className: "test3",
    //         color: "#008B8D",
    //         type: "path",
    //         filter: "type2"
    //      },
    //      {
    //         data: [{x:120,y:154, color:"#cb9758"},{x:22,y:163},{x:90,y:108},{x:10,y:25},{x:193,y:210},{x:78,y:85},{x:96,y:143},{x:14,y:65, color:"#896c49"},{x:56,y:167}],
    //         name: "test feature 4",
    //         className: "test4",
    //         color: "#F4D4AD",
    //         type: "rect",
    //         height: 8,
    //         filter: "type1"
    //     }
    // ];


    return (<Layout>
        <div id="fav-container" className="fav-container" key="container">
            <div className="favth-container" key="innerContainer"> 
                <div className="favth-row" key="parentDiv">
                    <div className="favth-col-xs-12" key="innerDiv">
                        <h3 className="details-title">
                            Sequence: {localName.split(":")[1]}
                        </h3>
                       
                        <div className="favth-clearfix">
								<div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Primary Name</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            
                                            {localName}
                                                {/* {Object.entries(datatypeProperties).map((v,i)=>{return <pre>{v[0]}-{v[1]}</pre>})} */}
                                                {/* {objectProperties}
                                                {incomingObjectProperties}  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="fieldset-pair-container" >
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>FASTA Format</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight:'500px'}}>
                                            <div key="seqViewer">
                                                <SequenceViewer sequence={sequence} />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Domains</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div key="localName">
                                                {showList(data.domains,"localName")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container" >
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Annotations</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight:'500px'}}>
                                            <div key="featureViewer">
                                            
                                                {/* <FeatureViewer sequence={sequence} featurelist={features} /> */}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Layout>
            );
}
