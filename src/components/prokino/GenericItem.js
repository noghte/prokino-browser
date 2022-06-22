import Layout from '../Layout';
import { display, showList } from '../StringHelper';
import React from "react";
import { navigate, Link } from "gatsby";
import { DataGridWithDataSource as DataGrid } from '../DatagridWithDataSource';

export default function GenericItem({ entityClass, localName, datatypeProperties, objectProperties, incomingObjectProperties }) {
    //todo: ask dr. kochut
    function makeHyperLinks(arr) {
        if (Array.isArray(arr)) {
            let newData = [];
            arr.forEach(element => {
                element['v'].map(v=>{
                    newData.push(`<a href='../browse/?c=Generic&v=${element['c']}'>${element['v']}</a>`);

                })
                // newData.push(`<b>${element}</b>`)
            });
            //return showList(newData);
            return newData;
        }
        else
            return arr;
    }
    return (<Layout>
        <div id="fav-container" className="fav-container">
            <div className="favth-container">
                <div className="favth-row">
                    {/* <Link style={{float:'left'}} onClick={() => navigate(-1)}>
      Go Back
    </Link> */}
                    <div className="favth-col-xs-12">
                        <h3 className="details-title">
                            {entityClass.split(":")[1]}: {localName.split(":")[1]}
                        </h3>

                        <div className="favth-clearfix">
                            {Object.entries(datatypeProperties).map(([key, value]) =>

                                <div className="fieldset-pair-container" key={key}>
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">
                                            <span>{display(key)}</span>
                                        </div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                {showList(value)}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div className="favth-clearfix">
                            <div className="fieldset-pair-container" >

                                {Object.entries(objectProperties).map(([key, value]) =>

                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">
                                            <span>{display(key)}</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                {showList(value, "v")}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>
                        {/* <div className="favth-clearfix">
                            <div className="fieldset-pair-container" >
                            

                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">
                                            <span>Properties</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                {Object.keys(incomingObjectProperties).map(key =>
                                            <DataGrid
                                                title="Organisms"
                                                datasource={incomingObjectProperties[key]}
                                                resizable={false}
                                                columns={
                                                    [
                                                        { headerName: display(key), field: "c", sortable: true},
                                                        {
                                                            headerName: "", 
                                                            field: "v", 
                                                            sortable: false,
                                                            suppressFilter: true,
                                                            cellRenderer: function (params) {
                                                                let cellValue = params.value;
                                                                if (Array.isArray(params.value))
                                                                {
                                                                    let newData=[];
                                                                    cellValue.forEach(element => {
                                                                        newData.push(`<a href='../browse/?c=Generic&v=${element}'>${element}</a>`);
                                                                        // newData.push(`<b>${element}</b>`)
                                                                    });
                                                                    //return showList(newData);
                                                                    return showList(newData,"", " ");
                                                                }
                                                                //let newData = ;// `<a href= https://ag-grid.com/${keyData}-getting-started target="_blank">${keyData}</a>`;
                                                                return cellValue;
                                                            }
                                                        }
                                                    ]
                                                }
                                                gridwidth={300}
                                            />
                                                )}
                                        </div>
                                    </div>
                            

                            </div>

                        </div> */}

                        <div className="favth-clearfix">
                            <div className="fieldset-pair-container" >
                                {
                                    // Object.keys(incomingObjectProperties).map(key =>

                                    // )
                                }
                                {Object.keys(incomingObjectProperties).map(key =>

                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">
                                            <span>{display(key)}</span></div>
                                            <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field" style={{maxHeight: '200px', overflow: 'auto'}}>
                                            <div>
                                                {/* {showList(makeHyperLinks(incomingObjectProperties[key]), "v")} */}
                                                {showList(incomingObjectProperties[key], "v")}

                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
    );
}
