import Layout from '../components/Layout';
import React, { useState } from 'react';
import { Link, withPrefix } from "gatsby"
import pLetter from '../images/p.svg'
import kLetter from '../images/k.svg'

export default function Downloads() {
    let downloads = require(`../../static/downloads.json`);


    return (<Layout>

        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm">
                        <img className="mr-3" src={pLetter} alt="P letter" width="48" height="48" />
                        <div className="lh-100">
                            <h6 className="mb-0 lh-100">Ontology</h6>
                            <small>Since 2011</small>
                        </div>
                    </div>

                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates of ProKinO ontology (ZIP-compressed OWL files)</h6>
                        {downloads.prokino.map(prokino => (
                            <div className="media text-muted pt-3">
                                <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                                <p style={{ paddingLeft: '1rem', width: '100%' }} className="media-body pb-3 pl-2 mb-0 small lh-125 border-bottom border-gray">
                                    <span style={{ fontWeight: 'bold' }} className="text-gray-dark">
                                        {`Version ${prokino.version}`}
                                    </span>
                                    <span style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', fontStyle: 'italic' }} className="text-gray-dark">
                                        {prokino.date}
                                    </span>
                                    <a style={{ float: 'right' }} href={`https://prokino.uga.edu/prokino/releases/${prokino.filenmae}`}>Download</a>
                                </p>
                            </div>
                        ))
                        }


                        {/* <div className="media text-muted pt-3">
                      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Version 61</strong>
                        2021-07-29: <a href="http://prokino.uga.edu/prokino/releases/Prokino_v61_2021-07-29.owl.zip">OWL file</a> with the
                        ProKinO ontology (ZIP-compressed)
                      </p>
                    </div>

                    <div className="media text-muted pt-3">
                      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Version 60</strong>
                        2020-12-29: <a href="http://prokino.uga.edu/prokino/releases/Prokino_v60_2020-12-29.owl.zip">OWL file</a> with the
                        ProKinO ontology (ZIP-compressed)
                      </p>
                    </div>

                    <div className="media text-muted pt-3">
                      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Version 59</strong>
                        2020-11-07: <a href="http://prokino.uga.edu/prokino/releases/Prokino_v59_2020-11-07.owl.zip">OWL file</a> with the
                        ProKinO ontology (ZIP-compressed)
                      </p>
                    </div>

                    <div className="media text-muted pt-3">
                      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Version 58</strong>
                        2020-07-08: <a href="http://prokino.uga.edu/prokino/releases/Prokino_v58_July_08-2020.owl.zip">OWL file</a> with the
                        ProKinO ontology (ZIP-compressed)
                      </p>
                    </div>

                    <div className="media text-muted pt-3">
                      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">Version 57</strong>
                        2020-01-21: <a href="http://prokino.uga.edu/prokino/releases/Prokino_v57_January_21-2020.owl.zip">OWL file</a> with the
                        ProKinO ontology (ZIP-compressed)
                      </p>
                    </div> */}

                        {/* <small className="d-block text-right mt-3">
                      <a href="#">All updates</a>
                    </small> */}
                    </div>

                </div>
                <div className="col-sm">
                    <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm">
                        <img className="mr-3" src={kLetter} alt="" width="48" height="48" />
                        <div className="lh-100">
                            <h6 className="mb-0 lh-100">KinView Application</h6>
                            <small>Since 2020</small>
                        </div>
                    </div>

                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
                        {downloads.kinview.map(kinview => (
                            <div className="media text-muted pt-3">
                                <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                                <p style={{ paddingLeft: '1rem', width: '100%' }} className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <span style={{ fontWeight: 'bold' }} className="text-gray-dark">
                                        {`Version ${kinview.version}`}
                                    </span>
                                    <span style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', fontStyle: 'italic' }} className="text-gray-dark">
                                        {kinview.date}
                                    </span>
                                   {kinview.viewLink && <a style={{ float: 'right' }} href={`${kinview.viewLink}`}>View</a>}
                                   {kinview.downloadLink &&  <a style={{ float: 'right', paddingRight:'1rem' }} href={`${kinview.downloadLink}`}>Download</a>}
                                   <p>{kinview.description}</p>
                                </p>
                            </div>
                        ))}
                        {/* <div className="media text-muted pt-3">
                      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">2.0</strong> 
                        <a href="http://prokino.uga.edu/kinview/">View</a>  | <a href="releases/kinview/kinview-2.0.zip">Download</a> <br />
                        In this version, the KinView project has been rewritten by ReactJS and weblogos are static PNG images. 
                      </p>
                    </div> 
                        <div className="media text-muted pt-3">
                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">1.0</strong>
                                KinView 1.0 is not downloadable. But, we will release a viewable version of that version.
                            </p>
                        </div>*/}

                        {/* <small className="d-block text-right mt-3">
                      <a href="#">All updates</a>
                    </small> */}
                    </div>

                </div>

            </div>
        </div>

    </Layout>)
}