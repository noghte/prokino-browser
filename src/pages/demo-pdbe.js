import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Helmet } from 'react-helmet'

const DemoPdbe = () => (
  
  <Layout>
       <Helmet>
       { /* pdbe-molstar */}
        <script src="https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-lite.js" charset="utf-8"></script>
        <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js" charset="utf-8"></script>
        <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.1.0-dev.4.css" />
        <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-1.1.0-dev.4.js"></script>

        { /* protvista-pdb */}
        <link  rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css"  type="text/css" media="all"/>
        <script src="https://d3js.org/d3.v4.min.js"></script>
        <script src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/protvista-pdb-2.0.0.js"></script>


      </Helmet>
    <SEO title="Page two" />
    <div>
    <protvista-pdb accession="P05067"></protvista-pdb>
    </div>
    
    <div>
    <pdbe-molstar 
        molecule-id="1cbs" 
        hide-controls="true" 
        pdbe-logo="false"
        subscribe-events="true" 
        bg-color-r="255" 
        bg-color-g="255" 
        bg-color-b="255"  
        style={{width:400, height: 400, float:'left',position:'relative'}}>
     </pdbe-molstar>

    </div>
    
    
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DemoPdbe
