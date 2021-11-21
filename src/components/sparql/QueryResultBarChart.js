import React, { useState, useRef, useEffect } from 'react';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryLabel, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip } from 'victory';

export default function QueryResultBarChart(props) {
  const maxItems= props.maxItems;

  console.log("barchart, labelcols", props.chartProperties.labelColumns)
  console.log("barchart, valcols", props.chartProperties.valueColumns)
  // setSelectedLabelColumn(props.labelColumns[0]);
  // setSelectedValueColumn(props.valueColumns[0]);

  // const MAX_ITEMS = 20;

  // const [labelColumns, setLabelColumns] = useState(null)
  // const [valueColumns, setValueColumns] = useState(null)
  let chartData = [];
  let dataItems = [];
  for (let row of props.data.bindings) {
    let dataItem = {}
    dataItem.label = row[props.chartProperties.selectedLabel] ? row[props.chartProperties.selectedLabel]["value"] : '';
    dataItem.value = row[props.chartProperties.selectedValue] ? row[props.chartProperties.selectedValue]["value"] : '0';
    dataItems.push(dataItem);
  }
  dataItems = dataItems.sort((a, b) => (parseFloat(a.value) < parseFloat(b.value)) ? 1 : -1)
  const slicedDataItems = dataItems.slice(0, props.maxItems);

  slicedDataItems.forEach(dataItem => {
    chartData.push({ "x": dataItem["label"], "y": parseFloat(dataItem["value"]) });
  });

  const extraItems = dataItems.filter(ar => !slicedDataItems.find(rm => (rm.label === ar.label))) //get all items, except first MAX_ITEMS
  if (extraItems.length > 0) {
    const extraSum = extraItems.reduce((n, { value }) => n + parseFloat(value), 0);
    chartData.push({ "x": "Other", "y": extraSum });
  }

  return (
    <>
      <VictoryChart

        style={{
          parent: {
            border: "1px solid #ccc",
            // height:'2000px',
          },
        }}
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
            // labels: {
            //   fontSize: 15,
            //   fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
            // },
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
