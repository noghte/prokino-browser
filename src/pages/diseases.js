import React, { useEffect, useState, useRef, useMemo } from 'react'
import { DISEASES_ENDPOINT } from '../components/prokino/Endpoints'
import DataGrid from '../components/datagrid'
import Layout from '../components/Layout';
export default function Diseases() {

    const url = DISEASES_ENDPOINT + "&pagesize=10000&pageoffset=0";
    var columnDefs = [
        { headerName: "Disease (Cancer Type)", field: "entityDisplay", sortable: true },
    ];
    return <Layout>
        <DataGrid
            title="Diseases"
            url={url}
            resizable={false}
            columns={columnDefs}
            gridwidth={300}
        />
    </Layout>

}
