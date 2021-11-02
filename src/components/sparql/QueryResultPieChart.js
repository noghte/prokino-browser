import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';
import { getSparqlQueryLabel } from '../StringHelper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function renderPiechart(data) {
  function createLabel(label, partialValue, totalValue) {
    label = getSparqlQueryLabel(label, ["http://prokino.uga.edu/prokino#", "group"])

    const percentage = (100 * partialValue) / totalValue;
    return label + " (" + percentage.toFixed(1).toString() + "%)";
  }
  const MAX_ITEMS = 10;
  let chartData = [];
  if (data.results.bindings.length > 0) {
    let dataItems = [];
    for (let v of data.results.bindings) {
      console.log(v);
      let hasIntegerValue = false;
      let dataItem = {}
      Object.keys(v).map(function (row) {
        if (v[row].datatype === 'http://www.w3.org/2001/XMLSchema#integer')
        {
          hasIntegerValue = true;
          dataItem.value = v[row]["value"];
        }
        else
          dataItem.label = v[row]["value"];
      });

      if (!hasIntegerValue)
      {
        toast("The query does not contain data compatible with a pie chart.",{ type: toast.TYPE.ERROR, position: toast.POSITION.TOP_CENTER, autoClose: 5000 });
        return <div>
          <ToastContainer newestOnTop closeOnClick />
        </div>
      }

      dataItems.push(dataItem);

    }
    dataItems = dataItems.sort((a, b) => (parseInt(a.value) < parseInt(b.value)) ? 1 : -1)
    dataItems = dataItems.slice(0, MAX_ITEMS);

    const totalValue = dataItems.reduce(function (accumulator, item) {
      return accumulator + parseInt(item.value);
    }, 0);

    dataItems.forEach(dataItem => {
      const val = parseInt(dataItem["value"])
      chartData.push({ "x": createLabel(dataItem["label"], val, totalValue), "y": val });
    });
    const extraItems = dataItems.slice(-1 * (dataItems.length - MAX_ITEMS)); //get all items, except first MAX_ITEMS
    if (extraItems.length>0)
    {
      const extraSum = extraItems.reduce((n, {value}) => n + parseInt(value), 0);
      chartData.push({"x":"Other","y":extraSum});
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
  else
    return ("")
}
export default function QueryResultPiechart(props) {
  return renderPiechart(props.data);
}