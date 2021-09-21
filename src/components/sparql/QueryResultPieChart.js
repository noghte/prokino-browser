import React from 'react';
import { VictoryPie,VictoryLabel} from 'victory';
function renderPiechart(data)
{
  let chartData = [];
  if (data.results.bindings.length>0)
  {
    let dataItems = [];
    for (let v of data.results.bindings)
    {
      console.log(v);
      let dataItem = {}
      Object.keys(v).map(function(row) {
        if (v[row].datatype==='http://www.w3.org/2001/XMLSchema#integer')
            dataItem.value = v[row]["value"];
        else
            dataItem.label = v[row]["value"];
      });
      dataItems.push(dataItem);
        
    } 
    dataItems.forEach(dataItem => {
      chartData.push({"x":dataItem["label"],"y":parseInt(dataItem["value"])});
    });    
    
  return (


<VictoryPie
    // style={{ data: { fill: "#c43a31", width: 5} }}
    colorScale={"qualitative"}
    data={chartData}
    alignment="start"
    height={200}
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