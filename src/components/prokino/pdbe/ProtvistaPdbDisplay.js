import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

export default function ProtvistaPdbDisplay({ data, uniprotId }) { //{protein}
    let pv1 = useRef(null)
    useEffect(() => {
        if (pv1.current)
            // console.log("data",data)
            pv1.current.viewerdata=data; 
    },[])
    if (data)
        {
            return <protvista-pdb ref={pv1} custom-data="true" accession={uniprotId} id="pv1" ></protvista-pdb>;
        }
   else return <p>Component loading...</p>
    
    
}

