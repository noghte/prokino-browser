import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';
import {getSparqlQueryLabel} from '../StringHelper'


function renderPiechart(data) {
  function createLabel(label, partialValue, totalValue) {
 label = getSparqlQueryLabel(label,["http://prokino.uga.edu/prokino#","group"])

    const percentage = (100 * partialValue) / totalValue;
    return label + " (" + percentage.toFixed(1).toString() + "%)";
  }
  let chartData = [];
  if (data.results.bindings.length > 0) {
    let dataItems = [];
    for (let v of data.results.bindings) {
      console.log(v);
      let dataItem = {}
      Object.keys(v).map(function (row) {
        if (v[row].datatype === 'http://www.w3.org/2001/XMLSchema#integer')
          dataItem.value = v[row]["value"];
        else
          dataItem.label = v[row]["value"];
      });
      dataItems.push(dataItem);

    }
    const totalValue = dataItems.reduce(function (accumulator, item) {
      return accumulator + parseInt(item.value);
    }, 0);

    dataItems.forEach(dataItem => {
      const val = parseInt(dataItem["value"])
      chartData.push({ "x": createLabel(dataItem["label"], val, totalValue), "y": val });
    });

    return (

      <VictoryPie
        // style={{ data: { fill: "#c43a31", width: 5} }}
        colorScale={"qualitative"}
        data={chartData}
        alignment="start"
        height={250}
        labelComponent={<VictoryLabel
          style={[
            { fill: "blue", fontSize: 5 },
          ]}
        />}
      />
    )

  }
  else
    return ("")
}
export default function QueryResultPiechart(props) {
  return renderPiechart(props.data);
}