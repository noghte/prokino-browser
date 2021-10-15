//source: https://github.com/gifthove/conference-registration/blob/master/conference-registration.ui.web/ClientApp/src/components/common/TablePagination.js
import React, { useEffect, useState, useRef, useMemo } from 'react';
import axios from 'axios';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function DataGrid({ url, resizable = true, title, columns, gridwidth = 500 }) {

    useEffect(() => {
        const res = async () => {
            try {
                const result = await axios.get(url);
                setRowData(result.data.hits);
            } catch (error) {
                console.log(error)
            }
        }
        res();
    }, []);

    const defaultColDef = useMemo(() => ({
        resizable: resizable,
        sortable: true,
        flex: 1,
        minWidth: 150,
        filter: true,
    }), []);
    const [rowData, setRowData] = useState(null);

    //loda data
    if (!rowData)
        return <p>Loading ... </p>

    return <div style={{ width: {gridwidth}, }}>
        <h3>{title}</h3>
        <div className="ag-theme-alpine" style={{ width: {gridwidth}, height: 500 }}>
            <AgGridReact
                reactUi="true"
                rowData={rowData}
                suppressMenuHide={true}
                pagination={true}
                paginationAutoPageSize={true}
                columnDefs= {columns}
                defaultColDef={defaultColDef}>
                {/* <AgGridColumn field="entityDisplay" headerName="Organism"></AgGridColumn> */}
            </AgGridReact>
        </div>
    </div>
}
export default DataGrid;