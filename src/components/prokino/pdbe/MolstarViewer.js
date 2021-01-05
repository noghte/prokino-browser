
import React from "react";

export default function MolstarViewer({ viewerWidth = 900, viewerHeight = 300, pdbMoleculeId }) { //{protein}

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