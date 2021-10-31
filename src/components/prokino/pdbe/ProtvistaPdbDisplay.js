import React, { useEffect, useState, useRef } from 'react';
// import ProtvistaPdbNavigation from "protvista-prokino";
// import ProtvistaPdbTrack from './custom-pv-components/pdb-track'
// import ProtvistaPdbScHistogram from './custom-pv-components/pdb-sc-histogram'
// import ProtvistaPdbSeqConservation from './custom-pv-components/pdb-seq-conservation'
// import ProtvistaPdbVariationGraph from './custom-pv-components/pdb-variation-graph'
// import ProtvistaPdbVariation from './custom-pv-components/pdb-variation'
// import ProtvistaPdbTooltip from './custom-pv-components/pdb-tooltip'
// import ProtvistaPDB from './protvista-pdb';
// import { loadComponent } from "./loadComponent";

export default function ProtvistaPdbDisplay({ data, uniprotId }) { //{protein}
    // const [show, setShow] = React.useState(false)
    let pv1 = useRef(null)
    useEffect(() => {
        if (pv1.current)
            // console.log("data",data)
            pv1.current.viewerdata = data;
    }, [])
    // React.useEffect(() => {
    //     setTimeout(() => {
    //       setShow(true)
    //     }, 2000)
    //   }, [show])
    if (data) { // && show
        return <div>
            <protvista-pdb ref={pv1} custom-data="true" accession={uniprotId} id="pv1" ></protvista-pdb>

            </div>
    }
    else return <p>Component loading...</p>
}