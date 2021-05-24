
import React, { useEffect, useState, useRef } from 'react';
import { withPrefix } from "gatsby";
import { Helmet } from "react-helmet";
// import * as pdbeMolstar from "pdbe-molstar";
//import { PDB_BESTSTRUCTURE_ENDPOINT } from '../../../components/prokino/Endpoints'
// import axios from 'axios';

export default function MolstarViewer({ viewerWidth = 900, viewerHeight = 300, uniprotId, cifPath }) { //{protein}

    const [isReady, setIsReady] = React.useState(false);

    //const [pdbBest,setPdbBest]= useState(null);
    // useEffect(() => {
    //     const getPdbBestStructure = async () => {
    //         let url = `${PDB_BESTSTRUCTURE_ENDPOINT}/${uniprotId}`;
    //         const result = await axios.get(url);
    //         // console.log("pdb data",result.data);
    //         setPdbBest(result.data);
    //     };

    //     if (uniprotId && !cifPath)
    //         getPdbBestStructure();

    // }, [uniprotId]);
    // const [options, setOptions] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 1000)
        setIsReady(false)
    }, [cifPath]);
    if (!isReady)
        return <div>Loading ...</div>
    if (cifPath) {
        console.log("cifPath", cifPath)
        if (cifPath == "/cif/clear/clear.cif")
            return <p>Cleared</p>

        return  <div style={{ width: viewerWidth, height: viewerHeight, position: 'relative' }}>
        <Helmet>
            <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.1.0.css" />
            <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-1.1.0.js"></script>
        </Helmet>
        {/* <MolstarViewerDisplay viewerWidth={900} viewerHeight={300} cifPath={cifPath} R={R} G={G} B={B} /> */}
          <pdbe-molstar id="pdbeMolstarComponent"
                // ref={viewerInstance}
                custom-data-url={withPrefix(cifPath)}
                custom-data-format="cif"
                hide-controls="false"
                subscribe-events="true"
                bg-color-r="255" bg-color-g="255" bg-color-b="255">
            </pdbe-molstar>
        </div>
    }



    else //if (uniprotId) // do not call pdb api
    {
        return <div>Not Available</div>
    }


}

