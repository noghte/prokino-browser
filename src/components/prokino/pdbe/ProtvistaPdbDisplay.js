import React, { useEffect, useState, useRef } from 'react';


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
            <protvista-pdb ref={pv1} custom-data="true" accession={uniprotId} id="pv1" ></protvista-pdb>;

            </div>
    }
    else return <p>Component loading...</p>


}

