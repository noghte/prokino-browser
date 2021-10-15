import React, { useEffect, useState, useRef, useMemo } from 'react'
import { ORGANISM_ENDPOINT } from '../components/prokino/Endpoints'
import DataGrid from '../components/datagrid'
import Layout from '../components/Layout';
export default function Organisms() {

    const url = ORGANISM_ENDPOINT + "&pagesize=10000&pageoffset=0";
    var columnDefs = [
        { headerName: "Organism", field: "entityDisplay", sortable: true },
    ];
    return <Layout>
        <DataGrid
            title="Organisms"
            url={url}
            resizable={false}
            columns={columnDefs}
            gridwidth={300}
        />
    </Layout>

}
