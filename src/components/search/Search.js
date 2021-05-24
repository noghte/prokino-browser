import ToggleBox from '../ToggleBox';
import SearchOptions from './SearchOptions';
import SearchResults from './SearchResults';
import React, { useState,useEffect } from 'react';

export default function Search()
{
    const [input, setInput] = useState('');
    // const [query, setQuery] = useState('');
    // const [results, setResults] = useState([]);
    const [shouldShowResults, setShouldShowResults] = React.useState(false);
    const [shouldTrigger, setShouldTrigger] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState("rdfs:type=prokino:Protein");
    
    // useEffect(()=>{
    //   if (!input)
    //    {
    //      console.log("should clear")
    //      setShouldShowResults(false)
    //    }
    //    else
    //    {
    //     if (!shouldShowResults)
    //       setShouldShowResults(true);
    //    }
    // },[input])
    function inputChanged(e)
    {
      setShouldShowResults(false);
      setInput(e.target.value)
    }
    function doSearch(e)
    {
      e.preventDefault();
      setShouldShowResults(true);
      setShouldTrigger(true);
    }
    function handleFinishedSearch(isFinishedSearch)
    {
      setShouldTrigger(!isFinishedSearch);
    }
    function selectedOptionChanged(event) {
        setSelectedOption(event.target.value);
        setShouldTrigger(true);

      }
    return(
<div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
              <form>
                <br />
                <h4 className="align-center display-5">
                  Look into proteins, diseases, pathways, or all classes:
                </h4>
                  <div className="card-body row searchbox align-items-center">
                      <div className="col-auto">
                          <i className="fas fa-search h4 text-body"></i>
                      </div>
                      {/* end of col */}
                      <div className="col">
                          <input className="form-control form-control-borderless" type="search" placeholder="Search" defaltvalue={input} onInput={inputChanged} />
                      </div>
                      {/* end of col */}
                      <div className="col-auto">
                        <select className="form-control " id="sel1" value={selectedOption} onChange={selectedOptionChanged}>
                          <option value="rdfs:type=prokino:Protein">Proteins</option>
                          <option value="rdfs:type=prokino:Disease">Diseases</option>
                          <option value="rdfs:type=prokino:Pathway">Pathways</option>
                          <option value="rdfs:type=prokino:Pathway">Dark Kinase</option>

                          <option value="">All Classes</option>
                        </select>
                      </div>
                      <div className="col-auto">
                          <button className="btn btn-success" type="submit" onClick={doSearch}>Search</button>
                      </div>
      
                      {/* end of col */}
                  </div>
                  <div className="row">
                    <div className="col">
                    <ToggleBox title="Advanced Search">
                      <SearchOptions />
                  </ToggleBox>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                    {shouldShowResults && <SearchResults searchText={input} searchOption={selectedOption} triggerSearch={shouldTrigger} onFinishedSearch={handleFinishedSearch} />}
                    </div>
                  </div>
                  
              </form>
          </div>
          {/* end of col */}
      </div>
    );
}
