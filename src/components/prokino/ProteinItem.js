import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_ENDPOINT } from '../../components/prokino/Endpoints';

import Layout from '../Layout';
import PairLinks from '../PairwiseLinkList';
import GenericList from './GenericList';
import { showList } from '../StringHelper';
import '../../styles/favth-bootstrap.css';
import '../../styles/proteinitems.css';
import { Helmet } from "react-helmet";
import MolstarViewer from './pdbe/MolstarViewer';
import AnnotationViewer from './pdbe/AnnotationViewer';
import SequenceViewer from './SequenceViewer';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { Link, withPrefix } from "gatsby"
import CifOptions from './pdbe/CifOptions';


// import '../../styles/icon-lib.css'
// import '../../styles/sprite.css'
// import '../../styles/rtheme.css'
// import '../../styles/rmain.css'

// import FeatureViewer from './FeatureViewer';

export default function ProteinItem({ uniprotId, localName, datatypeProperties, objectProperties, incomingObjectProperties, cifFileNames }) {
    // console.log("datatypeProperties",datatypeProperties);
    // console.log("objectProperties",objectProperties);
    // console.log("incomingObjectProperties", incomingObjectProperties);
    // console.log("uniprot from proteinitem", uniprotId);
    // console.log("sequence", sequenceData);
    const [sequenceData,setSequenceData] = useState(null);
    const [isOpenProtein, setIsOpenProtein] = React.useState(true);
    const [isOpenFeaturedSubstitutions, setIsOpenFeaturedSubstitutions] = React.useState(false);
    const [isOpenPathways, setIsOpenPathways] = React.useState(false);
    const [isOpenReferences, setIsOpenReferences] = React.useState(false);
    const [selectedCif, setSelectedCif] = React.useState(cifFileNames && cifFileNames.length>0 ? `/cif/${cifFileNames[0]["relativeDirectory"]}/${cifFileNames[0]["name"]}.cif`: "");
    const handleCifChange = (cifPath) => {
        setSelectedCif(cifPath);
      };

      useEffect(() => {
        const getSequenceData = async () => {
            // if (!value)
            //     return <></>
            let seqName = 'prokino:Human_EGFR-UniProt_Seq'
            let url = `${BASE_ENDPOINT}/sequence/${seqName}`;
            const result = await axios.get(url);
            console.log("sequence API data",result.data)
            setSequenceData(result.data);
        };
        if (!sequenceData)
            getSequenceData();
    }, []);
    function handleScriptInject({ scriptTags }) {
        if (scriptTags) {
            const scriptTag = scriptTags[0];
            scriptTag.onload = this.handleOnLoad;
        }
    }

    if (!sequenceData)
        return <Layout>Loading sequence data...</Layout>
    return (<Layout>
        <Helmet  script={[{ src: 'https://d3js.org/d3.v4.min.js' }]}
    // Helmet doesn't support `onload` in script objects so we have to hack in our own
    onChangeClientState={(newState, addedTags) => handleScriptInject(addedTags)}>
            {/* <script src={withPrefix('../../js/ncats-protvista-viewer-bundle.js')} type="text/javascript" /> */}
            <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js" charset="utf-8"></script>
            <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.1.0.css" />
            <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-1.1.0.js"></script>
            <link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css" type="text/css" media="all" />
            {/* <script src="https://d3js.org/d3.v4.min.js" charset="utf-8"  http-equiv="encoding" crossorigin="anonymous"></script> */}
            <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/protvista-pdb-2.0.1.js" crossorigin="anonymous"></script>

        </Helmet>
        <div id="fav-container" className="fav-container">
            {/* remove if do not need margins  */}
            <div className="favth-container">
                <div className="favth-row">
                    <div className="favth-col-xs-12">

                        <Card>
                            <Card.Header onClick={() => setIsOpenProtein(!isOpenProtein)}
                                style={{cursor:'pointer'}}
                                aria-controls="featured_substitutions"
                                aria-expanded={isOpenProtein}>
                                <h3 className="details-title">
                                    Protein: {localName.split(":")[1]}
                                </h3>
                            </Card.Header>
                            <Collapse in={isOpenProtein}>

                            <Card.Body>
                                <div className="favth-clearfix">
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Primary Name</span></div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {datatypeProperties["prokino:hasPrimaryName"]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Full Name</span></div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {datatypeProperties["prokino:hasFullName"]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Protein Name</span></div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {datatypeProperties["prokino:hasProteinName"]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>UniProt Name</span></div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {datatypeProperties["prokino:hasUniprotPrimaryName"]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Other Names</span></div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {showList(datatypeProperties["prokino:hasOtherName"])}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Cellular Location</span></div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {showList(datatypeProperties["prokino:hasCellularLocation"])}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Tissue Specificity</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {datatypeProperties["prokino:hasTissueSpecificity"]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Chromosomal Position</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {datatypeProperties["prokino:chromosomalPosition"]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Description</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    {datatypeProperties["rdfs:comment"]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Present In</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    <PairLinks values={objectProperties["prokino:presentIn"]} entityClass="prokino:Organism" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Also Present In</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    <GenericList protein={localName} seperator=", " apiClassName="organisms" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Classification</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>

                                                    Render a tree view
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Encodes Domains</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    <PairLinks values={incomingObjectProperties["prokino:encodedIn"]} />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Functional Domains</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    <PairLinks values={objectProperties["prokino:hasFunctionalDomain"]} />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Sequence</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    <PairLinks values={objectProperties["prokino:hasSequence"]} entityClass={"prokino:Sequence"} />
                                                </div>
                                                <div>
                                                    <SequenceViewer sequence={sequenceData ? sequenceData.residues : ""} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Structure</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{ maxHeight: "unset" }}>
                                                <div>
                                                    <CifOptions options={cifFileNames} onChange={handleCifChange} />
                                                    <MolstarViewer viewerWidth={900} viewerHeight={300} uniprotId={uniprotId} cifPath={selectedCif} />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Annotations</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div>
                                                    <AnnotationViewer
                                                        prokinoSequence={objectProperties["prokino:hasSequence"]}
                                                        sequenceData={sequenceData ? sequenceData : ""}
                                                        uniprotId={uniprotId} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fieldset-pair-container">
                                        <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Associated w/ Diseases</div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                <div  style={{maxHeight: '200px', overflow: 'auto'}}>
                                                    <PairLinks values={objectProperties["prokino:associatedWith"]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            </Collapse>
                        </Card>
                        <Card>
                            <Card.Header onClick={() => setIsOpenFeaturedSubstitutions(!isOpenFeaturedSubstitutions)}
                                style={{cursor:'pointer'}}
                                aria-controls="featured_substitutions"
                                aria-expanded={isOpenFeaturedSubstitutions}>
                                <h5 className="details-title">
                                    Featured Substitutions
                                </h5>
                            </Card.Header>

                            <Collapse in={isOpenFeaturedSubstitutions}>
                                <Card.Body>
                                    <div className="favth-clearfix" id="featured_substitutions">
                                        <fieldset className="fieldset-details">
                                            <legend>Mutations</legend>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Missense</span></div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass={"prokino:Missense"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <br />
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Coding Silent</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass={"prokino:CodingSilent"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <br />
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Nonsense</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:Nonsense" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h5 className="details-title">
                                                Insertions
                                </h5>
                                            <div className="fieldset-pair-container">
                                                <br />
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Insertion in Frame</span></div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:InsertionInframe" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Insertion Frameshift</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:InsertionFrameshift" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h5 className="details-title">
                                                Deletions
                                </h5>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Deletion in Frame</span></div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:DeletionInframe" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Deletion Frameshift</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:DeletionFrameshift" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <h5 className="details-title">
                                                Complex Mutations
                                </h5>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Complex Insertion in Frame</span></div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:ComplexInsertionInframe" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Complex Deletion in Frame</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:ComplexDeletionInframe" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Complex Frameshift</span></div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:ComplexFrameshift" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Compound Substitution</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:CompoundSubstitution" />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <h5 className="details-title">
                                                Other Mutations
                                </h5>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Other Mutation</span></div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:hasMutation"]} entityClass="prokino:OtherMutation" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </fieldset>
                                    </div>
                                </Card.Body>
                            </Collapse>
                        </Card>
                        <Card>
                            <Card.Header onClick={() => setIsOpenPathways(!isOpenPathways)}
                                style={{cursor:'pointer'}}
                                aria-controls="pathways"
                                style={{cursor:'pointer'}}
                                aria-expanded={isOpenPathways}>
                                <h5 className="details-title">
                                    Pathways
                                </h5>
                            </Card.Header>
                            <Collapse in={isOpenPathways}>
                                <Card.Body>
                                    <div className="favth-clearfix" id="pathways">
                                        <fieldset className="fieldset-details">
                                            <legend>Pathways</legend>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Participates in Pathways</span></div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                        <div>
                                                            <PairLinks values={objectProperties["prokino:participatesIn"]} entityClass="prokino:Pathway" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Participates in Reactions</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                        <div >
                                                            <GenericList protein={localName} entityClass="prokino:Reaction" apiClassName="reactions" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Element of</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                        <div>
                                                            <GenericList protein={localName} entityClass="prokino:EntitySet" apiClassName="physentities" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </fieldset>
                                    </div>
                                </Card.Body>
                            </Collapse>

                        </Card>
                        <Card>
                            <Card.Header onClick={() => setIsOpenReferences(!isOpenReferences)}
                                style={{cursor:'pointer'}}
                                aria-controls="references"
                                aria-expanded={isOpenReferences}>
                                <h3 className="details-title">
                                    References
                                </h3>
                            </Card.Header>
                            <Collapse in={isOpenReferences}>
                                <Card.Body>
                                    <div className="favth-clearfix" id="references">
                                        <fieldset className="fieldset-details">
                                            <legend>References</legend>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Other Mutation</span></div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                        <div>
                                                            <a href="https://www.rcsb.org/structure/4d2RJ8" target="_blank" title="show">p.L747Xfs*16</a>,
                                                <a href="https://www.rcsb.org/structure/42dRJ8" target="_blank" title="show"> p.G719Xfs*29</a>,
                                                <a href="https://www.rcsb.org/structure/42dRJ8" target="_blank" title="show"> p.K806fs*?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">PubMed Refs</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                        <div>
                                                            <a href="https://www.rcsb.org/structure/42RJ8" target="_blank" title="show"> 10026169 </a>,
                                                <a href="https://www.rcsb.org/structure/42RJ8" target="_blank" title="show"> 10228163 </a>,
                                                <a href="https://www.rcsb.org/structure/42RJ8" target="_blank" title="show"> 10523301 </a>,
                                                <a href="https://www.rcsb.org/structure/42RJ8" target="_blank" title="show"> 9852145 </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">UniProt Refs</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                        <div>
                                                            <a href="https://www.rcsb.org/structure/4RJ8s" target="_blank" title="show PDB:4RJ8">O00688</a>,
                                                <a href="https://www.rcsb.org/structure/4RJ83" target="_blank" title="show PDB:4RJ8"> O00732</a>,
                                                <a href="https://www.rcsb.org/structure/4RJ83" target="_blank" title="show PDB:4RJ8"> Q9UMG5</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Wikipedia Refs</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                        <div>
                                                            <a href="http://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Epidermal_growth_factor_receptor" target="_blank" title="show Wikipedia Refs" >1013</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldset-pair-container">
                                                <div className="favth-clearfix">
                                                    <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">PubMed preview</div>
                                                    <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                        <div>
                                                            Preview
                                            </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </fieldset>
                                    </div>
                                </Card.Body>
                            </Collapse>

                        </Card>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
    );
}
