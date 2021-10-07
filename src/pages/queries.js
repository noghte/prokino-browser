import Layout from '../components/Layout';
import QueryResult from '../components/sparql/QueryResult';
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
import {TABLE, BARCHART, PIECHART} from '../components/sparql/Constants';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import ExampleQueries from '../components/sparql/ExampleQueries';
export default function Queries() {
    const [query, setQuery] = useState('');
    const [executeMessage, setExecuteMessage] = useState('Execute');
    const [submitting, setSubmitting] = useState(false);
    const [shouldShowResults, setShouldShowResults] = React.useState(false);

    const [displayType, setDisplayType] = useState(TABLE);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    function executeQuery(event) {
        event.preventDefault()

        if (query.trim().length === 0) {
            alert('No query entered.');
            return;
        }
        setSubmitting(false);
        setExecuteMessage("Execute");
        setSubmitting(true);
        setShouldShowResults(true);
        if (window)
            window.scrollTo(0, 0);

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
        setQuery(event.target.value)
    }
    function exampleQuerySelected(query)
    {
        setQuery(query)
    }
    function saveCsv(event)
    {
        alert("CSV saved")
        console.log("Saved")
    }

    return (<Layout>
        <style jsx>{`
.dropdown-item-checked::before {
  position: absolute;
  left: .4rem;
  content: '✓';
  font-weight: 600;
}
      `}</style>
        <div className="container">
            <div className="row">
                <h3 className="display-5">Run your own SPARQL query</h3>
            </div>
            <br />
            <div className="row">

                {
                    shouldShowResults &&
                    <Navbar color="light" light expand="md" style={{ width: "100%" }} >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="nav-item dropdown ml-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                       <Label> {displayType}</Label>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={displayTable}>
                                            <span className={displayType === TABLE ? "dropdown-item-checked" : ""}>Display as Table</span>
                                        </DropdownItem>
                                        <DropdownItem onClick={displayBarchart}>
                                            <span className={displayType === BARCHART ? "dropdown-item-checked" : ""}>Display as Barchart</span>

                                        </DropdownItem>
                                        <DropdownItem onClick={displayPiechart}>
                                            <span className={displayType === PIECHART ? "dropdown-item-checked" : ""}>Display as Piechart</span>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onclick={saveCsv}>
                                            Save as CSV
                                        </DropdownItem>
                                        <DropdownItem>
                                            Save as JSON
                                        </DropdownItem>
                                        <DropdownItem>
                                            Save as XML
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>

                        </Collapse>
                        <NavbarText>SPARQL Result</NavbarText>

                    </Navbar>
                    
                }
                {shouldShowResults && <QueryResult query={query} chartType={displayType} />}
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
                                        <sup>1</sup> query below. Only <code>Select</code> queries are allowed; <br /> navigate to <Link to="/example-queries">examples</Link> to view some practical queries.
                                    </p>

                                    {/* <div id="visualization" style="display: none">
		             <input type="button" id="hidebutton" value="Hide visualization" onclick="vizHide()">
		             <div id="results"></div>
		           </div> */}
                                    <pre style={{ margin: 0, width:'87%' }}>
                                        <span>
                                            PREFIX     rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#&gt; <br />
                                            PREFIX    rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt; <br />
                                            PREFIX prokino: &lt;http://prokino.uga.edu/prokino#&gt; <br />
                                        </span>
                                    </pre>
                                    <textarea
                                        style={{ fontFamily: "'Courier New', Courier, monospace" }}
                                        rows="20"
                                        cols="62"
                                        name="query"
                                        placeholder="Write your SPARQ query or select an example..."
                                        onChange={handleQueryChange}
                                        value={query}
                                    />


                                    <div>
                                        <Button className="btn btn-primary" aria-label="Execute" onClick={executeQuery}>
                                            {executeMessage}
                                        </Button>
                                        {/* <span style={{ paddingLeft: '10px', float: 'right' }}>
                                            <Link to="/example-queries">Example queries</Link>

                                        </span> */}
                                        {/* <input type="button" value="Execute" onclick="execute( myform.query.value, myform.display.value )" /> */}

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
                <div className="col">
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