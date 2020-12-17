import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from "react-helmet";

export default function AnnotationViewer() {
    return (
        <Layout>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js" charset="utf-8"></script>

                <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.1.0.css" />
                <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-1.1.0.js"></script>
                {/* <style>
    #myViewer{
      float:left;
      width:400px;
      height: 400px;
      position:relative;
    }
</style> */}

<link  rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css"  type="text/css" media="all"/>
    <script src="https://d3js.org/d3.v4.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/protvista-pdb-2.0.0.js"></script>
            </Helmet>
            <div style={{ height: '1300px' }}>
                <div style={{ width: '1100px', height: '300px', position: 'relative', float: 'right' }}>
                    <pdbe-molstar id="pdbeMolstarComponent"
                        // bg-color-r="255"
                        // bg-color-g="255"
                        // bg-color-b="255"
                        molecule-id="4f4p"
                        hide-controls="true" subscribe-events="true" >
                    </pdbe-molstar>
                </div>
                <div style={{clear:'both'}}>
      <protvista-pdb entry-id="4f4p" entity-id="1"></protvista-pdb>
    </div>
            </div>
            
            {/* <div style="clear:both;">
      <protvista-pdb entry-id="4f4p" entity-id="1"></protvista-pdb>
    </div> */}


        </Layout>)
}