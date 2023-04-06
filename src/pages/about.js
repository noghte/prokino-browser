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

            <h4 class="display-6">Protein Kinase Ontology</h4>
            <AboutOntology />

            <h4 class="display-6" style={{marginTop:'2rem'}}>Data Sources</h4>
            <AboutDataSources />

            <h4 class="display-6" style={{marginTop:'2rem'}}>ProKinO Schema</h4>
            <AboutSchema />

            <h4 class="display-6">ProKinO Browser</h4>
            <AboutBrowser />

            <AboutPeople style={{marginTop:'2rem'}} />

    

          </div>
                </div>
            
        </div>

    </Layout>)
}
