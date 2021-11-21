import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';
import { getSparqlQueryLabel } from '../StringHelper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function QueryResultPiechart(props) {

  function createLabel(label, partialValue, totalValue) {
    label = getSparqlQueryLabel(label, ["http://prokino.uga.edu/prokino#", "group"])

    const percentage = (100 * partialValue) / totalValue;
    return label + " (" + percentage.toFixed(1).toString() + "%)";
  }
  // const MAX_ITEMS = 10;
  let chartData = [];
  let dataItems = [];
  for (let row of props.data.bindings) {
    let dataItem = {}
    dataItem.label = row[props.chartProperties.selectedLabel] ? row[props.chartProperties.selectedLabel]["value"] : '';
    dataItem.value = row[props.chartProperties.selectedValue] ? row[props.chartProperties.selectedValue]["value"] : '0';
    dataItems.push(dataItem);
  }
  dataItems = dataItems.sort((a, b) => (parseFloat(a.value) < parseFloat(b.value)) ? 1 : -1);
  const totalValue = dataItems.reduce(function (accumulator, item) {
    return accumulator + parseFloat(item.value);
  }, 0);
  const slicedDataItems = dataItems.slice(0, props.maxItems);

  slicedDataItems.forEach(d => {
    const val = parseFloat(d["value"])
    chartData.push({ "x": createLabel(d["label"], val, totalValue), "y": val });
  });
//  const extraItems = dataItems.slice(-1 * (dataItems.length - props.maxItems)); //get all items, except first MAX_ITEMS
 const extraItems = dataItems.filter(ar => !slicedDataItems.find(rm => (rm.label === ar.label))) //get all items, except first MAX_ITEMS
  if (extraItems.length > 0) {
    const extraSum = extraItems.reduce((n, { value }) => n + parseFloat(value), 0);
    chartData.push({ "x": createLabel( "Other", extraSum,totalValue), "y": extraSum });
  }

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

