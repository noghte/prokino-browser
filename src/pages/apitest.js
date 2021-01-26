import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from  "./apitest.module.css";
function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = style.number;
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = style.key;
            } else {
                cls = style.string;
            }
        } else if (/true|false/.test(match)) {
            cls = style.boolean;
        } else if (/null/.test(match)) {
            cls = style.default;
        }
        return match;
    });
}

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
         <pre>{syntaxHighlight(strResult)}</pre> 
    </div>
}
