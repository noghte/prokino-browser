import React, { useEffect, useState, useRef } from 'react';
import { PDB_BESTSTRUCTURE_ENDPOINT } from '../../../components/prokino/Endpoints'
import ProtvistaPdbDisplay from './ProtvistaPdbDisplay'
import axios from 'axios';

export default function AnnotationViewer({ prokinoSequence, sequenceData, uniprotId }) { //{protein}

    console.log(sequenceData)
    const [seqConservationData, setSeqConservationData] = useState(null);//an array of start and end position, in each cell of the array, there is another array of amino acids
    const [variationData, setVariationData] = useState(null);
    const [ligandBindingSites, setLigandBindingSites] = useState(null);
    const [interactionInterfaces, setInteractionInterfaces] = useState(null);
    const [annotations, setAnnotations] = useState(null);
    const [structuralMotifs, setStructuralMotifs] = useState(null);
    const [sequenceMotifs, setSequenceMotifs] = useState(null);
    const [subdomains, setSubdomains] = useState(null);

    const [customData, setCustomData] = useState(null);
    const [pdbBest, setPdbBest] = useState(null);

    useEffect(() => { //when uniprotId is ready, call APIs to get data for the annotation viewer tracks

        const getPdbBestStructure = async () => {

            if (uniprotId === "O94768") //prokino:Human_DRAK2
                setPdbBest("6zjf");
            else {
                let url = `${PDB_BESTSTRUCTURE_ENDPOINT}/${uniprotId}`;
                try {
                    const result = await axios.get(url);
                    setPdbBest(result.data);
                }
                catch (error) {
                    setPdbBest("NA");
                }
            }
        };

        const callVariationAPI = async () => {
            let url = `https://www.ebi.ac.uk/pdbe/graph-api/uniprot/protvista/variation/${uniprotId}`;
            try {
                const result = await axios.get(url);
                setVariationData(result.data);
            }
            catch (error) { setVariationData("NA"); }

        }
        const callSequenceConservationAPI = async () => {
            let url = `https://www.ebi.ac.uk/pdbe/graph-api/uniprot/sequence_conservation/${uniprotId}`;
            try {
                const result = await axios.get(url);
                setSeqConservationData(result.data[`${uniprotId}`]);
            }
            catch (error) { setSeqConservationData("NA"); }

        }
        const callLigandBindingSitesAPI = async () => {
            let url = `https://www.ebi.ac.uk/pdbe/graph-api/uniprot/protvista/ligand_sites/${uniprotId}`;
            try {
                const result = await axios.get(url);
                setLigandBindingSites(result.data[`${uniprotId}`]);
            }
            catch (error) { setLigandBindingSites("NA"); }

        }
        const callInteractionInterfaces = async () => {
            let url = `https://www.ebi.ac.uk/pdbe/graph-api/uniprot/protvista/interface_residues/${uniprotId}`;
            try {
                const result = await axios.get(url);
                setInteractionInterfaces(result.data[`${uniprotId}`]);
            }
            catch (error) { setInteractionInterfaces("NA"); }
        }
        const callAnnotationsAPI = async () => {
            let url = `https://www.ebi.ac.uk/pdbe/graph-api/uniprot/protvista/annotations/${uniprotId}`;
            try {
                const result = await axios.get(url);
                setAnnotations(result.data[`${uniprotId}`]);
            }
            catch (error) { setAnnotations("NA"); }
        }

        const handleStructuralMotifs = () => {
            const structuralMotifsData = sequenceData.motifs.filter(m => m.entityClass == "prokino:StructuralMotif");
            //returning an array grouped by localName
            const results = structuralMotifsData.reduce(function (r, a) {
                const key = a.localName || 'unknown';
                r[key] = r[key] || [];
                r[key] = a;

                a['motifData'] = a['motifData'] || [];
                a.motifs.forEach(sm => {
                    a['motifData'].push(sequenceData.motifs.filter(item => item.localName === sm)[0]);
                });
                return r;
            }, {});
            const smfValues = Object.values(results);
            let tracks = []

            let track = { labelType: "text", label: "Structural Motifs", data: [] };
            //creating tracks
            smfValues.forEach(smf => {
                //let track = {labelType:"text", label:smf.name,data:[]};
                let dataItem = { accession: smf.name, labelType: "text", label: smf.name, color: "rgb(65, 105, 225)", type: "UniProt range", tooltipContent: smf.localName, labelTooltip: smf.name, locations: [] }

                //setting fragments for each track (smf)
                let fragments = []
                smf.motifData.forEach(motifData => {
                    let fragment = {}
                    fragment.start = parseInt(motifData.startLocation)
                    fragment.end = parseInt(motifData.endLocation)
                    fragment.tooltipContent = motifData.name;
                    // fragment.pdbs = [
                    //       "2m20",
                    //       "3gop",
                    //       "1z9i",
                    //       "2n5s"
                    //     ]
                    fragments.push(fragment)
                });
                dataItem.locations.push({ "fragments": fragments })
                track.data.push(dataItem);
                //tracks.push(track)
            })
            tracks.push(track)
            //structuralMotifTrack.data.push(dataItem)
            const legends = {
                "alignment": "right",
                "data": {
                    "StructuralMotifs": [
                        {
                            "color": "rgb(160,28,128)",
                            "text": "StructuralMotifs"
                        }
                    ]
                }
            }
            let superTrack = { largeLabels: true, sequence: sequenceData.residues, length: sequenceData.residues.length, legends: legends, tracks: tracks }
            setStructuralMotifs(superTrack);

        }

        const handleSequenceMotifs = () => {
            const sequenceMotifsData = sequenceData.motifs.filter(m => m.entityClass == "prokino:SequenceMotif");
            //returning an array grouped by localName
            const results = sequenceMotifsData.reduce(function (r, a) {
                const key = a.localName || 'unknown';
                r[key] = r[key] || [];
                r[key] = a;

                a['motifData'] = a['motifData'] || [];
                a.motifs && a.motifs.forEach(sm => {
                    a['motifData'].push(sequenceData.motifs.filter(item => item.localName === sm)[0]);
                });
                return r;
            }, {});
            const values = Object.values(results);
            // let mainTracks = []
            // let subdomainsTracks = []

            let mainTrack = { labelType: "text", label: "Sequence Motifs", data: [] };
            let subdomainsTrack = { labelType: "text", label: "Subdomains", data: [] };

            //creating tracks
            values.forEach(value => {
                //let track = {labelType:"text", label:smf.name,data:[]};
                let dataItem = { accession: value.name, labelType: "text", label: value.name, color: "rgb(165, 85, 225)", type: "UniProt range", tooltipContent: value.localName, labelTooltip: value.name, locations: [] }

                //setting fragments for each track (smf)
                let fragments = []
                let fragment = {start: parseInt(value.startLocation), end:parseInt(value.endLocation),tooltipContent:value.name}
                fragments.push(fragment);
                dataItem.locations.push({ "fragments": fragments })
                if (value.name.toLowerCase().includes("subdomain"))
                    subdomainsTrack.data.push(dataItem);
                else
                    mainTrack.data.push(dataItem);

                //tracks.push(track)
            })
            // if (mainTrack.length>0)
            //     mainTracks.push(mainTrack)
            
            // if (subdomainsTrack.length>0)
            //     subdomainsTracks.push(subdomainsTrack)

            //structuralMotifTrack.data.push(dataItem)
            const mainTrackLegends = {
                "alignment": "right",
                "data": {
                    "SequenceMotifs": [
                        {
                            "color": "rgb(84,100,128)",
                            "text": "SequenceMotifs"
                        }
                    ]
                }
            }
            let superTrackSequenceMotifs = { largeLabels: true, sequence: sequenceData.residues, length: sequenceData.residues.length, legends: mainTrackLegends, tracks: [mainTrack] }
            setSequenceMotifs(superTrackSequenceMotifs);

            const subdomainsTrackLegends = {
                "alignment": "right",
                "data": {
                    "SequenceMotifs": [
                        {
                            "color": "rgb(84,100,128)",
                            "text": "SequenceMotifs"
                        }
                    ]
                }
            }
            let superTrackSubdomains = { largeLabels: true, sequence: sequenceData.residues, length: sequenceData.residues.length, legends: subdomainsTrackLegends, tracks: [subdomainsTrack] }
            setSubdomains(superTrackSubdomains);

        }

        //:uniprotId
        if (uniprotId) {
            //if (!pdbBest) getPdbBestStructure();
            //from prokino
            if (!structuralMotifs) handleStructuralMotifs();
            if (!sequenceMotifs) handleSequenceMotifs();

            //api calls
            if (!seqConservationData) callSequenceConservationAPI();
            if (!variationData) callVariationAPI();
            if (!ligandBindingSites) callLigandBindingSitesAPI();
            if (!interactionInterfaces) callInteractionInterfaces();
            if (!annotations) callAnnotationsAPI();
        }

    }, [uniprotId]);

    //When everythin is ready (API calls done, and web-component instance is recognized)
    useEffect(() => {
        if (!customData && sequenceData && variationData && seqConservationData)
            setCustomData({
                displayNavigation: true, // Set to false to hide navigation scale
                displaySequence: true, // Set to false to hide sequence track
                sequence: sequenceData.residues,//'MPNFSGNWKIIRSENFEELLKVLGVNVMLRKIAVAAASKPAVEIKQEGDTFYIKTSTTVRTTEINFKVGEEFEEQTVDGRPCKSLVKWESENKMVCEQKLLKGEGPKTSWTRELTNDGELILTMTADDVVCTRVYVRE', //Protein sequence
                length: sequenceData.residues.length,//prokinoSequence.length, //138, // Length of the sequence
                offset: 1, // Offset navigation scale start. Example offset:10 will display the navigation start from 10 instead of default 1.
                tracks: [],
                //sequenceConservation: seqConservationData, // Set this property to display your own sequence conservation data. Refer comments at the top for data structure.
                //variants: variationData, // Set this property to display your own variation data. Refer comments at the top for data structure.
                legends: {
                    alignment: 'right', // expected values 'left', 'right' or 'center'
                    data: { // Legend Row, key is used as the row label
                        "Domains": [ // legends for Domains row
                            {
                                color: ["rgb(135,158,247)", "rgb(160,174,232)"], // legend color, supported rgb and hex code value
                                text: "Domains 1" // legend text
                            },
                            {
                                color: ["rgb(107,119,39)", "rgb(90,102,23)"],
                                text: "Domains 2"
                            }
                        ],
                        "Annotations": [ // legends for Annotation row row
                            {
                                color: ["rgb(255,99,163)"],
                                text: "Custom Annotations"
                            }
                        ]
                    }
                }
            });
    }, [sequenceData, variationData, seqConservationData]);

    // useEffect(() => {
    //     //now that we have custom data, if everything else is ready, then set to to the web-component
    //     if (customData && seqConservationData && variationData) { //ligandBindingSites interactionInterfaces, annotations
    //        setCustomData(customData);
    //     }
    // }, [customData, seqConservationData, variationData]) //ligandBindingSites, interactionInterfaces, annotations

    //uniprotId = P00533
    //TODO: for now, we ge a list of ids and select the first one, instead, we should select a specific one marked by the API
    //let uniprotId = uniprotIds[0]["v"].filter(x => x.toLowerCase().includes("prokino:uniprot"))[0];
    //uniprotId = uniprotId.split("-")[1];
    //console.log(uniprotId);


    if (!seqConservationData)
        return <p>Fetching conservation data ...</p>
    if (!variationData)
        return <p>Fetching variation data ...</p>
    if (!ligandBindingSites)
        return <p>Fetching ligand binding sites ...</p>
    if (!interactionInterfaces)
        return <p>Fetching interaction interfaces ...</p>
    if (!annotations)
        return <p>Fetching annotations ...</p>
    if (!customData)
        return <p>Loading...</p>;
    if (sequenceMotifs)
        customData.tracks = customData.tracks.concat(sequenceMotifs.tracks);
    if (subdomains)
        customData.tracks = customData.tracks.concat(subdomains.tracks);
    if (structuralMotifs)
        customData.tracks = customData.tracks.concat(structuralMotifs.tracks);
    if (ligandBindingSites !== "NA")
        customData.tracks = customData.tracks.concat(ligandBindingSites.tracks);
    if (interactionInterfaces !== "NA")
        customData.tracks = customData.tracks.concat(interactionInterfaces.tracks);
    if (annotations !== "NA")
        customData.tracks = customData.tracks.concat(annotations.tracks);


    return <ProtvistaPdbDisplay data={customData} uniprotId={uniprotId} />

}