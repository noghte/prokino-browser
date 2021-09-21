import React from 'react';
import { VictoryChart,VictoryBar,VictoryTheme,VictoryLabel,VictoryAxis,VictoryVoronoiContainer,VictoryTooltip } from 'victory';

function renderBarchart(data)
{
 
  let chartData = [];
  if (data.results.bindings.length>0)
  {
    //const keys = Object.keys(data.results.bindings[0]);
    // for (let v of data.results.bindings)
    // {
    //   console.log(v);
    //   if (parseInt(v["No_Mutations"]["value"])>1000)
    //     chartData.push({"x":v["CancerType"]["value"],"y":parseInt(v["No_Mutations"]["value"])});
    // } 
    let dataItems = [];
    for (let v of data.results.bindings)
    {
      console.log(v);
      let dataItem = {}
      Object.keys(v).map(function(row) {
        if (v[row].datatype==='http://www.w3.org/2001/XMLSchema#integer')
        {
            dataItem.value = v[row]["value"];
            dataItem.label = v[row]["value"];
        }
      });
      dataItems.push(dataItem);
        
    } 
    dataItems.forEach(dataItem => {
      chartData.push({"x":dataItem["label"],"y":parseInt(dataItem["value"])});
    });   
    
  return (
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
      tickLabelComponent={<VictoryLabel style={{textAnchor:'end', fontSize: '6px'}} angle={0}/>}
      // tickValues={getYAxisValues()}
      tickCount={12}
      style={{ axis: { stroke: '#000' },
      // axisLabel: { fontSize: 8 },
      ticks: { stroke: '#000' },
      grid: { stroke: '#B3E5FC', strokeWidth: 0.25 }
    }} dependentAxis
  />
  <VictoryAxis
    style={{ axis: { stroke: '#000' },
      axisLabel: { fontSize: 16 },
      ticks: { stroke: '#000' },
      tickLabels: { fontSize: 5, padding: 1, angle:-60, verticalAnchor: 'middle', textAnchor:'end' }
    }}
  />

<VictoryBar
    style={{ data: { fill: "#c43a31", width: 5} }}
    data={chartData}
    alignment="start"
  />


</VictoryChart>
  )

  }
  else
      return ("")
}
export default function QueryResultBarChart(props) {
    
  return renderBarchart(props.data);

    } 

    

    