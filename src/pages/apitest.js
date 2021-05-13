import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ApiTest() {
    const url = `http://vulcan.cs.uga.edu:8080/prokinosrv/rest/entity/prokino:Human_EGFR`;
    
    // const url = `http://vulcan.cs.uga.edu/prokinosrv/classification/kinase`;
    //const url = `http://vulcan.cs.uga.edu/prokinosrv/entity/prokino:Human_EGFR`;
    
    const [result, setResult] = useState({});
    useEffect(() => {
        const res = async () => {
            const result = await axios.get(url);
            setResult(result.data);
        }
        res();
    }
        , []);

    const strResult = JSON.stringify(result, null, 2);
    return <div>
        <h3>{url}</h3>
         <pre>{strResult}</pre> 
    </div>
}
