//pagination from https://github.com/gifthove/conference-registration/blob/master/conference-registration.ui.web/ClientApp/src/components/registration/RegistrationList.js
import React, { useEffect, useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { getSparqlQueryLabel } from '../StringHelper'


export default function QueryResultGrid(props) {
  const data = props.data.bindings;
  const columns = data.length > 0 ? Object.keys(data[0]):null;

  function doubleClicked(e) {
    console.log(e);
    // const entity = e.data.entity;
    // const entityClass = e.data.entityClass;
    // //https://prokino.uga.edu/nb/browse/?c=prokino:Organism&v=prokino:Human
    // navigate(`../browse/?c=${entityClass}&v=${entity}`);
  }
  const defaultColDef = useMemo(() => ({
    resizable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  }), []);

  //load data
  if (!columns)
    return <p> No data </p>
  var columnDefs = columns.map(v => {
    return { headerName: v.replace("_", " "), field: v, sortable: true }
  })


  let gridData = []
  data.forEach(row => {
    let newRow = {};
    for (const [key, value] of Object.entries(row)) {
      let typedValue = value['value'];
      switch (value['type']) {
        case "int":
          typedValue = parseInt(typedValue);
        case "float":
          typedValue = parseFloat(typedValue);
      }
      newRow[key] = typedValue;
    }
    gridData.push(newRow)

  });
  console.log(gridData);
  return <div style={{ width: '100%', margin: '1rem' }}>

    <div className="ag-theme-alpine" style={{ width: '100%' }}>
      <AgGridReact
        reactUi="true"
        onCellDoubleClicked={doubleClicked}
        rowData={gridData}
        domLaytou="domLayout"
        suppressMenuHide={true}
        pagination={true}
        paginationAutoPageSize={false}
        paginationPageSize={10}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}>
        {/* <AgGridColumn field="entityDisplay" headerName="Organism"></AgGridColumn> */}
      </AgGridReact>
    </div>
  </div>
}
