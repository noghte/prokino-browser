import Layout from '../components/Layout';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import AboutOntology from '../components/about/ontology';
import AboutSchema from '../components/about/schema';
import AboutDataSources from '../components/about/datasources';
import AboutBrowser from '../components/about/browser';
import AboutPeople from '../components/about/people';

export default function About() {
    const [activeTab, setActiveTab] = useState('ontology');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (<Layout>

        <div id="top" className="container mbr-black">
            <div>
            <div class="title col-12 col-md-12">
            <h4 class="display-5">About Browser</h4>
            <AboutBrowser />

            <h4 class="display-5" style={{marginTop:'2rem'}}>Schema</h4>
            <AboutSchema />
            
            <AboutPeople style={{marginTop:'2rem'}} />

            <h4 class="display-5" style={{marginTop:'2rem'}}>Data Sources</h4>
            <AboutDataSources />

          </div>
                </div>
                {/* <Nav tabs >
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === 'ontology' })}
                            onClick={() => { toggle('ontology'); }}>
                            Ontology
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === 'schema' })}
                            onClick={() => { toggle('schema'); }}>
                            Schema
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === 'datasources' })}
                            onClick={() => { toggle('datasources'); }}>
                            Data Sources
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === 'browser' })}
                            onClick={() => { toggle('browser'); }}>
                            Browser
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === 'people' })}
                            onClick={() => { toggle('people'); }}>
                            People
                        </NavLink>
                    </NavItem>
                </Nav> */}
                {/* <TabContent activeTab={activeTab}>
                    <TabPane tabId="ontology">
                        <Row>
                            <Col sm="12">
                                <div className="row">
                                <div className="favth-col-xs-6">

                                    <br />
              
                                </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="schema">
                        <Row>
                            <Col sm="12">
                                <div className="row">
                                    <div className="favth-col-xs-6">
                                        <br />
                        
                                        <AboutSchema />
                            
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="datasources">
                        <Row>
                            <Col sm="12">
                                <div className="row">
                                    <div className="favth-col-xs-6">
                                    <br />
                
                                        <AboutDataSources />

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="browser">
                        <Row>
                            <Col sm="12">
                                <br />
                                <div className="row">
                                    <div className="favth-col-xs-6">
                                        <AboutBrowser />
                              
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="people">
                        <Row>
                            <Col sm="12">
                                <br />
                                <div className="row">
                                    <div className="favth-col-xs-6">
                                        <AboutPeople />
                              
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent> */}
        </div>

    </Layout>)
}