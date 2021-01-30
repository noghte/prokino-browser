
import React, { useEffect, useState, useRef } from 'react';
import { PDB_BESTSTRUCTURE_ENDPOINT } from '../../../components/prokino/Endpoints'
import axios from 'axios';

export default function AnnotationViewer({ prokinoSequence, sequenceData, uniprotId }) { //{protein}

    console.log("ps", prokinoSequence);
    console.log("sd", sequenceData.residues);

    const [seqConservationData, setSeqConservationData] = useState(null);//an array of start and end position, in each cell of the array, there is another array of amino acids
    const [variationData, setVariationData] = useState(null);
    const [ligandBindingSites, setLigandBindingSites] = useState(null);
    const [interactionInterfaces, setInteractionInterfaces] = useState(null);
    const [annotations, setAnnotations] = useState(null);
    

    const [pdbBest, setPdbBest] = useState(null);


    const pv1 = useRef(null);

    useEffect(() => { //when uniprotId is ready, call APIs to get data for the annotation viewer tracks

        const getPdbBestStructure = async () => {
            let url = `${PDB_BESTSTRUCTURE_ENDPOINT}/${uniprotId}`;
            const result = await axios.get(url);
            setPdbBest(result.data);
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
            catch { setInteractionInterfaces("NA"); }
        }
        const callAnnotationsAPI = async () => {
            let url = `https://www.ebi.ac.uk/pdbe/graph-api/uniprot/protvista/annotations/${uniprotId}`;
            try {
                const result = await axios.get(url);
                setAnnotations(result.data[`${uniprotId}`]);
            }
            catch { setAnnotations("NA"); }
        }
        //:uniprotId
        if (uniprotId) {
            if (!pdbBest) getPdbBestStructure();
            if (!seqConservationData) callSequenceConservationAPI();
            if (!variationData) callVariationAPI();
            if (!ligandBindingSites) callLigandBindingSitesAPI();
            if (!interactionInterfaces) callInteractionInterfaces();
            if (!annotations) callAnnotationsAPI();
        }

    }, [uniprotId]);

    //When everythin is ready (API calls done, and web-component instance is recognized)
    useEffect(() => {
        if (pv1.current && !pv1.current.viewerdata && seqConservationData && ligandBindingSites && variationData && interactionInterfaces && annotations) {
            pv1.current.viewerdata = customData;
            console.log(pv1.current);

        }
    }, [pv1, seqConservationData, variationData, ligandBindingSites, interactionInterfaces, annotations]);

    function getStructuralMotifs() {
        const structuralMotifs = sequenceData.motifs.filter(m => m.entityClass == "prokino:StructuralMotif");
        //returning an array grouped by localName
        const results = structuralMotifs.reduce(function (r, a) {
            const key = a.localName || 'unknown';
            r[key] = r[key] || [];
            r[key] = a;

            a['motifData'] = a['motifData'] || [];
            a.motifs.forEach(sm => {
                a['motifData'].push(sequenceData.motifs.filter(item => item.localName === sm)[0]);
            });

            return r;
        }, {});
        return Object.values(results);

        // .forEach( motif=>
        //     {
        //     }
        //);
    }

    let customData = {
        displayNavigation: true, // Set to false to hide navigation scale
        displaySequence: true, // Set to false to hide sequence track
        sequence: sequenceData.residues,//'MPNFSGNWKIIRSENFEELLKVLGVNVMLRKIAVAAASKPAVEIKQEGDTFYIKTSTTVRTTEINFKVGEEFEEQTVDGRPCKSLVKWESENKMVCEQKLLKGEGPKTSWTRELTNDGELILTMTADDVVCTRVYVRE', //Protein sequence
        length: 138,//prokinoSequence.length, //138, // Length of the sequence
        offset: 1, // Offset navigation scale start. Example offset:10 will display the navigation start from 10 instead of default 1.
        tracks: [ // Array of track objects  (PDBe implementation extends core ProtVista track component. Refer - https://github.com/ebi-webcomponents/nightingale/tree/master/packages/protvista-track#data-array for all the supported track properties )
            // {
            //     label: "Prokino Domains", // Track label
            //     labelType: "text", // Supported values 'text' and 'html'
            //     data: [
            //         {
            //             accession: "d1", // Some unique id
            //             type: "UniProt range", // Displayed in tooltip title
            //             label: "Domain 1", // Expected values 'text' and 'html'
            //             labelTooltip: "Residues mapped to domain 1", // Label tooltip content. Support text and HTML mark-up 
            //             locations: [ // Array of sub-tracks
            //                 {
            //                     fragments: [ // Array of sub-track fragments
            //                         {
            //                             start: 1, // Track start value
            //                             end: 56, // Track end value
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ1 - XYZ56",  // track tooltip content. Support text and HTML mark-up 
            //                             color: "rgb(135,158,247)" // track (fragment) colour, supported rgb and hex code value
            //                         },
            //                         {
            //                             start: 70,
            //                             end: 130,
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ70 - XYZ130",
            //                             color: "rgb(160,174,232)"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             accession: "d2",
            //             type: "UniProt range",
            //             label: "<div><i class='icon icon-generic' data-icon=';' style='color: #000;'></i> <a href='resource.xyz'>Domain 2</a></div>", //HTML strcutured label with font-icons. You can add any HTML markup.
            //             labelTooltip: "<strong>Domain Compound</strong><br><img src='https://www.ebi.ac.uk/pdbe/static/files/pdbechem_v2/REA_200.svg'>", // labelTooltip HTML mark-up example displaying compound image in the tooltip.
            //             locations: [
            //                 {
            //                     fragments: [
            //                         {
            //                             start: 1,
            //                             end: 20,
            //                             tooltipContent: "<strong>Type: domain 2</strong><br>Range: XY1 - XYZ20<br><a href='resource.xyz' style='color:blue'>view details</a>", // tooltipContent HTML mark-up example
            //                             color: "rgb(107,119,39)"
            //                         },
            //                         {
            //                             start: 22,
            //                             end: 137,
            //                             tooltipContent: "Type: domain 2<br>Range: XYZ22 - XYZ137",
            //                             color: "rgb(90,102,23)"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     ]

            // },
            // {
            //     label: "Annotations",
            //     labelType: "text",
            //     labelColor: "rgb(128,128,128)", // Set labelColor to change label background colour
            //     data: [
            //         {
            //             accession: "a1",
            //             type: "UniProt range",
            //             label: "Annotations 1",
            //             labelType: "text",
            //             labelTooltip: "Residues mapped to annotations 1",
            //             labelColor: "rgb(211,211,211)",
            //             color: "rgb(255,99,163)",
            //             locations: [
            //                 {
            //                     fragments: [
            //                         {
            //                             start: 1,
            //                             end: 56,
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ1 - XYZ56"
            //                         },
            //                         {
            //                             start: 70,
            //                             end: 130,
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ70 - XYZ130"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     ]

            // },
            // {
            //     label: "Annotation shapes",
            //     data: [
            //         {
            //             accession: "s1",
            //             type: "UniProt range",
            //             label: "Circle",
            //             color: "rgb(249,166,2)",
            //             shape: 'circle', // supported shapes rectangle|bridge|diamond|chevron|catFace|triangle|wave|hexagon|pentagon|circle|arrow|doubleBar,
            //             locations: [
            //                 {
            //                     fragments: [
            //                         {
            //                             start: 5,
            //                             end: 5,
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ1 - XYZ56",
            //                         },
            //                         {
            //                             start: 9,
            //                             end: 9,
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ70 - XYZ130"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             accession: "s2",
            //             type: "UniProt range",
            //             label: "Diamond",
            //             shape: 'diamond',
            //             color: "rgb(255,99,163)", // Default colour value for all fragments in this track
            //             locations: [
            //                 {
            //                     fragments: [
            //                         {
            //                             start: 5,
            //                             end: 5,
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ1 - XYZ56"
            //                         },
            //                         {
            //                             start: 9,
            //                             end: 9,
            //                             color: "rgb(0,128,129)", // Set colour here for individual shape fragment. This will override the track default colour.
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ70 - XYZ130"
            //                         },
            //                         {
            //                             start: 20,
            //                             end: 20,
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ70 - XYZ130"
            //                         },
            //                         {
            //                             start: 22,
            //                             end: 22,
            //                             tooltipContent: "Type: domain 1<br>Range: XYZ70 - XYZ130"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     ]

            // }
        ],
        sequenceConservation: seqConservationData, // Set this property to display your own sequence conservation data. Refer comments at the top for data structure.
        variants: variationData, // Set this property to display your own variation data. Refer comments at the top for data structure.
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
    };

    //uniprotId = P00533
    //TODO: for now, we ge a list of ids and select the first one, instead, we should select a specific one marked by the API
    //let uniprotId = uniprotIds[0]["v"].filter(x => x.toLowerCase().includes("prokino:uniprot"))[0];
    //uniprotId = uniprotId.split("-")[1];
    //console.log(uniprotId);


    // return <protvista-pdb accession={uniprotId} id="pv1" ></protvista-pdb>
    // if (!seqConservationData || !variationData || !prokinoData)
    //     return <p>Loading..</p>; 
    if (!seqConservationData)
        return <p>Fetching conservation data ...</p>
    if (!variationData)
        return <p>Fetching variation data ...</p>

    if (!ligandBindingSites)
        return <p>Fetching ligand binding sites ...</p>
    if (!interactionInterfaces)
        return <p>Fetching interaction interfaces ...</p>
    if (!annotations)
        return <p>Fetching interaction interfaces ...</p>

    if (ligandBindingSites !== "NA")
        customData.tracks = customData.tracks.concat(ligandBindingSites.tracks);
    if (interactionInterfaces !== "NA")
        customData.tracks = customData.tracks.concat(interactionInterfaces.tracks);
    if (annotations !== "NA")
        customData.tracks = customData.tracks.concat(annotations.tracks);

    console.log(customData.tracks);
    return <protvista-pdb ref={pv1} custom-data="true" accession={uniprotId} id="pv1"></protvista-pdb>;


}