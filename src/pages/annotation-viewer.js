import React from 'react';
import Layout from '../components/Layout';

export default function AnnotationViewerDemo() {
    return (
        <Layout>

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