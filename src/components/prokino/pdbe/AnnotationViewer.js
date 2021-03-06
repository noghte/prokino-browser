import React, { useEffect, useState, useRef } from 'react';
import { PDB_BESTSTRUCTURE_ENDPOINT } from '../../../components/prokino/Endpoints'
import ProtvistaPdbDisplay from './ProtvistaPdbDisplay'
import axios from 'axios';

export default function ({ prokinoSequence, sequenceData, uniprotId, selectedCif, ligandMappings }) { //{protein}
    const [isReady, setIsReady] = React.useState(true);
    //Tell the component to setIsready to false for a few seconds when selectedCif changes
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (uniprotId)
    //             setIsReady(true)
    //     }, 1500)
    //     setIsReady(false)
    // }, [selectedCif]);


    const [seqConservationData, setSeqConservationData] = useState(null);//an array of start and end position, in each cell of the array, there is another array of amino acids
    const [variationData, setVariationData] = useState(null);
    const [ligandBindingSites, setLigandBindingSites] = useState(null);
    const [interactionInterfaces, setInteractionInterfaces] = useState(null);
    const [annotations, setAnnotations] = useState(null);
    const [alphafoldPredictions, setAlphafoldPredictions] = useState(null);

    const [functionalFeatures, setFunctionalFeatures] = useState(null);
    const [structuralMotifs, setStructuralMotifs] = useState(null);
    const [sequenceMotifs, setSequenceMotifs] = useState(null);
    const [ligandMotifs, setLigandMotifs] = useState(null);
    const [subdomains, setSubdomains] = useState(null);

    const [customData, setCustomData] = useState(null);
    const [pdbBest, setPdbBest] = useState(null);

    // useEffect(() => {
    //     setCustomData(null);
    // }, [selectedCif]);

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
            let annotRes = result.data[`${uniprotId}`];
            //remove the Curated regularity motifs track, because we already have it
            annotRes.tracks = annotRes.tracks.filter(item => item.label != "Curated regularity motifs")
            setAnnotations(annotRes);
        }
        catch (error) { setAnnotations("NA"); }
    }

    function getAlphaFoldData() {
        const getAlphaFoldGroupLabel = (score) => {
            let pr = { "label": "", "color": "" }
            switch (true) {
                case score > 90: //background-color: rgb(0, 83, 214);
                    pr["label"] = "Very High";
                    pr["color"] = "rgb(0, 83, 214)";
                    break;
                case score > 70: //background-color: rgb(101, 203, 243);
                    pr["label"] = "Confident";
                    pr["color"] = "rgb(101, 203, 243)";
                    break;
                case score > 50: //background-color: rgb(255, 219, 19);
                    pr["label"] = "Low";
                    pr["color"] = "rgb(255, 219, 19)";
                    break;
                default: //<50 & // background-color: rgb(255, 125, 69);
                    pr["label"] = "Very Low";
                    pr["color"] = "rgb(255, 125, 69)";
                    break;
            }
            return pr;
        }
        let pr = null;
        try {
            const alphafoldPredictions = require(`/static/alphafolds/${uniprotId}.json`).data;
            pr = alphafoldPredictions.map(pr => {
                const afVals = getAlphaFoldGroupLabel(pr.confidence)
                return {
                    start: parseInt(pr.pos),
                    end: parseInt(pr.pos),
                    tooltipContent: afVals.label + ", Confidence Score=" + pr.confidence,
                    color: afVals.color,
                }
            });
            console.log("alphafoldPredictions", pr);

        } catch (e) {
            if (e.code == 'MODULE_NOT_FOUND') {
                console.log(`No mapping for ${uniprotId}'s alphafold prediction found.`)
            }
        }
        //const afData = [{ from: 50, to: 100, label: "some description" }, { from: 120, to: 290, label: "another description" }];
        return pr;
    }

    const handleAlphafoldPredictions = () => {
        const isAlphaFoldSelected = selectedCif.indexOf("AF_") > 0;
        if (!isAlphaFoldSelected)
        {
            setAlphafoldPredictions("NA");
            return;
        }

        const fragments = getAlphaFoldData();
        if (!fragments) {
            setAlphafoldPredictions("NA");
            return;
        }

        const superTrack = {
            largeLabels: true,
            sequence: sequenceData.residues,
            length: sequenceData.residues.length,
            legends: {
                "alignment": "right",
                "data": {
                    "AlphaFoldPredictions": [
                        {
                            "color": "rgb(160,28,128)",
                            "text": "AlphaFolds"
                        }
                    ]
                }
            },
            tracks: {
                labelType: "text",
                label: "Alphafolds",
                data: [
                    {
                        accession: "",
                        labelType: "text",
                        label: "Model Confidence",
                        type: "UniProt range",
                        tooltipContent: "tooltip test",
                        labelTooltip: "lt",
                        locations: [
                            { "fragments": fragments }
                        ]
                    }
                ]
            }
        }

        setAlphafoldPredictions(superTrack);

    }
    const handleStructuralMotifs = () => {
        //TODO: check sequenceData.motifs not null
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
        console.log("results", results);
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
                if (motifData) {
                    let fragment = {}
                    fragment.start = parseInt(motifData.startLocation)
                    fragment.end = parseInt(motifData.endLocation)
                    fragment.tooltipContent = motifData.name;
                    fragments.push(fragment)
                }
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
    const appendSubdomains = (subdomainsTrack) => {
        //TODO: uncomment to add subdomains track
        // if (!subdomains) { //new
        //     const subdomainsTrackLegends = {
        //         "alignment": "right",
        //         "data": {
        //             "Subdomains": [
        //                 {
        //                     "color": "rgb(94,220,128)",
        //                     "text": "Subdomains"
        //                 }
        //             ]
        //         }
        //     }
        //     let superTrackSubdomains = { largeLabels: true, sequence: sequenceData.residues, length: sequenceData.residues.length, legends: subdomainsTrackLegends, tracks: [subdomainsTrack] }
        //     setSubdomains(superTrackSubdomains);
        // }
        // else { //append //TODO: check the problem
        //     const newSubdomainsTrack = subdomains.tracks.push(subdomainsTrack);
        //     setSubdomains(newSubdomainsTrack);

        // }
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

        let mainTrack = { labelType: "text", label: "Sequence Motifs", data: [] };
        let subdomainsTrack = { labelType: "text", label: "Subdomains", data: [] }; //subdomains are part of sequence motifs

        //creating tracks
        values.forEach(value => {
            let fragments = []
            let fragment = { start: parseInt(value.startLocation), end: parseInt(value.endLocation), tooltipContent: value.name }
            fragments.push(fragment);
            let dataItem = { accession: value.name, labelType: "text", label: value.name, color: "rgb(165, 85, 225)", type: "UniProt range", tooltipContent: value.localName, labelTooltip: value.name, locations: [{ "fragments": fragments }] }

            if (value.name.toLowerCase().includes("subdomain"))
                subdomainsTrack.data.push(dataItem);
            else
                mainTrack.data.push(dataItem);
        })

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

        appendSubdomains(subdomainsTrack);
    }

    const handleLigandMotifs = () => {
        if (!sequenceData.ligandmotifs)
            return;
        function getLigandMappings(loc) {
            let newPosition = parseInt(loc);
            if (ligandMappings) {
                ligandMappings.data.forEach(element => {
                    if (Object.keys(element)[0] == loc) {
                        //const oldPosition = Object.keys(element)[0]
                        newPosition = Object.values(element)[0]
                    }
                });
            }
            return newPosition;
        }

        const sequenceMotifsData = sequenceData.ligandmotifs.filter(m => m.entityClass == "prokino:SequenceMotif");
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

        let mainTrack = { labelType: "text", label: "Ligand Motifs", data: [] };
        let subdomainsTrack = { labelType: "text", label: "Subdomains", data: [] }; //subdomains are part of sequence motifs

        //creating tracks
        values.forEach(value => {
            let fragments = []
            let fragment = { start: getLigandMappings(value.startLocation), end: getLigandMappings(value.endLocation), tooltipContent: value.name }
            fragments.push(fragment);
            let dataItem = { accession: value.name, labelType: "text", label: value.name, color: "rgb(165, 85, 225)", type: "UniProt range", tooltipContent: value.localName, labelTooltip: value.name, locations: [{ "fragments": fragments }] }

            if (value.name.toLowerCase().includes("subdomain"))
                subdomainsTrack.data.push(dataItem);
            else
                mainTrack.data.push(dataItem);
        })

        const mainTrackLegends = {
            "alignment": "right",
            "data": {
                "LigandMotifs": [
                    {
                        "color": "rgb(104,10,228)",
                        "text": "LigandMotifs"
                    }
                ]
            }
        }
        let superLigandMotifs = { largeLabels: true, sequence: sequenceData.residues, length: sequenceData.residues.length, legends: mainTrackLegends, tracks: [mainTrack] }
        setLigandMotifs(superLigandMotifs);

        appendSubdomains(subdomainsTrack);

    }

    const handleFunctionalFeatures = () => {
        if (!sequenceData.functionalfeatures)
            return
        const functionalFeaturesData = sequenceData.functionalfeatures;
        //returning an array grouped by localName
        const results = functionalFeaturesData.reduce(function (r, a) {
            const key = a.localName || 'unknown';
            r[key] = r[key] || [];
            r[key] = a;

            // a['motifData'] = a['motifData'] || [];
            // a.motifs.forEach(sm => {
            //     a['motifData'].push(sequenceData.motifs.filter(item => item.localName === sm)[0]);
            // });
            return r;
        }, {});
        const values = Object.values(results);


        /////
        let track = { labelType: "text", label: "Functional Features", data: [] };

        values.forEach(value => {
            let fragments = []
            let fragment = { start: parseInt(value.startLocation), end: parseInt(value.endLocation), tooltipContent: value.name }
            let dataItem = { accession: value.name, labelType: "text", label: value.name, color: "rgb(65, 105, 225)", type: "UniProt range", tooltipContent: value.localName, labelTooltip: value.name, locations: [{ "fragments": fragments }] }
            fragments.push(fragment);
            track.data.push(dataItem);
        })

        const legends = {
            "alignment": "right",
            "data": {
                "FunctionalFeatures": [
                    {
                        "color": "rgb(180,98,98)",
                        "text": "FunctionalFeatures"
                    }
                ]
            }
        }
        let superTrack = { largeLabels: true, sequence: sequenceData.residues, length: sequenceData.residues.length, legends: legends, tracks: [track] }
        setFunctionalFeatures(superTrack);


    }

    //When everythin is ready (API calls done, and web-component instance is recognized)
    function loadCustomData() {
        if (sequenceData && selectedCif) //variationData
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
                        // "Domains": [ // legends for Domains row
                        //     {
                        //         color: ["rgb(135,158,247)", "rgb(160,174,232)"], // legend color, supported rgb and hex code value
                        //         text: "Domains 1" // legend text
                        //     },
                        //     {
                        //         color: ["rgb(107,119,39)", "rgb(90,102,23)"],
                        //         text: "Domains 2"
                        //     }
                        // ],
                        "AlphaFold Predictions Scores": [ // legends for Domains row
                            {

                                color: ["rgb(0, 83, 214)"], // legend color, supported rgb and hex code value
                                text: "Very High" // legend text
                            },
                            {

                                color: ["rgb(101, 203, 243)"], // legend color, supported rgb and hex code value
                                text: "Confident" // legend text
                            },
                            {

                                color: ["rgb(255, 219, 19)"], // legend color, supported rgb and hex code value
                                text: "Low" // legend text
                            },
                            {

                                color: ["rgb(255, 125, 69)"], // legend color, supported rgb and hex code value
                                text: "Very Low" // legend text
                            },
                        ],

                    }
                }
            });
    } //variationData, seqConservationData,

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

    useEffect(() => { //when uniprotId is ready, call APIs to get data for the annotation viewer tracks

        setTimeout(() => {
            setIsReady(true)
        }, 2500)
        setIsReady(false)

        //:uniprotId
        if (uniprotId && selectedCif) {
            // //if (!pdbBest) getPdbBestStructure();
            // //from prokino
            // if (!functionalFeatures) handleFunctionalFeatures();
            // if (!structuralMotifs) handleStructuralMotifs();
            // if (!sequenceMotifs) handleSequenceMotifs();

            // //api calls
            // if (!seqConservationData) callSequenceConservationAPI();
            // //if (!variationData) callVariationAPI();
            // if (!ligandBindingSites) callLigandBindingSitesAPI();
            // if (!interactionInterfaces) callInteractionInterfaces();
            // if (!annotations) callAnnotationsAPI();
            loadCustomData();
            handleFunctionalFeatures();
            handleStructuralMotifs();
            handleSequenceMotifs();
            handleLigandMotifs();
            handleAlphafoldPredictions();

            //api calls
            callSequenceConservationAPI();
            //if (!variationData) callVariationAPI();
            callLigandBindingSitesAPI();
            callInteractionInterfaces();
            callAnnotationsAPI();

        }

    }, [selectedCif]);

    if (!selectedCif)
        return <div>Please select a 3D structure</div>
    if (!isReady)
        return <div>Loading ...</div>
    if (!alphafoldPredictions)
        return <p>Loading alpha folds ...</p>
    if (!seqConservationData)
        return <p>Fetching conservation data ...</p>
    // if (!variationData)
    //     return <p>Fetching variation data ...</p>
    if (!ligandBindingSites)
        return <p>Fetching ligand binding sites ...</p>
    if (!interactionInterfaces)
        return <p>Fetching interaction interfaces ...</p>
    if (!annotations)
        return <p>Fetching annotations ...</p>
    if (!customData)
        return <p>Loading...</p>;

    if (alphafoldPredictions && alphafoldPredictions !== "NA")
        customData.tracks = customData.tracks.concat(alphafoldPredictions.tracks);
    if (structuralMotifs)
        customData.tracks = customData.tracks.concat(structuralMotifs.tracks);
    if (sequenceMotifs)
        customData.tracks = customData.tracks.concat(sequenceMotifs.tracks);
    if (ligandMotifs)
        customData.tracks = customData.tracks.concat(ligandMotifs.tracks);
    if (subdomains)
        customData.tracks = customData.tracks.concat(subdomains.tracks);
    if (ligandBindingSites && ligandBindingSites !== "NA")
        customData.tracks = customData.tracks.concat(ligandBindingSites.tracks);
    if (functionalFeatures)
        customData.tracks = customData.tracks.concat(functionalFeatures.tracks);

    if (interactionInterfaces && interactionInterfaces !== "NA")
        customData.tracks = customData.tracks.concat(interactionInterfaces.tracks);
    if (annotations && annotations !== "NA")
        customData.tracks = customData.tracks.concat(annotations.tracks);


    return <ProtvistaPdbDisplay data={customData} uniprotId={uniprotId} />

}

// export const query = graphql`
// query jsonFileNames {
//     allFile(sort: {fields: name}, filter: {relativeDirectory: {eq: "alphafolds"}, ext:{eq:".json"}}) {
//       nodes {
//         name
//         relativeDirectory
//       }
//     }
//   }`