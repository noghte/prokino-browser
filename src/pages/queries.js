import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import QueryResult from '../components/sparql/QueryResult';
import fileDownload from 'js-file-download';
import { useSelector, connect } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setSparqlResult, setChartProperties } from '../state/app';
import { SPARQL_ENDPOINT } from '../components/prokino/Endpoints';
import { MdSettings } from "@react-icons/all-files/md/MdSettings"
import { MdDone } from "@react-icons/all-files/md/MdDone"
import * as svg from 'save-svg-as-png';

import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Label
} from 'reactstrap';

import { TABLE, BARCHART, PIECHART } from '../components/sparql/Constants';

import React, { useState } from 'react';
import ExampleQueries from '../components/sparql/ExampleQueries';
function Queries(props) {
    const [query, setQuery] = useState('');
    const [exampleQueryTitle, setExampleQueryTitle] = useState('');
    // const [csvData, setCsvData] = useState(null);
    // const [executeMessage, setExecuteMessage] = useState('Execute');
    // const [submitting, setSubmitting] = useState(false);
    const [shouldShowResults, setShouldShowResults] = React.useState(false);

    const [displayType, setDisplayType] = useState(TABLE);
    const [maxChartItems, setMaxChartItems] = useState(10);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const sparqlResult = useSelector(state => state.app.sparqlResult)

    // const notify = () => toast("Getting the query result");
    const victoryRef = useRef(null);
    const maxChartItemsRef = useRef(null);
    
    function executeQuery(event) {
        event.preventDefault()

        if (query.trim().length === 0) {
            alert('No query entered.');
            return;
        }
        // setSubmitting(false);
        // setExecuteMessage("Execute");
        // setSubmitting(true);
        setShouldShowResults(true);
        // notify();
        if (window)
            window.scrollTo(0, 0);
        // showUpdateFeelings();

    }
    function displayBarchart(event) {
        event.preventDefault()
        setDisplayType(BARCHART);
        //"dropdown-item-checked"
    }
    function displayTable(event) {
        event.preventDefault();
        setDisplayType(TABLE);
    }

    function displayPiechart(event) {
        event.preventDefault();
        setDisplayType(PIECHART);
    }

    function handleQueryChange(event) {
        setShouldShowResults(false);
        setQuery(event.target.value)
    }
    function exampleQuerySelected(evt) {
        setShouldShowResults(false);
        props.dispatch(setSparqlResult(null));
        setExampleQueryTitle(evt.title);
        setQuery(evt.query);

        if (window)
            window.scrollTo(0, 0);
    }
    let timeout = null;
function maxChartItemsChanged(evt)
{
    // clearTimeout(timeout);

    // timeout = setTimeout(function(){
    const m = evt.target.valueAsNumber;
        if(typeof m == 'number' && m >=2 && m<=10000)
          setMaxChartItems(parseInt(m));
    // },1000);
}
    function saveCsv() {
        let url = `${SPARQL_ENDPOINT}?query=${encodeURIComponent(query)}&output=csv`;
        axios.get(url)
            .then((result) => {

                //filename
                const dt = new Date();
                let filename = dt.toISOString().slice(0, 10) + '-';
                filename += dt.getTime().toString()
                filename += '.csv';

                fileDownload(result.data, filename);
            });

    }
    function saveJson() {
        if (sparqlResult) {
            //filename
            const dt = new Date();
            let filename = dt.toISOString().slice(0, 10) + '-';
            filename += dt.getTime().toString()
            filename += '.json'

            const contents = JSON.stringify(sparqlResult, null, 2);
            fileDownload(contents, filename)
        }
        else
            alert('The query result is not ready. Please try again.')
    }
    function watermarkImage(elemImage, text) {
        // Create test image to get proper dimensions of the image.
        var testImage = new Image();
        testImage.onload = function() {
          var h = testImage.height, w = testImage.width, img = new Image();
          // Once the image with the SVG of the watermark is loaded...
          img.onload = function() {
            // Make canvas with image and watermark
            var canvas = Object.assign(document.createElement('canvas'), {width: w, height: h});
            var ctx = canvas.getContext('2d');
            ctx.drawImage(testImage, 0, 0);
            ctx.drawImage(img, 0, 0);
            // If PNG can't be retrieved show the error in the console
            try {
              elemImage.src = canvas.toDataURL('image/png');
            }
            catch (e) {
              console.error('Cannot watermark image with text:', {src: elemImage.src, text: text, error: e});
            }
          };
          // SVG image watermark (HTML of text at bottom right)
          img.src = 'data:image/svg+xml;base64,' + window.btoa(
            '<svg xmlns="http://www.w3.org/2000/svg" height="' + h + '" width="' + w + '">' +
              '<foreignObject width="100%" height="100%">' +
                '<div xmlns="http://www.w3.org/1999/xhtml">' +
                  '<div style="position: absolute;' +
                              'right: 0;' +
                              'bottom: 0;' +
                              'font-family: Tahoma;' +
                              'font-size: 10pt;' +
                              'background: #000;' +
                              'color: #fff;' +
                              'padding: 0.25em;' +
                              'border-radius: 0.25em;' +
                              'opacity: 0.6;' +
                              'margin: 0 0.125em 0.125em 0;' +
                  '">' + text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</div>' +
                '</div>' +
              '</foreignObject>' +
            '</svg>'
          );
        };
        testImage.src = elemImage.src;
      }
      
    function savePng()
    {
        const vc = document.getElementsByClassName("VictoryContainer")
        if (vc && vc.item(0) && vc.item(0).firstChild.tagName == 'svg')
        {
            const svgElement = vc.item(0).firstChild.cloneNode(true);
            const dt = new Date();
            let filename = dt.toISOString().slice(0, 10) + '-';
            filename += dt.getTime().toString()
            filename += '.png';
            svgElement.style["background-color"] = "#fff";
            // watermarkImage(svgElement,"ProKinO"); did not test the function
            svg.saveSvgAsPng(svgElement, filename);
        }
    }
    function setSelectedLabel(lbl) {
        //    let chp = Object.assign({}, props.chartProperties);
        let chp = props.chartProperties;
        chp.selectedLabel = lbl;
        setChartProperties(chp);
    }
    function setSelectedValue(lbl) {
        let chp = props.chartProperties;
        chp.selectedValue = lbl;
        setChartProperties(chp);
    }
    return (<Layout>

        <div className="container">
            <div className="row">
                <h3 className="display-5">Run your own SPARQL query</h3>
            </div>
            <br />
            <div>{shouldShowResults && <ToastContainer autoClose={2000} newestOnTop closeOnClick />}</div>

            <div className="row">
                {
                    shouldShowResults &&
                    <Navbar color="light" light expand="md" style={{ width: "100%" }} >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="nav-item dropdown ml-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <Label> <span style={{ fontWeight: 'lighter' }}> <MdSettings /> </span> {displayType}</Label>
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem onClick={displayTable}>
                                            <span className={displayType === TABLE ? <span style={{fontSize:'0.7rem'}}> <MdDone /> </span> : ""}>Display as Table</span>
                                        </DropdownItem>
                                        <DropdownItem onClick={displayBarchart}>
                                            <span className={displayType === BARCHART ? <span style={{fontSize:'0.5rem'}}> <MdDone /> </span>  : ""}>Display as Barchart</span>

                                        </DropdownItem>
                                        <DropdownItem onClick={displayPiechart}>
                                            <span className={displayType === PIECHART ? <span style={{fontSize:'rem'}}> <MdDone /> </span>  : ""}>Display as Piechart</span>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={saveCsv}>
                                            Download data as CSV
                                        </DropdownItem>
                                        <DropdownItem onClick={saveJson}>
                                            Download data as JSON
                                        </DropdownItem>
                                        <DropdownItem onClick={savePng} style={{display: displayType != TABLE? "block":"none"}}>
                                            Download image as PNG
                                        </DropdownItem>

                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <div style={{marginLeft:'2rem', marginTop:'0.35rem', fontWeight:'bold', color:'rgba(0, 0, 0, 0.55)', display:displayType != TABLE? "block":"none"}}>
                                  <span style={{marginRight:'0.5rem'}}>Max items:</span>  
                                <input type="number" id="maxItems" min="2" max="10000" ref={maxChartItemsRef} defaultValue={maxChartItems} onBlur={maxChartItemsChanged} />
                                </div>
                                {/* {props.chartProperties && displayType != TABLE && <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <Label>
                                            {<span style={{ fontSize: '1rem' }}> <MdSettings /></span>}
                                        </Label>
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>X-Axis: </span>
                                        {props.chartProperties.labelColumns.map(i => (
                                            <DropdownItem onClick={()=>setSelectedLabel(i)}>
                                                <span>
                                                    {
                                                        props.chartProperties.selectedLabel == i ?
                                                            <> <span style={{ fontSize: '0.7rem' }}><MdDone /></span> {i}</>
                                                            : i
                                                    }
                                                </span>
                                            </DropdownItem>
                                        ))}
                                        <hr />
                                        <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>Y-Axis: </span>
                                        {props.chartProperties.valueColumns.map(i => (
                                            <DropdownItem onClick={()=>setSelectedValue(i)}>
                                                <span>
                                                    {
                                                        props.chartProperties.selectedValue == i ?
                                                            <> <span style={{ fontSize: '0.7rem' }}><MdDone /></span> {i}</>
                                                            : i
                                                    }
                                                </span>
                                            </DropdownItem>
                                        ))}
                                        <hr />
                                    </DropdownMenu>
                                </UncontrolledDropdown>} */}

                                {/* {props.chartProperties && displayType != TABLE && <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <Label> {props.chartProperties.selectedValue}</Label>
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        {props.chartProperties.valueColumns.map(i=>(
                                            <DropdownItem onClick={displayTable}>
                                            <span>{i}</span>
                                        </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </UncontrolledDropdown>} */}
                            </Nav>

                        </Collapse>
                        {/* <NavbarText style={{fontStyle:'italic'}}>SPARQL Result</NavbarText> */}
                        <a href="#q" className="prokino-link">Scroll to {exampleQueryTitle}</a>
                    </Navbar>

                }
                {shouldShowResults && <QueryResult query={query} chartType={displayType} ref={victoryRef} maxItems={maxChartItems} />}
                {/* {shouldShowResults && displayType === "table" && <QueryResultTable input={query} />}
      {shouldShowResults && displayType === "barchart" && <QueryResultBarchart input={query} />}
      {shouldShowResults && displayType === "piechart" && <QueryResultPiechart input={query} />} */}

            </div>
            <div className="row">
                <div className="col">

                    <table width="598" border="0" cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <td>
                                    <p>Enter your <a href="http://www.w3.org/TR/sparql11-query/" target="_blank">SPARQL 1.1</a>
                                        <sup>1</sup> query below, or select and modify an example query from the panel on the right side. <br />

                                        {/* navigate to <Link to="/example-queries">examples</Link> to view some practical queries. */}
                                    </p>

                                    {/* <div id="visualization" style="display: none">
		             <input type="button" id="hidebutton" value="Hide visualization" onclick="vizHide()">
		             <div id="results"></div>
		           </div> */}
                                    {/* <pre style={{ margin: 0, width: '87%' }}>
                                        <span>
                                            PREFIX     rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#&gt; <br />
                                            PREFIX    rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt; <br />
                                            PREFIX prokino: &lt;http://prokino.uga.edu/prokino#&gt; <br />
                                        </span>
                                    </pre> */}
                                    <p style={{ margin: '0 0 0px', textAlign: 'right' }}>
                                        <span style={{ float: 'left' }}>Query:</span>
                                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{exampleQueryTitle}</span>
                                    </p>
                                    <textarea
                                        style={{ width: '100%', fontFamily: "'Courier New', Courier, monospace" }}
                                        rows="20"
                                        name="query"
                                        placeholder="Write your SPARQ query or select an example..."
                                        onChange={handleQueryChange}
                                        value={query}
                                    />


                                    <div>
                                        <Button className="btn btn-primary" aria-label="Execute" onClick={executeQuery}>
                                            Execute
                                            {/* {executeMessage} */}
                                        </Button>
                                        <p style={{ fontStyle: 'italic' }}> Note: Only <code>Select</code> queries are allowed.</p>
                                        {/* <span style={{ paddingLeft: '10px', float: 'right' }}>
                                            <Link to="/example-queries">Example queries</Link>

                                        </span> */}

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col" id="q">
                    <ExampleQueries onSelect={exampleQuerySelected} />
                </div>

            </div>

            <div className="row">
                <br />
                <ul>
                    <li>We are using an open-source version of <a href="http://virtuoso.openlinksw.com/" target="_blank">OpenLink Virtuoso</a> to process queries.</li>
                    <li>
                        Note that not all of the visualization chart types are applicable to all types of queries.
                        A table visualization is applicable to all types of queries.
                        However, other visualization forms (e.g., a Piechart) are applicable to queries returning a discrete set
                        of values (numbers or strings) in the first position returned by the select query (the first selected
                        variable or expression) while the remaining select positions (at least one must be present!) must be numeric.
                    </li>
                </ul>

            </div>
        </div>
    </Layout>)
}


export default connect(state => ({
    sparqlResult: state.app.sparqlResult,
    chartProperties: state.app.chartProperties,
}), null)(Queries);