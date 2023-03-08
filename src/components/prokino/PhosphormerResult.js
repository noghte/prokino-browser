import axios from 'axios';
import React, { useState, useEffect } from 'react';

function cleanQuery(query) {
    return query;
}
// http://97.81.92.208:2500/predict?kinase=abc12345678&substrate=abcdef
export default function PhosformerResult(props) {
    const PHOS_ENDPOINT = `http://155.138.225.113:5007/api`;
    const [phosformerData, setPhosformerData] = useState(null);
    const kinase = cleanQuery(props.kinase);
    const peptide = cleanQuery(props.peptide);

    useEffect(() => {
        const res = async () => {
            let url = `${PHOS_ENDPOINT}/predict_one/kinase=${kinase}&peptide=${peptide}`;
            try {
                const result = await axios.get(url);
                console.log("res=",result)
                setPhosformerData(result.data);
            } catch (error) {
                setPhosformerData({"comment": "Error", "pred": "N/A"});
            }
        }
        res();
    }, [kinase,peptide]);

    if (!phosformerData)
        return <p>Calculating the prediction ...</p>

    return <div>
        {phosformerData.comment}
        <br />
        Prediction: {phosformerData.pred}
    </div>

}