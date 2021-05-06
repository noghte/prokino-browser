import React, { useEffect, useState, useRef } from 'react';
import { Link, withPrefix } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from 'react-helmet'

function DemoPdbeRef() {
    const [dataLoaded, setDataLoaded] = useState(false)
    const [customData, setCustomData] = useState(null);
    const [annotations,setAnnotations]= useState([null]);
    const [sequence,setSequence]= useState(null);
    function defineAndSetCustomData()
    {
        let variationData = "N/A";
        let sequenceData = "N/A";
        let seqConservationData="N/A";
        let c = {
            displayNavigation: true, // Set to false to hide navigation scale
            displaySequence: true, // Set to false to hide sequence track
            sequence: sequenceData.residues,//'MPNFSGNWKIIRSENFEELLKVLGVNVMLRKIAVAAASKPAVEIKQEGDTFYIKTSTTVRTTEINFKVGEEFEEQTVDGRPCKSLVKWESENKMVCEQKLLKGEGPKTSWTRELTNDGELILTMTADDVVCTRVYVRE', //Protein sequence
            length: 138,//prokinoSequence.length, //138, // Length of the sequence
            offset: 1, // Offset navigation scale start. Example offset:10 will display the navigation start from 10 instead of default 1.
            tracks: [ ],
            sequenceConservation: seqConservationData!=="N/A" ? seqConservationData:[], // Set this property to display your own sequence conservation data. Refer comments at the top for data structure.
            variants: variationData!=="N/A" ? variationData:[], // Set this property to display your own variation data. Refer comments at the top for data structure.
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
        }
        // c.tracks.annotations = annotations;
        // c.tracks.sequence = sequence;
        setCustomData(c)
    }
    const pv1 = useRef(null);
    useEffect(()=>{
            let ant = '[{ "startResidue": 4, "endResidue": 12, "type": "beta-strand", "name": "beta1 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 4, "endResidue": 25, "type": "Subdomain", "name": "subdomain I", "__typename": "SeqAnnotationInfo" }, { "startResidue": 4, "endResidue": 81, "type": "N-Lobe", "name": "N-lobe", "__typename": "SeqAnnotationInfo" }, { "startResidue": 9, "endResidue": 9, "type": "KeyAA", "name": "beta1-lysine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 11, "endResidue": 16, "type": "Glycine Loop", "name": "glycine-rich loop", "__typename": "SeqAnnotationInfo" }, { "startResidue": 17, "endResidue": 17, "type": "KeyAA", "name": "beta2-glutamate", "__typename": "SeqAnnotationInfo" }, { "startResidue": 17, "endResidue": 23, "type": "beta-strand", "name": "beta2 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 18, "endResidue": 18, "type": "C-Spine", "name": "C-spine C8", "__typename": "SeqAnnotationInfo" }, { "startResidue": 26, "endResidue": 39, "type": "Subdomain", "name": "subdomain II", "__typename": "SeqAnnotationInfo" }, { "startResidue": 28, "endResidue": 36, "type": "beta-strand", "name": "beta3 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 31, "endResidue": 31, "type": "C-Spine", "name": "C-spine C7", "__typename": "SeqAnnotationInfo" }, { "startResidue": 33, "endResidue": 33, "type": "KeyAA", "name": "beta3-lysine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 40, "endResidue": 52, "type": "alpha-helix", "name": "C-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 40, "endResidue": 54, "type": "Subdomain", "name": "subdomain III", "__typename": "SeqAnnotationInfo" }, { "startResidue": 46, "endResidue": 46, "type": "KeyAA", "name": "alphaC-glutamate", "__typename": "SeqAnnotationInfo" }, { "startResidue": 50, "endResidue": 50, "type": "R-Spine", "name": "R-spine R4", "__typename": "SeqAnnotationInfo" }, { "startResidue": 53, "endResidue": 60, "type": "alphaC-beta4 Loop", "name": "alphaC-beta4 loop", "__typename": "SeqAnnotationInfo" }, { "startResidue": 55, "endResidue": 57, "type": "Motif", "name": "HxN Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 55, "endResidue": 69, "type": "Subdomain", "name": "subdomain IV", "__typename": "SeqAnnotationInfo" }, { "startResidue": 59, "endResidue": 59, "type": "R-Spine Shell", "name": "R-spine Shell Sh1", "__typename": "SeqAnnotationInfo" }, { "startResidue": 60, "endResidue": 60, "type": "KeyAA", "name": "beta4-arginine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 61, "endResidue": 61, "type": "R-Spine", "name": "R-spine R3", "__typename": "SeqAnnotationInfo" }, { "startResidue": 61, "endResidue": 66, "type": "beta-strand", "name": "beta4 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 70, "endResidue": 75, "type": "beta-strand", "name": "beta5 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 70, "endResidue": 92, "type": "Subdomain", "name": "subdomain V", "__typename": "SeqAnnotationInfo" }, { "startResidue": 73, "endResidue": 73, "type": "R-Spine Shell", "name": "R-spine Shell Sh3", "__typename": "SeqAnnotationInfo" }, { "startResidue": 75, "endResidue": 75, "type": "Gatekeeper", "name": "gatekeeper", "__typename": "SeqAnnotationInfo" }, { "startResidue": 75, "endResidue": 82, "type": "Linker", "name": "linker", "__typename": "SeqAnnotationInfo" }, { "startResidue": 76, "endResidue": 76, "type": "KeyAA", "name": "beta5-glutamate", "__typename": "SeqAnnotationInfo" }, { "startResidue": 83, "endResidue": 83, "type": "C-Spine", "name": "C-spine C6", "__typename": "SeqAnnotationInfo" }, { "startResidue": 83, "endResidue": 90, "type": "alpha-helix", "name": "D-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 83, "endResidue": 280, "type": "C-Lobe", "name": "C-lobe", "__typename": "SeqAnnotationInfo" }, { "startResidue": 93, "endResidue": 115, "type": "Subdomain", "name": "subdomain VIa", "__typename": "SeqAnnotationInfo" }, { "startResidue": 95, "endResidue": 114, "type": "alpha-helix", "name": "E-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 116, "endResidue": 131, "type": "Subdomain", "name": "subdomain VIb", "__typename": "SeqAnnotationInfo" }, { "startResidue": 117, "endResidue": 118, "type": "beta-strand", "name": "beta6 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 119, "endResidue": 119, "type": "R-Spine", "name": "R-spine R2", "__typename": "SeqAnnotationInfo" }, { "startResidue": 119, "endResidue": 121, "type": "Motif", "name": "HRD Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 119, "endResidue": 126, "type": "Catalytic Loop", "name": "catalytic loop", "__typename": "SeqAnnotationInfo" }, { "startResidue": 127, "endResidue": 127, "type": "C-Spine", "name": "C-spine C5", "__typename": "SeqAnnotationInfo" }, { "startResidue": 127, "endResidue": 129, "type": "beta-strand", "name": "beta7 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 128, "endResidue": 128, "type": "C-Spine", "name": "C-spine C4", "__typename": "SeqAnnotationInfo" }, { "startResidue": 129, "endResidue": 129, "type": "C-Spine", "name": "C-spine C3", "__typename": "SeqAnnotationInfo" }, { "startResidue": 133, "endResidue": 148, "type": "Subdomain", "name": "subdomain VII", "__typename": "SeqAnnotationInfo" }, { "startResidue": 135, "endResidue": 137, "type": "beta-strand", "name": "beta8 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 136, "endResidue": 136, "type": "KeyAA", "name": "beta8-lysine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 139, "endResidue": 141, "type": "Motif", "name": "DFG Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 139, "endResidue": 189, "type": "Activation Segment", "name": "activation segment", "__typename": "SeqAnnotationInfo" }, { "startResidue": 140, "endResidue": 140, "type": "R-Spine", "name": "R-spine R1", "__typename": "SeqAnnotationInfo" }, { "startResidue": 142, "endResidue": 186, "type": "Activation Loop", "name": "activation loop", "__typename": "SeqAnnotationInfo" }, { "startResidue": 144, "endResidue": 145, "type": "beta-strand", "name": "beta9 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 149, "endResidue": 193, "type": "Subdomain", "name": "subdomain VIII", "__typename": "SeqAnnotationInfo" }, { "startResidue": 187, "endResidue": 189, "type": "Motif", "name": "APE Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 194, "endResidue": 221, "type": "Subdomain", "name": "subdomain IX", "__typename": "SeqAnnotationInfo" }, { "startResidue": 199, "endResidue": 214, "type": "alpha-helix", "name": "F-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 201, "endResidue": 201, "type": "KeyAA", "name": "alphaF-aspartate", "__typename": "SeqAnnotationInfo" }, { "startResidue": 201, "endResidue": 201, "type": "R-Spine", "name": "R-spine R0", "__typename": "SeqAnnotationInfo" }, { "startResidue": 201, "endResidue": 203, "type": "Motif", "name": "DxW Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 208, "endResidue": 208, "type": "C-Spine", "name": "C-spine C2", "__typename": "SeqAnnotationInfo" }, { "startResidue": 212, "endResidue": 212, "type": "C-Spine", "name": "C-spine C1", "__typename": "SeqAnnotationInfo" }, { "startResidue": 222, "endResidue": 248, "type": "Subdomain", "name": "subdomain X", "__typename": "SeqAnnotationInfo" }, { "startResidue": 224, "endResidue": 233, "type": "alpha-helix", "name": "G-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 233, "endResidue": 247, "type": "CMGC Insert", "name": "CMGC insert", "__typename": "SeqAnnotationInfo" }, { "startResidue": 249, "endResidue": 280, "type": "Subdomain", "name": "subdomain XI", "__typename": "SeqAnnotationInfo" }, { "startResidue": 251, "endResidue": 260, "type": "alpha-helix", "name": "H-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 268, "endResidue": 268, "type": "KeyAA", "name": "alphaHI-arginine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 272, "endResidue": 275, "type": "alpha-helix", "name": "I-helix", "__typename": "SeqAnnotationInfo" }]'
            setAnnotations(ant)
            let seq='[[                    {                        "aa": "L",                        "bits": 2.89973                    },                    {                        "aa": "V",                        "bits": 0.01874                    },                    {                        "aa": "I",                        "bits": 0.011                    }                ],                [                    {                        "aa": "T",                        "bits": 0.31413                    },                    {                        "aa": "V",                        "bits": 0.31265                   }]]'
            setSequence(seq)
            setDataLoaded(true)
            //defineAndSetCustomData();
    },[])
    // useEffect(() => {
    //     if (pv1.current && customData) {

    //         setDataLoaded(true);
    //         pv1.current.viewerdata = customData;
    //         console.log("done");
    //         setDataLoaded(true);
    //     }
    // }, [pv1,customData])


    if (dataLoaded)
        return (<Layout>
            <Helmet>
                <script src={withPrefix('js/ncats-protvista-viewer-bundle.js')} type="text/javascript" />
            </Helmet>
            {/* <div className="silo">
        <ncats-protvista-legend></ncats-protvista-legend>
        </div> */}
            <div className="silo">
                {/* <ncats-protvista-viewer id="pv1" annotations={annotations} sequence={sequence}></ncats-protvista-viewer> */}
                <ncats-protvista-viewer id="pv1" viewerdata={customData} custom-data="true"></ncats-protvista-viewer>
            </div>

            <Link to="/">Go back to the homepage</Link>
        </Layout>)
    else
        return <p>Load..</p>

}

export default DemoPdbeRef
