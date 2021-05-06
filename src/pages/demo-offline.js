import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/Layout"
import { Helmet } from 'react-helmet'

const DemoOffline = () => (

  <div>
        <Helmet>
        <script src="https://d3js.org/d3.v4.min.js"></script>

            <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js" charset="utf-8"></script>
            <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.1.0.css" />
            <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-1.1.0.js"></script>
            <link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css" type="text/css" media="all" />
            <script src="https://d3js.org/d3.v4.min.js" charset="utf-8"></script>
            <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/protvista-pdb-2.0.0.js"></script>
        </Helmet>
    
    <div style={{width:'400px',height:'500px',position:'relative'}}>
    <pdbe-molstar id="pdbeMolstarComponent"
            custom-data-url={withPrefix('cif/Atypical_Atypical_O00329_PK3CD.cif')}
            custom-data-format="cif"
            hide-controls="false"
            subscribe-events="true" 
            bg-color-r="255" bg-color-g="255" bg-color-b="255"
            >
        </pdbe-molstar>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default DemoOffline
