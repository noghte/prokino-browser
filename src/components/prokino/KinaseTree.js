import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as d3 from "d3";


// function cleanQuery(query) {
//     return query;
// }

export default function KinaseTree(props) {
    // const PHOS_ENDPOINT = `http://97.81.92.208:2500/predict`;
    const [phosformerData, setPhosformerData] = useState("someval");
    // const kinase = cleanQuery(props.kinase);
    // const substrate = cleanQuery(props.substrate);

    useEffect(() => {
        const res = async () => {

            try {
                let margin = {top: 20, right: 120, bottom: 20, left: 120}
                let width = 960 - margin.right - margin.left;
                let height = 800 - margin.top - margin.bottom;

                let svg = await d3.select("#ktree").append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            } catch (error) {
                console.error(error)
            }
        }
        res();
    }, []);

    if (!phosformerData)
        return <p>Calculating the prediction ...</p>

    return <div>

        Hello!
        <div className="row-fluid pagination-centered" id="ktree"></div>
    </div>

}