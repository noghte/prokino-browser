import Layout from '../Layout';
import {display,showList} from '../StringHelper';
import React from "react";
export default function GenericItem({entityClass, localName, datatypeProperties,objectProperties,incomingObjectProperties})
{
    return (<Layout>
                <div id="fav-container" className="fav-container">
                    <div className="favth-container"> 
                        <div className="favth-row">
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
                                {Object.entries(objectProperties).map(([key, value]) =>
                                
                                    <div className="fieldset-pair-container" key={key}>
                                    <div className="favth-clearfix">
                                            <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">
                                                <span>{display(key)}</span></div>
                                                <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                    <div>
                                                    {showList(value)} 
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                  )}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            );
}
