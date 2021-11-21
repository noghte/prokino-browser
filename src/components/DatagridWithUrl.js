//source: https://github.com/gifthove/conference-registration/blob/master/conference-registration.ui.web/ClientApp/src/components/common/TablePagination.js
import React, { useEffect, useState, useRef, useMemo } from 'react';
import axios from 'axios';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { navigate } from 'gatsby';

export function DataGridWithUrl({ url, resizable = true, title, columns, gridwidth = 500 }) {
    const [rowData, setRowData] = useState(null);

    function sortResults(field) {
        return function (a, b) {
            if (a[field].toLowerCase() === ("human"))
                 return -1;
            return 0;
        };
    }
    useEffect(() => {
        const res = async () => {
            try {
                    let result = await axios.get(url);

                    //Modify exceptional data
                    if (url.toLowerCase().includes("rdfs:type=prokino:organism")) {
                        let sortedResult = [...result.data.hits].sort(sortResults("entityDisplay"))
                        result = sortedResult;
                    }
                    else
                        result = result.data.hits;
                    setRowData(result);
              
            } catch (error) {
                console.log(error)
            }
        }
        res();
    }, []);

    function doubleClicked(e) {
        console.log(e);
        const entity = e.data.entity;
        const entityClass = e.data.entityClass;
        //https://prokino.uga.edu/nb/browse/?c=prokino:Organism&v=prokino:Human
        navigate(`../browse/?c=${entityClass}&v=${entity}`);
    }
    const defaultColDef = useMemo(() => ({
        resizable: resizable,
        sortable: true,
        flex: 1,
        minWidth: 150,
        filter: true,
    }), []);

    //loda data
    if (!rowData)
        return <p>Loading ... </p>

    return <div style={{ width: { gridwidth }, }}>
        <h3>{title}</h3>
        <div className="ag-theme-alpine" style={{ width: { gridwidth }, height: 500 }}>
            <AgGridReact
                reactUi="true"
                onCellDoubleClicked={doubleClicked}
                rowData={rowData}
                suppressMenuHide={true}
                pagination={true}
                paginationAutoPageSize={true}
                columnDefs={columns}
                defaultColDef={defaultColDef}>
                {/* <AgGridColumn field="entityDisplay" headerName="Organism"></AgGridColumn> */}
            </AgGridReact>
        </div>
    </div>
}
