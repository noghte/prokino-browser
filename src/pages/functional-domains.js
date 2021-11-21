import React, { useEffect, useState, useRef, useMemo } from 'react'
import { FUNCTIONALDOMAINS_ENDPOINT } from '../components/prokino/Endpoints'
import {DataGridWithUrl as DataGrid} from '../components/DatagridWithUrl'
import Layout from '../components/Layout';
export default function FunctionalDomains() {

    const url = FUNCTIONALDOMAINS_ENDPOINT + "&pagesize=10000&pageoffset=0";
    var columnDefs = [
        { headerName: "Functional Domain", field: "entityDisplay", sortable: true },
    ];
    return <Layout>
        <DataGrid
            title="Functional Domains"
            url={url}
            resizable={false}
            columns={columnDefs}
            gridwidth={300}
        />
    </Layout>

}
