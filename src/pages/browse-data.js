import React, { useEffect, useState, useRef, useMemo } from 'react'
import { ORGANISM_ENDPOINT, DISEASES_ENDPOINT, FUNCTIONALDOMAINS_ENDPOINT } from '../components/prokino/Endpoints'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import DataGrid from '../components/datagrid'
import Layout from '../components/Layout';
import classnames from 'classnames'
export default function BrowseData({ location, data }) {

    const organisms_url = ORGANISM_ENDPOINT + "&pagesize=10000&pageoffset=0";
    const diseases_url = DISEASES_ENDPOINT + "&pagesize=10000&pageoffset=0";
    const functionaldomains_url = FUNCTIONALDOMAINS_ENDPOINT + "&pagesize=10000&pageoffset=0";

    const [activeTab, setActiveTab] = useState(null);
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    var columnDefs = [
        { headerName: "Name", field: "entityDisplay", sortable: true },
        { headerName: "FullName", field: "entity", sortable: true },
    ];

    useEffect(() => {
        if (location.search)
        {
            const tabName = location.search.split('?v=')[1]
            setActiveTab(tabName)
        }
        else
            setActiveTab('organisms') //first tab

    }, [])
    if (!activeTab)
        return <p>Loading ...</p>
    return <Layout>
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'organisms' })}
                        onClick={() => { toggle('organisms'); }}>
                        Organisms
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'diseases' })}
                        onClick={() => { toggle('diseases'); }}>
                        Diseases
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'fdomains' })}
                        onClick={() => { toggle('fdomains'); }}>
                        Functional Domains
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="organisms">
                    <Row>
                        <Col sm="12">
                            <DataGrid
                                title="Organisms"
                                url={organisms_url}
                                resizable={false}
                                columns={columnDefs}
                                gridwidth={300} />
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="diseases">
                    <Row>
                        <Col sm="12">
                            <DataGrid
                                title="Diseases"
                                url={diseases_url}
                                resizable={false}
                                columns={columnDefs}
                                gridwidth={300} />
                        </Col>

                    </Row>
                </TabPane>

                <TabPane tabId="fdomains">
                    <Row>
                        <Col sm="12">
                            <DataGrid
                                title="Functional Domains"
                                url={functionaldomains_url}
                                resizable={false}
                                columns={columnDefs}
                                gridwidth={300} />
                        </Col>

                    </Row>
                </TabPane>


            </TabContent>
        </div>

    </Layout>

}
