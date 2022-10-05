import axios from 'axios';
import React, { useState, useEffect } from 'react';

function cleanQuery(query) {
    return query;
}
// http://97.81.92.208:2500/predict?kinase=abc12345678&substrate=abcdef
export default function PhosformerResult(props) {
    const PHOS_ENDPOINT = `http://97.81.92.208:2500/predict`;
    const [phosformerData, setPhosformerData] = useState(null);
    const kinase = cleanQuery(props.kinase);
    const substrate = cleanQuery(props.substrate);

    useEffect(() => {
        const res = async () => {
            let url = `${PHOS_ENDPOINT}?kinase=${kinase}&substrate=${substrate}`;
            try {
                const result = await axios.get(url);
                console.log("res=",result)
                setPhosformerData(result.data);
            } catch (error) {
                setPhosformerData({"comment": "Error", "pred": "N/A"});
            }
        }
        res();
    }, []);

    if (!phosformerData)
        return <p>Calculating the prediction ...</p>

    return <div>
        {phosformerData.comment}
        <br />
        Prediction: {phosformerData.pred}
    </div>

}