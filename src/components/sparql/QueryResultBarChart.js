import React from 'react';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryLabel, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip } from 'victory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function renderBarchart(data) {
  const MAX_ITEMS = 20;
  let chartData = [];
  if (data.results.bindings.length > 0) {
    //const keys = Object.keys(data.results.bindings[0]);
    // for (let v of data.results.bindings)
    // {
    //   console.log(v);
    //   if (parseInt(v["No_Mutations"]["value"])>1000)
    //     chartData.push({"x":v["CancerType"]["value"],"y":parseInt(v["No_Mutations"]["value"])});
    // } 
    let dataItems = [];
    for (let v of data.results.bindings) {
      console.log(v);
      let dataItem = {}
      let hasIntegerValue = false;
      Object.keys(v).map(function (row) {
        if (v[row].datatype === 'http://www.w3.org/2001/XMLSchema#integer'
          || v[row].datatype === 'http://www.w3.org/2001/XMLSchema#float') {
          hasIntegerValue = true;
          const literalObj = Object.values(v).find(element => element.type == 'literal');
          dataItem.value = v[row]["value"];
          if (literalObj)
            dataItem.label = literalObj.value;
          else
            dataItem.label = v[row]["value"];
        }
      });
      if (!hasIntegerValue) {
        toast("The query does not contain data compatible with a bar chart.", { type: toast.TYPE.ERROR, position: toast.POSITION.TOP_CENTER, autoClose: 5000 });
        return <div>
          <ToastContainer newestOnTop closeOnClick />
        </div>
      }
      dataItems.push(dataItem);

    }
    dataItems = dataItems.sort((a, b) => (parseFloat(a.value) < parseFloat(b.value)) ? 1 : -1)
    dataItems = dataItems.slice(0, MAX_ITEMS);

    dataItems.forEach(dataItem => {
      chartData.push({ "x": dataItem["label"], "y": parseFloat(dataItem["value"]) });
    });

    const extraItems = dataItems.slice(-1 * (dataItems.length - MAX_ITEMS)); //get all items, except first MAX_ITEMS
    if (extraItems.length > 0) {
      const extraSum = extraItems.reduce((n, { value }) => n + parseFloat(value), 0);
      chartData.push({ "x": "Other", "y": extraSum });
    }

    return (
      <>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={1}
          horizontal={false}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => `${datum.y}`}
              labelComponent={
                <VictoryTooltip
                  style={{ fontSize: "5px" }}
                  pointerLength={10}
                  flyoutStyle={{
                    stroke: "black",
                    strokeWidth: 1,
                    fill: "white"
                  }}
                />
              }
            />
          }
        >
          <VictoryAxis
            tickLabelComponent={<VictoryLabel style={{ textAnchor: 'end', fontSize: '6px' }} angle={0} />}
            // tickValues={getYAxisValues()}
            tickCount={12}
            style={{
              axis: { stroke: '#000' },
              // axisLabel: { fontSize: 8 },
              ticks: { stroke: '#000' },
              grid: { stroke: '#B3E5FC', strokeWidth: 0.25 }
            }} dependentAxis
          />
          <VictoryAxis
            style={{
              axis: { stroke: '#000' },
              axisLabel: { fontSize: 16 },
              ticks: { stroke: '#000' },
              tickLabels: { fontSize: 5, padding: 1, angle: -60, verticalAnchor: 'middle', textAnchor: 'end' }
            }}
          />

          <VictoryBar
            style={{ data: { fill: "#c43a31", width: 5 } }}
            data={chartData}
            alignment="start"
          />


        </VictoryChart>
      </>
    )

  }
  else
    return ("")
}
export default function QueryResultBarChart(props) {

  return renderBarchart(props.data);

}



