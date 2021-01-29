
import React, { useEffect, useState } from 'react';
import { PDB_BESTSTRUCTURE_ENDPOINT } from '../../../components/prokino/Endpoints'
import axios from 'axios';

export default function MolstarViewer({ viewerWidth = 900, viewerHeight = 300, uniprotId, pdbMoleculeId }) { //{protein}

const [pdbBest,setPdbBest]= useState(null);
useEffect(() => {
    const getPdbBestStructure = async () => {
        
        let url = `${PDB_BESTSTRUCTURE_ENDPOINT}/${uniprotId}`;
        const result = await axios.get(url);
        // console.log("pdb data",result.data);
        setPdbBest(result.data);
    };
    if (uniprotId)
        getPdbBestStructure();
}, [uniprotId]);

if (uniprotId)
    {
        if (!pdbBest)
            return <p>Getting data from PDB...</p>
        console.log("PDB",pdbBest)
        return <div style={{ width: viewerWidth, height: viewerHeight, position: 'relative' }}>
        <pdbe-molstar id="pdbeMolstarComponent"
            molecule-id={pdbBest[`${uniprotId}`][0].pdb_id}
            hide-controls="true"
            subscribe-events="true" 
            bg-color-r="255" bg-color-g="255" bg-color-b="255"
            >
        </pdbe-molstar>
    </div>
    }
    else if (pdbMoleculeId)
    {
        return <div style={{ width: viewerWidth, height: viewerHeight, position: 'relative' }}>
        <pdbe-molstar id="pdbeMolstarComponent"
            molecule-id={pdbMoleculeId}
            hide-controls="true"
            subscribe-events="true" 
            bg-color-r="255" bg-color-g="255" bg-color-b="255"
            >
        </pdbe-molstar>
    </div>
    }
    else
        return <p>Loading...</p>
    
    
}